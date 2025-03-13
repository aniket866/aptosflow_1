
import React, { createContext, useContext, ReactNode } from 'react';
import { useAptosWallet, WalletState } from '@/hooks/use-aptos-wallet';

// Create context with all the values from useAptosWallet
type WalletContextType = WalletState & {
  connectWallet: () => Promise<string | undefined>;
  disconnectWallet: () => void;
  checkWalletConnection: () => Promise<boolean>;
  forceDetectWallet: () => boolean;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const walletState = useAptosWallet();
  
  return (
    <WalletContext.Provider value={walletState}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export default WalletProvider;
