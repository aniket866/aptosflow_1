
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Wallet, QrCode, Import, Lock, DownloadCloud } from 'lucide-react';

const WalletConnect = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  
  const handleConnect = () => {
    setIsConnecting(true);
    // Simulating connection process
    setTimeout(() => {
      setIsConnecting(false);
    }, 2000);
  };
  
  return (
    <section className="section-padding">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-aptos-blue ring-1 ring-inset ring-blue-100/50 mb-4">
              <Wallet className="h-3.5 w-3.5 mr-1" />
              Wallet Integration
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Seamlessly Connect Your <span className="heading-gradient">Aptos Wallet</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Get started with AptosFlow by connecting your existing wallet or creating a new one.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl shadow-lg animate-fade-in">
            <Tabs defaultValue="connect" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="connect" className="text-sm">Connect Wallet</TabsTrigger>
                <TabsTrigger value="create" className="text-sm">Create New</TabsTrigger>
                <TabsTrigger value="import" className="text-sm">Import Wallet</TabsTrigger>
              </TabsList>
              
              <TabsContent value="connect" className="space-y-6">
                <div className="text-center px-4 py-6 bg-gradient-to-b from-blue-50 to-transparent rounded-lg">
                  <QrCode className="h-24 w-24 mx-auto text-aptos-blue mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Scan to Connect</h3>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
                    Use your Aptos wallet app to scan this QR code and establish a secure connection.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-16 justify-start px-4 border-gray-200 hover:bg-gray-50"
                  >
                    <div className="h-10 w-10 mr-3 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#1D9BF0"/>
                        <path d="M16.5 32C24.8 32 29.2 25 29.2 18.9C29.2 18.7 29.2 18.5 29.2 18.3C30.2 17.6 31.1 16.7 31.8 15.6C30.8 16 29.8 16.3 28.7 16.4C29.8 15.7 30.7 14.6 31.1 13.2C30 13.9 28.8 14.4 27.6 14.7C26.6 13.6 25.1 13 23.5 13C20.5 13 18 15.5 18 18.5C18 19 18.1 19.4 18.2 19.8C13.8 19.6 9.8 17.4 7.1 14.1C6.6 14.9 6.3 15.7 6.3 16.7C6.3 18.4 7.2 20 8.5 20.9C7.6 20.9 6.8 20.6 6.1 20.2C6.1 20.2 6.1 20.2 6.1 20.3C6.1 22.9 8 25.1 10.5 25.6C10 25.7 9.5 25.8 9 25.8C8.7 25.8 8.3 25.8 8 25.7C8.7 27.8 10.6 29.4 13 29.4C11.2 30.8 8.9 31.7 6.4 31.7C5.9 31.7 5.5 31.7 5 31.6C7.4 33.1 10.2 34 13.3 34" fill="white"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Petra Wallet</div>
                      <div className="text-xs text-gray-500">Connect with Petra</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-16 justify-start px-4 border-gray-200 hover:bg-gray-50"
                  >
                    <div className="h-10 w-10 mr-3 rounded-full bg-orange-50 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#FF8C00"/>
                        <path d="M28 20.5C28 16.9 25.1 14 21.5 14H14V27H21.5C25.1 27 28 24.1 28 20.5ZM21.5 25H16V16H21.5C24 16 26 18 26 20.5C26 23 24 25 21.5 25Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Martian Wallet</div>
                      <div className="text-xs text-gray-500">Connect with Martian</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-16 justify-start px-4 border-gray-200 hover:bg-gray-50"
                  >
                    <div className="h-10 w-10 mr-3 rounded-full bg-purple-50 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#7B61FF"/>
                        <path d="M29 17.1V14H11V26H14.1C14.5 28.3 16.5 30 19 30C21.5 30 23.5 28.3 23.9 26H29V22.9C27.2 22.4 26 20.8 26 19C26 17.2 27.2 15.6 29 15.1V17.1ZM19 28C17.3 28 16 26.7 16 25C16 23.3 17.3 22 19 22C20.7 22 22 23.3 22 25C22 26.7 20.7 28 19 28ZM29 20C29 20.6 28.6 21 28 21H25.1C25.5 18.7 27.5 17 30 17V19C29.4 19 29 19.4 29 20Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Pontem Wallet</div>
                      <div className="text-xs text-gray-500">Connect with Pontem</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-16 justify-start px-4 border-gray-200 hover:bg-gray-50"
                  >
                    <div className="h-10 w-10 mr-3 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#292D32"/>
                        <path d="M12 19V13H20V19H12ZM12 27V21H20V27H12ZM22 19V13H30V19H22ZM22 27V21H30V27H22Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Rise Wallet</div>
                      <div className="text-xs text-gray-500">Connect with Rise</div>
                    </div>
                  </Button>
                </div>
                
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="w-full rounded-xl bg-gradient-to-r from-aptos-blue to-aptos-coral text-white"
                    onClick={handleConnect}
                    disabled={isConnecting}
                  >
                    {isConnecting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Connecting...
                      </>
                    ) : (
                      <>
                        Connect Wallet
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="create" className="space-y-6">
                <div className="text-center px-6 py-8 bg-gradient-to-b from-blue-50 to-transparent rounded-lg">
                  <DownloadCloud className="h-16 w-16 mx-auto text-aptos-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Create a New Wallet</h3>
                  <p className="text-gray-600 max-w-sm mx-auto mb-6">
                    Generate a new Aptos wallet and secure your digital assets with a recovery phrase.
                  </p>
                  <Button 
                    size="lg" 
                    className="rounded-xl bg-gradient-to-r from-aptos-blue to-aptos-coral text-white"
                  >
                    Create New Wallet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="import" className="space-y-6">
                <div className="text-center px-6 py-8 bg-gradient-to-b from-blue-50 to-transparent rounded-lg">
                  <Import className="h-16 w-16 mx-auto text-aptos-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Import Existing Wallet</h3>
                  <p className="text-gray-600 max-w-sm mx-auto mb-6">
                    Import your existing wallet using a recovery phrase or private key.
                  </p>
                  <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-gray-200 hover:bg-gray-50"
                    >
                      <Lock className="mr-2 h-5 w-5 text-aptos-blue" />
                      Import with Recovery Phrase
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-gray-200 hover:bg-gray-50"
                    >
                      <Import className="mr-2 h-5 w-5 text-aptos-blue" />
                      Import with Private Key
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletConnect;
