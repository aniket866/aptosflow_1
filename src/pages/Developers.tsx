
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Code, ChevronRight, Book, Database, Terminal, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DevelopersPage = () => {
  useEffect(() => {
    document.title = 'Developer Tools | AptosFlow';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-aptos-navy dark:text-white">Developer</span> <span className="text-aptos-blue">Tools</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Access powerful APIs and resources to build on the Aptos blockchain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-r from-aptos-blue/20 to-aptos-navy/20 mb-8 flex items-center justify-center">
                <Code className="h-24 w-24 text-aptos-navy dark:text-white" />
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Building on Aptos</h2>
                <p>
                  AptosFlow provides developers with a comprehensive suite of tools, libraries, and APIs to build secure, scalable applications on the Aptos blockchain. Whether you're developing DeFi applications, NFT marketplaces, or Web3 games, our developer resources make it easy to get started.
                </p>
                
                <h3>Key Benefits</h3>
                <ul>
                  <li>Access to high-performance Aptos node infrastructure</li>
                  <li>Comprehensive SDKs in multiple languages (TypeScript, Python, Rust)</li>
                  <li>Detailed documentation and code examples</li>
                  <li>Developer-friendly APIs with clear error messages</li>
                  <li>Testing tools and local development environment</li>
                  <li>Community support and integration assistance</li>
                </ul>
              </div>
            </div>
            
            <div className="col-span-1">
              <Card className="bg-aptos-navy/5 dark:bg-gray-800 border-none shadow-md h-full">
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>Begin your Aptos development journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Link to="#" className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                      <div className="flex items-center">
                        <Book className="h-5 w-5 text-aptos-blue mr-3" />
                        <span>Setup Guide</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                    
                    <Link to="#" className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                      <div className="flex items-center">
                        <Terminal className="h-5 w-5 text-aptos-blue mr-3" />
                        <span>CLI Tools</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                    
                    <Link to="#" className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                      <div className="flex items-center">
                        <Cpu className="h-5 w-5 text-aptos-blue mr-3" />
                        <span>Move Language</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                    
                    <Link to="#" className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                      <div className="flex items-center">
                        <Database className="h-5 w-5 text-aptos-blue mr-3" />
                        <span>Smart Contracts</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </div>
                  
                  <Button className="w-full bg-aptos-blue hover:bg-aptos-blue/90">
                    Access Documentation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Tabs defaultValue="sdks" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-xl mx-auto mb-8">
              <TabsTrigger value="sdks">SDKs</TabsTrigger>
              <TabsTrigger value="apis">APIs</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sdks">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>TypeScript SDK</CardTitle>
                    <CardDescription>For web and Node.js applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      A comprehensive TypeScript SDK for interacting with the Aptos blockchain from web applications or Node.js servers.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Documentation
                      </Button>
                      <Button size="sm">
                        Install
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Python SDK</CardTitle>
                    <CardDescription>For data science and scripts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Python SDK for building Aptos-powered applications, data analysis, and automation scripts.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Documentation
                      </Button>
                      <Button size="sm">
                        Install
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Rust SDK</CardTitle>
                    <CardDescription>For high-performance applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Rust SDK for building high-performance applications on the Aptos blockchain.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Documentation
                      </Button>
                      <Button size="sm">
                        Install
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="apis">
              <div className="grid grid-cols-1 gap-6">
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>RESTful API</CardTitle>
                    <CardDescription>Comprehensive blockchain interaction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      The Aptos REST API provides a comprehensive interface for interacting with the Aptos blockchain. It allows you to query blockchain data, submit transactions, and monitor network status.
                    </p>
                    
                    <div className="rounded-md bg-gray-50 dark:bg-gray-800 p-4 overflow-auto mb-6">
                      <pre className="text-sm text-gray-800 dark:text-gray-200">
                        <code>
{`// Example API call to retrieve account information
const response = await fetch(
  'https://api.aptosflow.com/v1/accounts/0x1',
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'YOUR_API_KEY'
    }
  }
);

const accountData = await response.json();`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button>
                        API Reference
                      </Button>
                      <Button variant="outline">
                        Request API Key
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>AptosFlow CLI</CardTitle>
                    <CardDescription>Command-line interface for developers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      A powerful command-line tool for interacting with the Aptos blockchain, managing accounts, and deploying smart contracts.
                    </p>
                    <Button>
                      Install CLI
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Local Development Environment</CardTitle>
                    <CardDescription>Test your dApps locally</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Set up a local Aptos environment for testing and development without connecting to testnet or mainnet.
                    </p>
                    <Button>
                      Setup Guide
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Move Playground</CardTitle>
                    <CardDescription>Interactive Move language editor</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      An online IDE for writing, testing, and deploying Move modules without setting up a local environment.
                    </p>
                    <Button>
                      Launch Playground
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Faucet</CardTitle>
                    <CardDescription>Get testnet tokens for development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Request testnet APT tokens for testing your applications on the Aptos testnet.
                    </p>
                    <Button>
                      Get Testnet Tokens
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 bg-gradient-to-r from-aptos-blue/10 to-aptos-navy/10 p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              <div className="md:max-w-lg mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-2">Join the Developer Community</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with other Aptos developers, get help, and share your work in our community channels.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline">Discord</Button>
                <Button variant="outline">GitHub</Button>
                <Button className="bg-aptos-blue hover:bg-aptos-blue/90">Developer Forum</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevelopersPage;
