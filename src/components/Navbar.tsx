
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, LogIn } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ConnectWallet } from '@/components/ConnectWallet';
import { useWallet } from '@/providers/WalletProvider';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { useAuth } from '@/providers/AuthProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { connected } = useWallet();
  const { user, isAuthenticated } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 dark:bg-gray-900/80 shadow-sm backdrop-blur-lg' : 'py-6 bg-transparent'}`}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-aptos-blue to-aptos-coral p-[1px]">
              <div className="h-full w-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <svg height="24" width="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M84.2,96H50.5l-3.5-2.5c-2.2-1.5-3.4-4-3.4-6.7V32.7c0-2.6,1.3-5.1,3.5-6.7l3.2-2.2h34.2c2.6,0,5.1,1.3,6.6,3.5l2,3v59.3 c0,2.6-1.3,5.1-3.4,6.7L84.2,96z" fill="#0891b2"/>
                  <path d="M49.6,23.8H15.9l-3-2.1c-2.3-1.6-3.4-4.3-3-7l0.2-1.4c0.4-2.8,2.2-5.3,4.8-6.3l3-1.2h34c2.6,0,5.1,1.3,6.6,3.5l2,3 v4.1c0,2.6-1.3,5.1-3.5,6.7L49.6,23.8z" fill="#f97316"/>
                  <path d="M49.6,75.2H15.9l-3-2.1c-2.3-1.6-3.4-4.3-3-7l0.2-1.4c0.4-2.8,2.2-5.3,4.8-6.3l3-1.2h34c2.6,0,5.1,1.3,6.6,3.5l2,3 v4.1c0,2.6-1.3,5.1-3.5,6.7L49.6,75.2z" fill="#1e293b"/>
                </svg>
              </div>
            </div>
            <span className="text-xl font-display font-bold bg-gradient-to-r from-aptos-blue to-aptos-coral bg-clip-text text-transparent">
              AptosFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={isActive('/') ? 'nav-item-active' : 'nav-item'}>Home</Link>
            <Link to="/dashboard" className={isActive('/dashboard') ? 'nav-item-active' : 'nav-item'}>Dashboard</Link>
            <Link to="/transactions" className={isActive('/transactions') ? 'nav-item-active' : 'nav-item'}>Transactions</Link>
            <Link to="/nfts" className={isActive('/nfts') ? 'nav-item-active' : 'nav-item'}>NFTs</Link>
            <Link to="/wallet" className={isActive('/wallet') ? 'nav-item-active' : 'nav-item'}>Wallet</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <ModeToggle />
            
            {!isAuthenticated ? (
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-gray-200 text-gray-700 dark:text-gray-200 dark:border-gray-700 hover:text-aptos-blue dark:hover:text-aptos-blue hover:border-aptos-blue"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
            ) : (
              <Link to="/dashboard">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-gray-200 text-gray-700 dark:text-gray-200 dark:border-gray-700 hover:text-aptos-blue dark:hover:text-aptos-blue hover:border-aptos-blue"
                >
                  Dashboard
                </Button>
              </Link>
            )}
            
            <ConnectWallet />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-600 dark:text-gray-300 hover:text-aptos-blue dark:hover:text-aptos-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 animate-fade-in">
          <div className="container max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`flex items-center justify-between px-4 py-3 rounded-lg ${isActive('/') ? 'bg-gray-50 dark:bg-gray-800 text-aptos-blue font-medium' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
                <ChevronRight size={18} className={isActive('/') ? 'text-aptos-blue' : 'text-gray-400'} />
              </Link>
              <Link 
                to="/dashboard" 
                className={`flex items-center justify-between px-4 py-3 rounded-lg ${isActive('/dashboard') ? 'bg-gray-50 dark:bg-gray-800 text-aptos-blue font-medium' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
                <ChevronRight size={18} className={isActive('/dashboard') ? 'text-aptos-blue' : 'text-gray-400'} />
              </Link>
              <Link 
                to="/transactions" 
                className={`flex items-center justify-between px-4 py-3 rounded-lg ${isActive('/transactions') ? 'bg-gray-50 dark:bg-gray-800 text-aptos-blue font-medium' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Transactions
                <ChevronRight size={18} className={isActive('/transactions') ? 'text-aptos-blue' : 'text-gray-400'} />
              </Link>
              <Link 
                to="/nfts" 
                className={`flex items-center justify-between px-4 py-3 rounded-lg ${isActive('/nfts') ? 'bg-gray-50 dark:bg-gray-800 text-aptos-blue font-medium' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                NFTs
                <ChevronRight size={18} className={isActive('/nfts') ? 'text-aptos-blue' : 'text-gray-400'} />
              </Link>
              <Link 
                to="/wallet" 
                className={`flex items-center justify-between px-4 py-3 rounded-lg ${isActive('/wallet') ? 'bg-gray-50 dark:bg-gray-800 text-aptos-blue font-medium' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Wallet
                <ChevronRight size={18} className={isActive('/wallet') ? 'text-aptos-blue' : 'text-gray-400'} />
              </Link>
              
              {!isAuthenticated ? (
                <Link 
                  to="/login" 
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login / Sign Up
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>
              ) : null}
              
              <div className="pt-2 pb-1">
                <ConnectWallet />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
