
import { useEffect } from 'react';
import { loadWalletScript } from '@/lib/wallet-script';
import { useAptosWallet } from '@/hooks/use-aptos-wallet';
import { useToast } from '@/components/ui/use-toast';

export function EnhancedWalletInitializer() {
  const { toast } = useToast();
  const { checkWalletConnection } = useAptosWallet();

  useEffect(() => {
    // Initialize wallet script
    loadWalletScript();
    
    // Set up listeners for wallet network and account changes
    const handleNetworkChange = (network: { name: string; chainId: string }) => {
      console.log("Network changed to:", network.name);
      toast({
        title: "Network Changed",
        description: `Connected to ${network.name}`,
      });
      // Refresh connection to get updated account state
      checkWalletConnection();
    };

    const handleAccountChange = (account: { address: string }) => {
      console.log("Account changed to:", account.address);
      toast({
        title: "Account Changed",
        description: `Connected to account ending in ...${account.address.slice(-4)}`,
      });
      // Refresh connection
      checkWalletConnection();
      // Dispatch custom event for other components to react
      window.dispatchEvent(new CustomEvent('aptos:accountChanged', { 
        detail: { address: account.address } 
      }));
    };

    // Set up listeners when wallet becomes available
    const setupListeners = () => {
      if (typeof window !== 'undefined' && window.aptos) {
        if (window.aptos.onNetworkChange) {
          window.aptos.onNetworkChange(handleNetworkChange);
        }
        if (window.aptos.onAccountChange) {
          window.aptos.onAccountChange(handleAccountChange);
        }
      }
    };

    // Try to set up listeners immediately if wallet is already available
    setupListeners();

    // Also set up listeners when wallet is detected
    const handleWalletDetected = () => {
      setupListeners();
    };

    window.addEventListener('aptos:walletConnected', handleWalletDetected);

    return () => {
      window.removeEventListener('aptos:walletConnected', handleWalletDetected);
    };
  }, [toast, checkWalletConnection]);

  return null; // This component doesn't render anything
}

export default EnhancedWalletInitializer;
