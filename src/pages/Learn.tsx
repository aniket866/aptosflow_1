
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ArrowLeft, BookOpen, Info, Shield, Zap, Code, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LearnPage = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = `Learn | AptosFlow`;
    window.scrollTo(0, 0);
    
    // Redirect to specific learn pages if they exist
    if (topic === 'security') {
      navigate('/learn/security');
    } else if (topic === 'speed') {
      navigate('/learn/speed');
    }
  }, [topic, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Learn About <span className="text-aptos-blue">AptosFlow</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Discover everything you need to know about AptosFlow and the Aptos blockchain.
            </p>
          </div>
          
          <div className="aspect-video w-full rounded-xl bg-gradient-to-r from-aptos-blue/20 to-aptos-coral/20 mb-12 flex items-center justify-center">
            <BookOpen className="h-24 w-24 text-aptos-blue" />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2>Welcome to AptosFlow</h2>
            <p>
              AptosFlow is your gateway to the Aptos blockchain ecosystem. Whether you're a blockchain enthusiast, developer, or just curious about web3, we're here to help you navigate the exciting world of Aptos.
            </p>
            
            <h3>What is Aptos?</h3>
            <p>
              Aptos is a Layer 1 blockchain that focuses on security, scalability, and user experience. Built with Move, a safe and flexible programming language, Aptos enables developers to create secure and efficient applications.
            </p>
            
            <h3>Key Features of AptosFlow</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose my-8">
              <Link to="/learn/security" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Secure Transactions</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Every transaction is protected with military-grade encryption and blockchain security.
                </p>
              </Link>
              
              <Link to="/learn/speed" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Lightning Fast</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Experience near-instant transactions with Aptos' high-performance consensus mechanism.
                </p>
              </Link>
              
              <Link to="/developers" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Developer Tools</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Access powerful APIs and developer tools to build on the Aptos blockchain.
                </p>
              </Link>
              
              <Link to="/wallet" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                    <Coins className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Wallet Management</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Easily manage your Aptos assets with our intuitive wallet interface.
                </p>
              </Link>
            </div>
            
            <h3>Getting Started with Aptos</h3>
            <p>
              New to Aptos? Here's how to get started:
            </p>
            <ol>
              <li>Create an account by signing up</li>
              <li>Connect your existing Aptos wallet or create a new one</li>
              <li>Explore the dashboard to view blockchain activity</li>
              <li>Send and receive APT tokens</li>
              <li>Discover NFTs and other assets on the Aptos network</li>
            </ol>
            
            <h3>About Move Language</h3>
            <p>
              Move is the programming language used for developing applications on the Aptos blockchain. It's designed with safety and security as primary goals, making it ideal for financial applications. Some key features of Move include:
            </p>
            <ul>
              <li>First-class resources that cannot be copied or implicitly discarded</li>
              <li>Strong static typing for preventing bugs at compile-time</li>
              <li>Formal verification for proving code correctness</li>
              <li>Module system for code organization and reuse</li>
            </ul>
          </div>
          
          <div className="bg-aptos-blue/5 dark:bg-aptos-blue/20 p-8 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-aptos-blue/20 p-3">
                <Info className="h-6 w-6 text-aptos-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Have questions?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Join our community to learn more about Aptos and get help from other users.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline">
                    Discord Community
                  </Button>
                  <Link to="/about">
                    <Button>
                      About AptosFlow
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnPage;
