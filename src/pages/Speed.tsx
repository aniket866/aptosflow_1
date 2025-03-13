
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Zap, Clock, BarChart2, Activity, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpeedPage = () => {
  useEffect(() => {
    document.title = 'Lightning Fast | AptosFlow';
    window.scrollTo(0, 0);
  }, []);

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
              Lightning Fast <span className="text-aptos-coral">Performance</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experience near-instant transactions with Aptos' high-performance consensus mechanism.
            </p>
          </div>
          
          <div className="aspect-video w-full rounded-xl bg-gradient-to-r from-aptos-blue/20 to-aptos-coral/20 mb-12 flex items-center justify-center">
            <Zap className="h-24 w-24 text-aptos-coral" />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2>The Speed Advantage of Aptos</h2>
            <p>
              The Aptos blockchain was designed from the ground up with speed and efficiency in mind. Unlike traditional blockchains that can suffer from congestion and slow transaction times, Aptos utilizes a revolutionary consensus mechanism and parallel execution engine that enables it to process thousands of transactions per second.
            </p>
            
            <h3>Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-aptos-blue">~1s</h4>
                  <p className="text-gray-600 dark:text-gray-400">Time to Finality</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-coral-100 dark:bg-orange-900 flex items-center justify-center mb-4">
                    <BarChart2 className="h-6 w-6 text-aptos-coral" />
                  </div>
                  <h4 className="text-2xl font-bold text-aptos-coral">160,000+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Transactions Per Second</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</h4>
                  <p className="text-gray-600 dark:text-gray-400">Network Uptime</p>
                </div>
              </div>
            </div>
            
            <h3>How Aptos Achieves High Performance</h3>
            
            <h4>1. Block-STM Parallel Execution Engine</h4>
            <p>
              Aptos uses a novel parallel execution engine called Block-STM that allows transactions to execute concurrently when they don't conflict with each other. This approach dramatically increases throughput and reduces latency compared to the sequential execution models used by most other blockchains.
            </p>
            
            <h4>2. Optimistic Concurrency Control</h4>
            <p>
              Transactions on Aptos can be processed optimistically in parallel, with a mechanism to detect and resolve conflicts only when they occur. This approach maximizes throughput by allowing non-conflicting transactions to proceed without waiting.
            </p>
            
            <h4>3. AptosBFT Consensus</h4>
            <p>
              The AptosBFT consensus protocol is designed for high performance and resilience, allowing the network to achieve quick finality even in the presence of node failures or network delays.
            </p>
            
            <h3>What This Means for Users</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Instant Transfers</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Send tokens to anyone, anywhere in the world with near-instant confirmation. No more waiting minutes or hours for transactions to confirm.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                    <Share2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Scalable DApps</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Build and use decentralized applications that can handle high user load without performance degradation, even during peak usage times.
                </p>
              </div>
            </div>
            
            <h3>Experience the Difference</h3>
            <p>
              With AptosFlow, you can experience the speed and efficiency of the Aptos blockchain firsthand. Whether you're sending tokens, interacting with smart contracts, or trading NFTs, you'll notice the difference immediately.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-aptos-blue/10 to-aptos-coral/10 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Ready to experience lightning-fast transactions?</h3>
            <p className="mb-4">Connect your wallet and see the Aptos speed advantage for yourself.</p>
            <Link to="/wallet">
              <Button className="bg-gradient-to-r from-aptos-blue to-aptos-coral text-white hover:from-aptos-blue/90 hover:to-aptos-coral/90">
                <Zap className="mr-2 h-4 w-4" />
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpeedPage;
