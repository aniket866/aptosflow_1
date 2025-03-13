
import { useToast } from '@/components/ui/use-toast';

// Poll for transaction status
export const pollTransactionStatus = async (
  txHash: string, 
  onSuccess?: (txData: any) => void,
  onError?: (error: Error) => void,
  maxAttempts = 10
): Promise<boolean> => {
  // URL for devnet explorer API
  const apiUrl = `https://fullnode.devnet.aptoslabs.com/v1/transactions/by_hash/${txHash}`;
  
  let attempts = 0;
  
  return new Promise((resolve) => {
    const checkStatus = async () => {
      if (attempts >= maxAttempts) {
        if (onError) onError(new Error('Transaction confirmation timeout'));
        resolve(false);
        return;
      }
      
      attempts++;
      
      try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          // If not found yet or other error, try again
          setTimeout(checkStatus, 2000);
          return;
        }
        
        const txData = await response.json();
        
        // Check if transaction is successful
        if (txData.success === true) {
          if (onSuccess) onSuccess(txData);
          resolve(true);
          return;
        } else if (txData.vm_status === "pending") {
          // Still pending, check again
          setTimeout(checkStatus, 2000);
        } else {
          // Failed with VM error
          if (onError) onError(new Error(`Transaction failed: ${txData.vm_status}`));
          resolve(false);
        }
      } catch (error) {
        console.error("Error checking transaction status:", error);
        // Network error, try again
        setTimeout(checkStatus, 2000);
      }
    };
    
    // Start checking
    checkStatus();
  });
};

// Hook to track a transaction
export const useTransactionTracker = () => {
  const { toast } = useToast();
  
  const trackTransaction = async (txHash: string): Promise<boolean> => {
    return pollTransactionStatus(
      txHash,
      (txData) => {
        toast({
          title: "Transaction Confirmed",
          description: `Transaction has been confirmed on the blockchain.`,
        });
      },
      (error) => {
        toast({
          title: "Transaction Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    );
  };
  
  return { trackTransaction };
};

export default useTransactionTracker;
