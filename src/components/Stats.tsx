
import { useEffect, useState } from 'react';
import { Activity, TrendingUp, TrendingDown, Users, BarChart2 } from 'lucide-react';

const StatCard = ({ 
  title, 
  value, 
  change, 
  positive, 
  icon: Icon, 
  color, 
  delay 
}: { 
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: any;
  color: string;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`glass-card p-6 rounded-xl card-hover transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`rounded-lg ${color} w-12 h-12 flex items-center justify-center text-white`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex items-center space-x-1">
          {positive ? 
            <TrendingUp className="h-4 w-4 text-green-500" /> : 
            <TrendingDown className="h-4 w-4 text-red-500" />
          }
          <span className={positive ? "text-green-500 text-sm" : "text-red-500 text-sm"}>
            {change}
          </span>
        </div>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="section-padding bg-stats-gradient">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Aptos Network <span className="heading-gradient">Real-Time Stats</span>
          </h2>
          <p className="text-gray-600">
            Track the latest statistics and performance metrics from the Aptos blockchain network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Transactions Per Second"
            value="4,298"
            change="+5.3%"
            positive={true}
            icon={Activity}
            color="bg-aptos-blue"
            delay={100}
          />
          <StatCard
            title="Active Users"
            value="1.2M"
            change="+12.7%"
            positive={true}
            icon={Users}
            color="bg-aptos-coral"
            delay={200}
          />
          <StatCard
            title="APT Price"
            value="$16.45"
            change="-2.3%"
            positive={false}
            icon={BarChart2}
            color="bg-aptos-navy"
            delay={300}
          />
          <StatCard
            title="Total Value Locked"
            value="$724M"
            change="+8.5%"
            positive={true}
            icon={TrendingUp}
            color="bg-gradient-to-r from-aptos-blue to-aptos-coral"
            delay={400}
          />
        </div>

        <div className="mt-16 bg-white rounded-2xl p-6 md:p-8 shadow-sm animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Network Activity</h3>
              <p className="text-gray-600">Last 7 days of blockchain activity</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Transactions</span>
              <span className="px-3 py-1 bg-blue-50 rounded-full text-sm text-aptos-blue">Users</span>
              <span className="px-3 py-1 bg-orange-50 rounded-full text-sm text-aptos-coral">Gas Fees</span>
            </div>
          </div>
          
          <div className="h-64 rounded-lg bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-4xl h-full px-4 py-6">
              <div className="relative h-full">
                {/* Chart Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-t border-gray-200 h-0"></div>
                  ))}
                </div>
                
                {/* Days */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                
                {/* Transaction Line */}
                <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M0,50 L14.29,45 L28.58,60 L42.87,40 L57.16,30 L71.45,35 L85.74,25 L100,20"
                    fill="none"
                    stroke="#0891b2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                
                {/* Users Line */}
                <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M0,70 L14.29,65 L28.58,55 L42.87,50 L57.16,40 L71.45,35 L85.74,30 L100,25"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2 2"
                  />
                </svg>
                
                {/* Gas Fees Line */}
                <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M0,40 L14.29,45 L28.58,50 L42.87,45 L57.16,50 L71.45,45 L85.74,40 L100,45"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
