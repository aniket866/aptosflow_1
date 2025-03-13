
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import WalletConnect from '@/components/WalletConnect';
import { ArrowRight, Github, Twitter, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useWallet } from '@/providers/WalletProvider';
import { ConnectWallet } from '@/components/ConnectWallet';

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { connected } = useWallet();

  useEffect(() => {
    document.title = 'AptosFlow | Next Generation Blockchain Experience';
  }, []);

  const handleGetStarted = () => {
    navigate('/wallet');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleSocialLink = (platform: string) => {
    toast({
      title: `Opening ${platform}`,
      description: `You would be redirected to our ${platform} page.`,
    });
  };

  const handleFooterLink = (section: string, item: string) => {
    // Handle special cases to navigate to existing pages
    if (item === 'Staking') {
      navigate('/wallet');
      return;
    }
    
    if (item === 'About') {
      navigate('/about');
      return;
    }
    
    if (item === 'Documentation' || item === 'Developers' || item === 'API Reference') {
      navigate('/developers');
      return;
    }
    
    if (item === 'Status') {
      navigate('/dashboard');
      return;
    }
    
    // Default toast for other links
    toast({
      title: `${item}`,
      description: `Navigating to ${section} - ${item}`,
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Stats />
        <WalletConnect />
        
        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-aptos-navy to-aptos-blue text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:max-w-xl mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Experience the Future of Blockchain?
                </h2>
                <p className="text-white/80 text-lg">
                  Join thousands of users already using AptosFlow to interact with the Aptos blockchain.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-aptos-navy hover:bg-white/90 rounded-xl"
                  onClick={handleGetStarted}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 rounded-xl"
                  onClick={handleLearnMore}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-aptos-blue to-aptos-coral p-[1px]">
                    <div className="h-full w-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <svg height="16" width="16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M84.2,96H50.5l-3.5-2.5c-2.2-1.5-3.4-4-3.4-6.7V32.7c0-2.6,1.3-5.1,3.5-6.7l3.2-2.2h34.2c2.6,0,5.1,1.3,6.6,3.5l2,3v59.3 c0,2.6-1.3,5.1-3.4,6.7L84.2,96z" fill="#0891b2"/>
                        <path d="M49.6,23.8H15.9l-3-2.1c-2.3-1.6-3.4-4.3-3-7l0.2-1.4c0.4-2.8,2.2-5.3,4.8-6.3l3-1.2h34c2.6,0,5.1,1.3,6.6,3.5l2,3 v4.1c0,2.6-1.3,5.1-3.5,6.7L49.6,23.8z" fill="#f97316"/>
                        <path d="M49.6,75.2H15.9l-3-2.1c-2.3-1.6-3.4-4.3-3-7l0.2-1.4c0.4-2.8,2.2-5.3,4.8-6.3l3-1.2h34c2.6,0,5.1,1.3,6.6,3.5l2,3 v4.1c0,2.6-1.3,5.1-3.5,6.7L49.6,75.2z" fill="#1e293b"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-lg font-display font-bold bg-gradient-to-r from-aptos-blue to-aptos-coral bg-clip-text text-transparent">
                    AptosFlow
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Next generation blockchain experience powered by Aptos.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-aptos-blue transition-colors" onClick={() => handleSocialLink('Twitter')}>
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-aptos-blue transition-colors" onClick={() => handleSocialLink('Github')}>
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-aptos-blue transition-colors" onClick={() => handleSocialLink('Discord')}>
                    <MessageSquare size={20} />
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm">Dashboard</a></li>
                    <li><a href="/wallet" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm">Wallet</a></li>
                    <li><a href="/transactions" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm">Transactions</a></li>
                    <li><a href="/nfts" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm">NFTs</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Product', 'Staking')}>Staking</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Resources', 'Documentation')}>Documentation</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Resources', 'Developers')}>Developers</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Resources', 'API Reference')}>API Reference</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Resources', 'Status')}>Status</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Resources', 'Roadmap')}>Roadmap</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm">About</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Company', 'Blog')}>Blog</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Company', 'Careers')}>Careers</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Company', 'Press')}>Press</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Company', 'Contact')}>Contact</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Legal', 'Privacy')}>Privacy</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Legal', 'Terms')}>Terms</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Legal', 'Cookies')}>Cookies</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Legal', 'Licenses')}>Licenses</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-aptos-blue dark:hover:text-aptos-blue text-sm" onClick={() => handleFooterLink('Legal', 'Settings')}>Settings</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} AptosFlow. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
