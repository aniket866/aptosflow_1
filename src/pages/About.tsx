
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Terminal, 
  BarChart3, 
  Coins, 
  Zap, 
  Clock, 
  Users, 
  Globe, 
  ChevronRight 
} from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'About AptosFlow | Next Generation Blockchain Experience';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-aptos-navy to-aptos-blue">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About AptosFlow</h1>
              <p className="text-xl text-white/80 mb-8">
                Learn more about our mission to make blockchain technology accessible to everyone.
              </p>
              <Button 
                className="bg-white text-aptos-navy hover:bg-white/90"
                onClick={() => navigate('/wallet')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>
        
        {/* Mission Statement */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                AptosFlow is designed to bridge the gap between complex blockchain technology and everyday users. 
                We're on a mission to provide a seamless, intuitive interface for interacting with the Aptos blockchain,
                making decentralized finance and digital assets accessible to everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-aptos-blue" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Security First</h3>
                    <p className="text-gray-600">
                      We prioritize security in every aspect of our platform, employing industry-leading 
                      standards to protect your assets and data.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <Terminal className="h-6 w-6 text-aptos-blue" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">
                      Built on the latest Aptos blockchain infrastructure, we offer lightning-fast 
                      transactions and cutting-edge smart contract capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-aptos-blue" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">User-Centered Design</h3>
                    <p className="text-gray-600">
                      Our intuitive interface strips away complexity, making blockchain 
                      interaction accessible to beginners while remaining powerful for experts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Key Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how AptosFlow transforms your blockchain experience with powerful,
                yet easy-to-use features designed for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Wallet className="h-5 w-5 text-aptos-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Wallet</h3>
                <p className="text-gray-600 mb-4">
                  Manage your digital assets with our secure, user-friendly wallet solution.
                </p>
                <a 
                  href="/wallet" 
                  className="text-aptos-blue font-medium inline-flex items-center text-sm"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <BarChart3 className="h-5 w-5 text-aptos-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Access detailed insights and analytics for all your blockchain activities.
                </p>
                <a 
                  href="/dashboard" 
                  className="text-aptos-blue font-medium inline-flex items-center text-sm"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Coins className="h-5 w-5 text-aptos-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">NFT Management</h3>
                <p className="text-gray-600 mb-4">
                  Easily browse, manage, and transact with your NFT collection.
                </p>
                <a 
                  href="/nfts" 
                  className="text-aptos-blue font-medium inline-flex items-center text-sm"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Zap className="h-5 w-5 text-aptos-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Transactions</h3>
                <p className="text-gray-600 mb-4">
                  Experience lightning-fast transaction processing on the Aptos blockchain.
                </p>
                <a 
                  href="/transactions" 
                  className="text-aptos-blue font-medium inline-flex items-center text-sm"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-aptos-navy to-aptos-blue rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-3xl font-display font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl mb-8">
                  Join thousands of users already experiencing the future of blockchain with AptosFlow.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    className="bg-white text-aptos-navy hover:bg-white/90"
                    onClick={() => navigate('/wallet')}
                  >
                    Create Wallet
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => navigate('/dashboard')}
                  >
                    Explore Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AptosFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

function Wallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

export default About;
