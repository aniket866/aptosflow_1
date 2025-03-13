import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  Wallet as WalletIcon, 
  ArrowDown, 
  ArrowUp, 
  Copy, 
  ExternalLink,
  Loader2,
  QrCode,
  RefreshCw,
  ShieldAlert,
  Coins
} from 'lucide-react';
import { useWallet } from '@/providers/WalletProvider';
import { SendTransaction } from '@/components/SendTransaction';
import aptosService, { AptosTokenBalance } from '@/services/aptos-service';
import { WalletInitializer } from '@/components/WalletInitializer';

const WalletPage = () => {
  const { toast } = useToast();
  const { connected, address, formattedAddress, connectWallet } = useWallet();
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<string>('0');
  const [tokens, setTokens] = useState<AptosTokenBalance[]>([]);
  const [walletInitialized, setWalletInitialized] = useState(false);

  useEffect(() => {
    document.title = 'Wallet | AptosFlow';
  }, []);

  useEffect(() => {
    if (connected && address) {
      fetchWalletData();
    }
  }, [connected, address]);

  const fetchWalletData = async () => {
    if (!address) return;
    
    setLoading(true);
    try {
      const balanceResult = await aptosService.getWalletBalance(address);
      setBalance(balanceResult);
      
      const tokensResult = await aptosService.getTokenBalances(address);
      setTokens(tokensResult);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
      toast({
        title: "Failed to load wallet data",
        description: "Could not load your wallet information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast({
        description: "Address copied to clipboard",
      });
    }
  };

  const handleWalletDetected = () => {
    setWalletInitialized(true);
  };

  if (!walletInitialized) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container max-w-7xl mx-auto px-4 py-24">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold">Wallet</h1>
            <p className="text-gray-600">Manage your Aptos assets</p>
          </div>
          
          <WalletInitializer onWalletDetected={handleWalletDetected} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold">Wallet</h1>
          <p className="text-gray-600">Manage your Aptos assets</p>
        </div>

        {connected ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-6">
              <Card className="border-none shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <WalletIcon className="mr-2 h-5 w-5 text-aptos-blue" />
                    Your Wallet
                  </CardTitle>
                  <CardDescription>
                    Connected to Aptos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-aptos-blue/10 to-aptos-coral/10 rounded-lg p-6 relative overflow-hidden">
                      {loading ? (
                        <Loader2 className="h-16 w-16 text-aptos-blue animate-spin mb-4" />
                      ) : (
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="text-4xl font-bold mb-1">{parseFloat(balance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}</div>
                          <div className="text-gray-500 mb-4">APT Balance</div>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={fetchWalletData}
                            className="rounded-full px-3"
                          >
                            <RefreshCw className="h-3 w-3 mr-1" />
                            Refresh
                          </Button>
                        </div>
                      )}
                      
                      <div className="absolute w-32 h-32 -top-16 -right-16 bg-gradient-to-br from-aptos-blue/20 to-aptos-coral/20 rounded-full blur-xl" />
                      <div className="absolute w-32 h-32 -bottom-16 -left-16 bg-gradient-to-br from-aptos-coral/20 to-aptos-blue/20 rounded-full blur-xl" />
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-gray-500 mb-2">Address</div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-800 font-mono truncate max-w-[180px]">
                          {address}
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={copyAddress}>
                            <Copy className="h-3.5 w-3.5" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            asChild
                          >
                            <a 
                              href={`https://explorer.devnet.aptos.dev/account/${address}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1 rounded-lg">
                        <ArrowDown className="mr-2 h-4 w-4" />
                        Receive
                      </Button>
                      <Button className="flex-1 rounded-lg bg-gradient-to-r from-aptos-blue to-aptos-coral">
                        <ArrowUp className="mr-2 h-4 w-4" />
                        Send
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-aptos-blue to-aptos-coral p-1">
                  <div className="bg-white dark:bg-background p-3 flex items-center">
                    <ShieldAlert className="h-5 w-5 text-amber-500 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium">Security Notice</h3>
                      <p className="text-xs text-gray-500">Never share your private keys or recovery phrases</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Tabs defaultValue="send" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="send">Send</TabsTrigger>
                  <TabsTrigger value="receive">Receive</TabsTrigger>
                  <TabsTrigger value="tokens">Tokens</TabsTrigger>
                </TabsList>
                
                <TabsContent value="send" className="mt-0">
                  <SendTransaction />
                </TabsContent>
                
                <TabsContent value="receive" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Receive APT</CardTitle>
                      <CardDescription>
                        Share your address to receive APT tokens
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <div className="bg-white p-4 rounded-lg border mb-4">
                        <QrCode className="h-48 w-48 text-gray-800" />
                      </div>
                      
                      <div className="w-full p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <code className="text-sm font-mono text-gray-800 truncate max-w-[300px]">
                          {address}
                        </code>
                        <Button variant="ghost" size="sm" onClick={copyAddress}>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </Button>
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4 text-center">
                        Send only APT or other Aptos-based assets to this address.
                        Sending any other coins may result in permanent loss.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="tokens" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Tokens</CardTitle>
                      <CardDescription>
                        All tokens in your Aptos wallet
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {loading ? (
                        <div className="flex justify-center py-8">
                          <Loader2 className="h-8 w-8 animate-spin text-aptos-blue" />
                        </div>
                      ) : tokens.length > 0 ? (
                        <div className="space-y-4">
                          {tokens.map((token, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-r from-aptos-blue to-aptos-coral rounded-full flex items-center justify-center mr-3">
                                  <Coins className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium">{token.tokenName}</div>
                                  <div className="text-xs text-gray-500">{token.tokenType.slice(0, 8)}...{token.tokenType.slice(-4)}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">{token.balance} {token.symbol}</div>
                                <div className="text-xs text-gray-500">{token.value ? `$${token.value}` : '—'}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          No tokens found in your wallet
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <WalletIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-display font-bold mb-2">Connect your wallet</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              Connect your Aptos wallet to view your balance, send transactions, and manage your assets.
            </p>
            <Button 
              onClick={connectWallet}
              className="rounded-full bg-gradient-to-r from-aptos-blue to-aptos-coral"
            >
              <WalletIcon className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default WalletPage;
