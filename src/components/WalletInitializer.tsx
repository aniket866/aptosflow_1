
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { isWalletAvailable, detectWallet } from '@/lib/wallet-script';

type WalletInstallerProps = {
  onWalletDetected: () => void;
};

export const WalletInitializer = ({ onWalletDetected }: WalletInstallerProps) => {
  const [isChecking, setIsChecking] = useState(true);
  const [walletFound, setWalletFound] = useState(false);

  useEffect(() => {
    const checkWallet = async () => {
      setIsChecking(true);
      
      // Check if wallet is available
      const available = isWalletAvailable();
      setWalletFound(available);
      
      if (available) {
        onWalletDetected();
      }
      
      setIsChecking(false);
    };
    
    checkWallet();
    
    // Set up an interval to check for wallet periodically
    const checkInterval = setInterval(() => {
      const available = detectWallet();
      if (available) {
        setWalletFound(true);
        onWalletDetected();
        clearInterval(checkInterval);
      }
    }, 2000);
    
    return () => clearInterval(checkInterval);
  }, [onWalletDetected]);

  const handleInstallWallet = (walletUrl: string) => {
    window.open(walletUrl, '_blank');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  if (isChecking) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Checking for Wallet</CardTitle>
          <CardDescription className="text-center">
            Looking for an Aptos wallet extension...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <Loader2 className="h-10 w-10 animate-spin text-aptos-blue" />
        </CardContent>
      </Card>
    );
  }

  if (!walletFound) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Wallet Required</CardTitle>
          <CardDescription className="text-center">
            To use AptosFlow, you need to install an Aptos wallet extension
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <p className="text-sm text-amber-700">No wallet extension detected</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Button 
              variant="outline" 
              className="flex flex-col items-center justify-center h-28 p-2"
              onClick={() => handleInstallWallet('https://petra.app/')}
            >
              <img src="https://petra.app/petra_logo.svg" className="h-12 w-12 mb-2" alt="Petra Wallet" />
              <span className="text-xs text-center">Install Petra Wallet</span>
              <ExternalLink className="h-3 w-3 mt-1" />
            </Button>
            
            <Button 
              variant="outline" 
              className="flex flex-col items-center justify-center h-28 p-2"
              onClick={() => handleInstallWallet('https://martianwallet.xyz/')}
            >
              <img src="https://martianwallet.xyz/assets/images/logo.svg" className="h-12 w-12 mb-2" alt="Martian Wallet" />
              <span className="text-xs text-center">Install Martian Wallet</span>
              <ExternalLink className="h-3 w-3 mt-1" />
            </Button>
          </div>
          
          <p className="text-sm text-center text-gray-500">
            After installing a wallet extension, please refresh this page.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleRefresh}>
            Refresh Page
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return null;
};

export default WalletInitializer;
