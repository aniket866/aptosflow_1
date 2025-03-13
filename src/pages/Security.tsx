
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Shield, CheckCircle, Lock, Server, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  useEffect(() => {
    document.title = 'Security | AptosFlow';
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
              Security at <span className="text-aptos-blue">AptosFlow</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Learn how we protect your assets with military-grade encryption and blockchain security.
            </p>
          </div>
          
          <div className="aspect-video w-full rounded-xl bg-gradient-to-r from-aptos-blue/20 to-aptos-coral/20 mb-12 flex items-center justify-center">
            <Shield className="h-24 w-24 text-aptos-blue" />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2>Enterprise-Grade Security</h2>
            <p>
              At AptosFlow, security is our top priority. We implement multiple layers of protection to ensure your digital assets remain safe at all times. Our security infrastructure is built on the same standards used by financial institutions and leverages the inherent security features of the Aptos blockchain.
            </p>
            
            <h3>Key Security Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                    <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold">End-to-End Encryption</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  All data transmitted between your device and our servers is encrypted using TLS 1.3, ensuring that your information cannot be intercepted or read by unauthorized parties.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Fingerprint className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Local Key Storage</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Private keys never leave your device. All cryptographic operations are performed locally, ensuring that even AptosFlow cannot access your private keys.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <Server className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Decentralized Architecture</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  AptosFlow leverages the decentralized nature of blockchain technology, eliminating single points of failure and reducing the risk of targeted attacks.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Regular Security Audits</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Our codebase undergoes regular security audits by independent third-party security firms to identify and address potential vulnerabilities.
                </p>
              </div>
            </div>
            
            <h3>Best Practices for User Security</h3>
            <p>
              While we implement robust security measures, we also recommend that users follow these best practices to further enhance their security:
            </p>
            <ul>
              <li>Use a strong, unique password for your AptosFlow account</li>
              <li>Enable two-factor authentication when available</li>
              <li>Keep your recovery phrases in a secure, offline location</li>
              <li>Regularly update your device's operating system and browser</li>
              <li>Be vigilant against phishing attempts and only access AptosFlow through official channels</li>
            </ul>
            
            <h3>Our Commitment to Security</h3>
            <p>
              Security is not a one-time effort but an ongoing commitment. Our dedicated security team continuously monitors for threats and implements improvements to our security infrastructure. We stay up-to-date with the latest security standards and best practices to ensure that your assets remain protected.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Have security concerns or questions?</h3>
            <p className="mb-4">Our security team is available to address any concerns you might have about the security of your assets.</p>
            <Button className="bg-aptos-blue hover:bg-aptos-blue/90">
              Contact Security Team
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecurityPage;
