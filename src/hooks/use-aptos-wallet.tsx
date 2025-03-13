
import { useState, useEffect, useCallback } from 'react';
import { formatAddress } from '@/lib/aptos';
import { useToast } from '@/components/ui/use-toast';
import { detectWallet, isWalletAvailable } from '@/lib/wallet-script';

export type WalletState = {
  connected: boolean;
  address: string | null;
  formattedAddress: string | null;
  connecting: boolean;
  error: string | null;
  walletDetected: boolean;
};

export const useAptosWallet = () => {
  const { toast } = useToast();
  const [state, setState] = useState<WalletState>({
    connected: false,
    address: null,
    formattedAddress: null,
    connecting: false,
    error: null,
    walletDetected: false,
  });

  const checkWalletConnection = useCallback(async () => {
    if (typeof window === 'undefined') {
      return false;
    }
    
    // First check if wallet is detected
    const walletAvailable = isWalletAvailable();
    setState(prev => ({ ...prev, walletDetected: walletAvailable }));
    
    if (!walletAvailable) {
      return false;
    }

    try {
      // Try getting the account from the wallet
      const { address } = await window.aptos.account();
      if (address) {
        setState({
          connected: true,
          address,
          formattedAddress: formatAddress(address),
          connecting: false,
          error: null,
          walletDetected: true,
        });
        console.log("Wallet connected with address:", address);
        return true;
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
      // Some wallets might throw if not connected, which is normal
    }

    setState(prev => ({
      ...prev,
      connected: false,
      address: null,
      formattedAddress: null,
      error: null,
    }));
    
    return false;
  }, []);

  const handleWalletNotFound = useCallback(() => {
    setState(prev => ({ 
      ...prev, 
      walletDetected: false,
      error: 'No Aptos wallet detected. Please install a wallet extension.'
    }));
  }, []);

  const forceDetectWallet = useCallback(() => {
    const detected = detectWallet();
    setState(prev => ({ ...prev, walletDetected: detected }));
    return detected;
  }, []);

  const connectWallet = useCallback(async () => {
    if (typeof window === 'undefined') return;

    // Try to detect wallet again if needed
    if (!state.walletDetected) {
      const detected = forceDetectWallet();
      if (!detected) {
        setState(prev => ({
          ...prev,
          error: 'Aptos wallet not found. Please install Petra, Martian, or another Aptos wallet.',
        }));
        
        toast({
          title: "Wallet not detected",
          description: "Please install an Aptos wallet extension like Petra or Martian.",
          variant: "destructive",
        });
        
        console.error("Aptos wallet not found in window object");
        return;
      }
    }

    setState(prev => ({ ...prev, connecting: true, error: null }));
    console.log("Connecting to wallet...");

    try {
      const { address } = await window.aptos.connect();
      console.log("Connected to wallet with address:", address);
      
      setState({
        connected: true,
        address,
        formattedAddress: formatAddress(address),
        connecting: false,
        error: null,
        walletDetected: true,
      });

      toast({
        title: "Wallet connected",
        description: `Connected to ${formatAddress(address)}`,
      });

      return address;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      
      setState(prev => ({
        ...prev,
        connected: false,
        connecting: false,
        error: 'Failed to connect wallet. Please try again.'
      }));
      
      toast({
        title: "Connection failed",
        description: "Could not connect to wallet. Please try again.",
        variant: "destructive",
      });
    }
  }, [forceDetectWallet, state.walletDetected, toast]);

  const disconnectWallet = useCallback(() => {
    if (typeof window !== 'undefined' && window.aptos) {
      try {
        window.aptos.disconnect();
        console.log("Wallet disconnected");
      } catch (error) {
        console.error("Error disconnecting wallet:", error);
      }
    }
    
    setState(prev => ({
      ...prev,
      connected: false,
      address: null,
      formattedAddress: null,
      connecting: false,
      error: null,
    }));
    
    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected.",
    });
  }, [toast]);

  // Check if wallet is already connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      // Small delay to ensure wallet script has loaded
      setTimeout(async () => {
        await checkWalletConnection();
      }, 1500);
    };

    checkConnection();

    // Listen for custom events
    const handleWalletConnected = () => {
      console.log("Wallet connected event detected");
      checkWalletConnection();
    };

    window.addEventListener('aptos:walletConnected', handleWalletConnected);
    window.addEventListener('aptos:walletNotFound', handleWalletNotFound);

    // Setup event listener for account changes if wallet supports it
    const handleAccountChange = () => {
      console.log("Account change detected, refreshing wallet state");
      checkWalletConnection();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('aptos:accountChanged', handleAccountChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('aptos:accountChanged', handleAccountChange);
        window.removeEventListener('aptos:walletConnected', handleWalletConnected);
        window.removeEventListener('aptos:walletNotFound', handleWalletNotFound);
      }
    };
  }, [checkWalletConnection, handleWalletNotFound]);

  return {
    ...state,
    connectWallet,
    disconnectWallet,
    checkWalletConnection,
    forceDetectWallet,
  };
};

// Fix the type declaration for window.aptos by merging with any existing declarations
declare global {
  interface Window {
    aptos?: {
      connect: () => Promise<{ address: string }>;
      disconnect: () => void;
      isConnected: () => Promise<boolean>;
      account: () => Promise<{ address: string }>;
      signAndSubmitTransaction: (transaction: any) => Promise<{ hash: string }>;
      signTransaction: (transaction: any) => Promise<any>;
      network?: () => Promise<{ name: string; chainId: string }>;
      onAccountChange?: (callback: (account: { address: string }) => void) => void;
      onNetworkChange?: (callback: (network: { name: string; chainId: string }) => void) => void;
    };
    aptosWalletDetected?: boolean;
  }
}

export default useAptosWallet;
