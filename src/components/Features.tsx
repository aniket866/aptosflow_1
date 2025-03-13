
import { ArrowRight, Shield, Zap, BarChart3, Wallet, Gem, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-aptos-blue" />,
      title: "Secure Transactions",
      description: "Every transaction is protected with military-grade encryption and blockchain security.",
      link: "/learn/security"
    },
    {
      icon: <Zap className="h-10 w-10 text-aptos-coral" />,
      title: "Lightning Fast",
      description: "Experience near-instant transactions with Aptos' high-performance consensus mechanism.",
      link: "/learn/speed"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-aptos-navy" />,
      title: "Real-Time Analytics",
      description: "Monitor your assets with advanced real-time dashboards and analytics.",
      link: "/dashboard"
    },
    {
      icon: <Wallet className="h-10 w-10 text-aptos-blue" />,
      title: "Multi-Wallet Support",
      description: "Connect multiple wallets and manage all your assets in one place.",
      link: "/wallet"
    },
    {
      icon: <Gem className="h-10 w-10 text-aptos-coral" />,
      title: "NFT Management",
      description: "Browse, collect, and manage your NFTs with our intuitive gallery interface.",
      link: "/nfts"
    },
    {
      icon: <Code className="h-10 w-10 text-aptos-navy" />,
      title: "Developer Tools",
      description: "Access powerful APIs and developer tools to build on the Aptos blockchain.",
      link: "/developers"
    }
  ];

  return (
    <section className="section-padding bg-white" id="features">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Advanced Features for the <span className="heading-gradient">Modern Web3 Experience</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what makes AptosFlow the ultimate platform for interacting with the Aptos blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-2xl bg-gray-50 w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Button 
                variant="link" 
                className="p-0 text-aptos-blue font-medium hover:text-aptos-blue/80"
                asChild
              >
                <a href={feature.link}>
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
