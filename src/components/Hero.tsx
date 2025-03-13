
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Shield, Zap, Database } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/wallet');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="relative overflow-hidden section-padding bg-hero-pattern min-h-screen flex items-center mt-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-aptos-blue ring-1 ring-inset ring-blue-100/50">
                <Zap className="h-3.5 w-3.5 mr-1" />
                Powered by Aptos Blockchain
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Next Generation <br />
              <span className="heading-gradient">Blockchain Experience</span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-lg">
              AptosFlow provides a seamless interface to interact with the Aptos blockchain, 
              offering advanced features with an intuitive design.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                className="button-primary"
                size="lg"
                onClick={handleGetStarted}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="button-secondary"
                onClick={handleLearnMore}
              >
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-aptos-blue mr-2" />
                <span className="text-sm text-gray-600">Secure Transactions</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-aptos-blue mr-2" />
                <span className="text-sm text-gray-600">Lightning Fast</span>
              </div>
              <div className="flex items-center">
                <Database className="h-5 w-5 text-aptos-blue mr-2" />
                <span className="text-sm text-gray-600">Decentralized</span>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? 'animate-fade-in opacity-100 delay-300' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="glass-card p-6 rounded-3xl shadow-lg max-w-md mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 pointer-events-none"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-aptos-blue to-aptos-coral p-[1px]">
                        <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                          <svg height="16" width="16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M84.2,96H50.5l-3.5-2.5c-2.2-1.5-3.4-4-3.4-6.7V32.7c0-2.6,1.3-5.1,3.5-6.7l3.2-2.2h34.2c2.6,0,5.1,1.3,6.6,3.5l2,3v59.3 c0,2.6-1.3,5.1-3.4,6.7L84.2,96z" fill="#0891b2"/>
                            <path d="M49.6,23.8H15.9l-3-2.1c-2.3-1.6-3.4-4.3-3-7l0.2-1.4c0.4-2.8,2.2-5.3,4.8-6.3l3-1.2h34c2.6,0,5.1,1.3,6.6,3.5l2,3 v4.1c0,2.6-1.3,5.1-3.5,6.7L49.6,23.8z" fill="#f97316"/>
                            <path d="M49.6,75.2H15.9l-3-2.1c-2.3-1.6-3.4-4.3-3-7l0.2-1.4c0.4-2.8,2.2-5.3,4.8-6.3l3-1.2h34c2.6,0,5.1,1.3,6.6,3.5l2,3 v4.1c0,2.6-1.3,5.1-3.5,6.7L49.6,75.2z" fill="#1e293b"/>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-semibold">Aptos Wallet</div>
                        <div className="text-xs text-gray-500">Connected</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">Balance</div>
                      <div className="text-xs text-gray-500">Updated now</div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">APT</span>
                        <span className="text-sm text-gray-500">$16.45 USD</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xl font-semibold">423.5 APT</span>
                        <span className="text-xl font-semibold">$6,967.05</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-aptos-blue to-aptos-coral w-3/4 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-aptos-blue">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                        <span className="ml-2">
                          <div className="font-medium">Sent</div>
                          <div className="text-xs text-gray-500">To: 0x1a2...3f4</div>
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">-18.5 APT</div>
                        <div className="text-xs text-gray-500">1 min ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <ArrowUpRight className="h-4 w-4 rotate-180" />
                        </span>
                        <span className="ml-2">
                          <div className="font-medium">Received</div>
                          <div className="text-xs text-gray-500">From: 0x8b7...2d5</div>
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">+42.0 APT</div>
                        <div className="text-xs text-gray-500">3 hrs ago</div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        size="sm" 
                        className="w-full rounded-full bg-gradient-to-r from-aptos-blue to-aptos-coral text-white"
                      >
                        View Transactions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-20 -right-16 glass-card p-4 rounded-2xl shadow-lg transform rotate-6 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg height="20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16L7 11M12 16L17 11M12 16V4M20 20H4" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Stake APT</div>
                    <div className="text-xs text-gray-500">Earn 7.2% APY</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-10 glass-card p-4 rounded-2xl shadow-lg transform -rotate-12 animate-float animation-delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg height="20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9H7M7 9L5 7M7 9L5 11M21 9H17M17 9L19 7M17 9L19 11M12 3V7M12 7L14 5M12 7L10 5M12 21V17M12 17L14 19M12 17L10 19" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Swap Tokens</div>
                    <div className="text-xs text-gray-500">Instant exchange</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-0 w-1/2 aspect-square bg-gradient-radial from-orange-200/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-1/3 aspect-square bg-gradient-radial from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
