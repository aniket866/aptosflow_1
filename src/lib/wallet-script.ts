
export const loadWalletScript = () => {
  if (typeof document === 'undefined') return;

  // Create a global trigger for when wallet is detected
  window.aptosWalletDetected = false;

  // Check if wallet is present
  const checkWalletInterval = setInterval(() => {
    if (window.aptos) {
      console.log("Aptos wallet detected");
      window.aptosWalletDetected = true;
      clearInterval(checkWalletInterval);
      
      // Initialize any wallet-specific setup if needed
      try {
        // Petra wallet sometimes needs this for full initialization
        if (window.aptos.isConnected) {
          window.aptos.isConnected().then(connected => {
            if (connected) {
              console.log("Wallet is already connected");
              // Dispatch a custom event that our app can listen for
              window.dispatchEvent(new CustomEvent('aptos:walletConnected'));
            }
          }).catch(err => {
            console.warn("Error checking connection status:", err);
          });
        }
      } catch (error) {
        console.warn("Error during wallet initialization:", error);
      }
    } else {
      console.log("Waiting for Aptos wallet...");
    }
  }, 500);

  // Clear interval after 10 seconds to avoid long-running check
  setTimeout(() => {
    clearInterval(checkWalletInterval);
    if (!window.aptos) {
      console.warn("No Aptos wallet detected after timeout");
      // Dispatch a custom event for no wallet found after timeout
      window.dispatchEvent(new CustomEvent('aptos:walletNotFound'));
    }
  }, 10000);
};

// Helper function to check if wallet is available
export const isWalletAvailable = () => {
  return typeof window !== 'undefined' && !!window.aptos;
};

// Add manual wallet detection function that can be called on demand
export const detectWallet = () => {
  if (typeof window !== 'undefined' && window.aptos) {
    console.log("Wallet detected manually");
    window.aptosWalletDetected = true;
    return true;
  }
  console.log("No wallet detected manually");
  return false;
};

// Using the same type declaration as in use-aptos-wallet.tsx
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

export default loadWalletScript;
