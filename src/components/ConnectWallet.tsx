import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Wallet, AlertCircle, Check, ExternalLink, Loader2 } from 'lucide-react';
import { useAptosWallet } from '@/hooks/use-aptos-wallet';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const ConnectWallet = () => {
  const { 
    connected, 
    formattedAddress, 
    connecting, 
    error, 
    walletDetected,
    connectWallet, 
    disconnectWallet,
    forceDetectWallet
  } = useAptosWallet();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const handleConnect = async (walletName?: string) => {
    setSelectedWallet(walletName || 'wallet');
    await connectWallet();
    // Keep dialog open if there was an error
    if (connected) {
      setIsOpen(false);
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setIsOpen(false);
  };

  const handleInstallWallet = (walletUrl: string) => {
    window.open(walletUrl, '_blank');
  };

  // Check for wallet again when dialog opens
  useEffect(() => {
    if (isOpen) {
      forceDetectWallet();
    }
  }, [isOpen, forceDetectWallet]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="sm" 
          className="rounded-full bg-gradient-to-r from-aptos-blue to-aptos-coral text-white hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
        >
          {connected ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              {formattedAddress}
            </>
          ) : (
            <>
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {connected ? 'Wallet Connected' : 'Connect to Aptos Wallet'}
          </DialogTitle>
          <DialogDescription>
            {connected 
              ? 'Your wallet is connected to AptosFlow.' 
              : 'Connect your Aptos wallet to access the full features of AptosFlow.'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6">
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {connected ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                <Check className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">Connected to wallet</p>
                  <p className="text-sm text-gray-500">Address: {formattedAddress}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {!walletDetected ? (
                <div className="space-y-4">
                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    <AlertDescription>
                      No Aptos wallet detected. Please install one of the wallets below.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="flex flex-col items-center justify-center h-24 p-2"
                      onClick={() => handleInstallWallet('https://petra.app/')}
                    >
                      <img src="https://petra.app/petra_logo.svg" className="h-10 w-10 mb-2" alt="Petra Wallet" />
                      <span className="text-xs">Install Petra</span>
                      <ExternalLink className="h-3 w-3 mt-1" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="flex flex-col items-center justify-center h-24 p-2"
                      onClick={() => handleInstallWallet('https://martianwallet.xyz/')}
                    >
                      <img src="https://martianwallet.xyz/assets/images/logo.svg" className="h-10 w-10 mb-2" alt="Martian Wallet" />
                      <span className="text-xs">Install Martian</span>
                      <ExternalLink className="h-3 w-3 mt-1" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-center text-gray-500">
                    After installing, please refresh this page.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className={`${
                      connecting && selectedWallet === 'petra' ? 'border-aptos-blue bg-blue-50' : 'bg-white border-gray-200'
                    } border rounded-lg p-4 hover:border-aptos-blue hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col items-center justify-center`} 
                    onClick={() => handleConnect('petra')}
                  >
                    {connecting && selectedWallet === 'petra' ? (
                      <Loader2 className="h-12 w-12 mb-2 animate-spin text-aptos-blue" />
                    ) : (
                      <img src="https://petra.app/petra_logo.svg" className="h-12 w-12 mb-2" alt="Petra Wallet" />
                    )}
                    <p className="text-sm font-medium">Petra Wallet</p>
                  </div>
                  <div 
                    className={`${
                      connecting && selectedWallet === 'martian' ? 'border-aptos-coral bg-orange-50' : 'bg-white border-gray-200'
                    } border rounded-lg p-4 hover:border-aptos-blue hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col items-center justify-center`} 
                    onClick={() => handleConnect('martian')}
                  >
                    {connecting && selectedWallet === 'martian' ? (
                      <Loader2 className="h-12 w-12 mb-2 animate-spin text-aptos-coral" />
                    ) : (
                      <img src="https://martianwallet.xyz/assets/images/logo.svg" className="h-12 w-12 mb-2" alt="Martian Wallet" />
                    )}
                    <p className="text-sm font-medium">Martian Wallet</p>
                  </div>
                </div>
              )}
              
              {walletDetected && (
                <div className="text-sm text-gray-500 text-center">
                  Don't have a wallet yet? Visit <a href="https://petra.app" target="_blank" rel="noopener noreferrer" className="text-aptos-blue hover:underline">Petra Wallet</a> or <a href="https://martianwallet.xyz" target="_blank" rel="noopener noreferrer" className="text-aptos-blue hover:underline">Martian Wallet</a> to create one.
                </div>
              )}
            </div>
          )}
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between">
          {connected ? (
            <Button 
              variant="outline" 
              onClick={handleDisconnect} 
              className="w-full sm:w-auto"
            >
              Disconnect Wallet
            </Button>
          ) : walletDetected ? (
            <Button 
              onClick={() => handleConnect()} 
              className="w-full sm:w-auto bg-gradient-to-r from-aptos-blue to-aptos-coral"
              disabled={connecting}
            >
              {connecting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                'Connect Wallet'
              )}
            </Button>
          ) : (
            <Button 
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto"
            >
              Refresh Page
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWallet;
