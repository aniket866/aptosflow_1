
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, LineChart, BarChart } from '@/components/charts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowRight, AreaChart as AreaChartIcon, BarChart3, Wallet, RefreshCw, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard | AptosFlow';
  }, []);

  // Sample data for the charts
  const areaChartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 280 },
    { name: 'May', value: 590 },
    { name: 'Jun', value: 320 },
    { name: 'Jul', value: 670 }
  ];

  const lineChartData = [
    { name: 'Jan', value: 200 },
    { name: 'Feb', value: 340 },
    { name: 'Mar', value: 220 },
    { name: 'Apr', value: 380 },
    { name: 'May', value: 410 },
    { name: 'Jun', value: 590 },
    { name: 'Jul', value: 620 }
  ];

  const barChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 500 },
    { name: 'Group D', value: 280 },
    { name: 'Group E', value: 590 }
  ];

  // Sample transactions data
  const recentTransactions = [
    { id: '1', type: 'Send', amount: '0.5 APT', to: '0x3a21...9f3e', status: 'Completed', date: '2023-07-10' },
    { id: '2', type: 'Receive', amount: '2.0 APT', from: '0x8b32...7d1c', status: 'Completed', date: '2023-07-09' },
    { id: '3', type: 'Stake', amount: '10.0 APT', to: 'Validator', status: 'Pending', date: '2023-07-08' },
    { id: '4', type: 'Swap', amount: '5.0 APT → 20 USDC', to: 'Econia DEX', status: 'Completed', date: '2023-07-07' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome to your Aptos Dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Wallet className="mr-2 text-aptos-blue h-5 w-5" />
                Wallet Balance
              </CardTitle>
              <CardDescription>Available Balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,345.67 APT</div>
              <div className="text-sm text-muted-foreground mt-1">$1,234.56 USD</div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+4.3% from last week</span>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BarChart3 className="mr-2 text-aptos-coral h-5 w-5" />
                Transactions
              </CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">78</div>
              <div className="text-sm text-muted-foreground mt-1">+12 from previous period</div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="p-0 text-aptos-blue" asChild>
                <a href="/transactions">
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <AreaChartIcon className="mr-2 text-aptos-navy h-5 w-5" />
                Market Value
              </CardTitle>
              <CardDescription>APT Price</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$9.32</div>
              <div className="text-sm text-red-500 mt-1 flex items-center">
                <span>-2.1% in 24h</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="text-xs">
                <RefreshCw className="mr-1 h-3 w-3" />
                Refresh
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="activity" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
          </TabsList>
          <TabsContent value="activity" className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest activity on the Aptos blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>To/From</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell className="font-medium">{tx.type}</TableCell>
                        <TableCell>{tx.amount}</TableCell>
                        <TableCell>{tx.to || tx.from}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${tx.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {tx.status}
                          </span>
                        </TableCell>
                        <TableCell>{tx.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href="/transactions">View All Transactions</a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Portfolio Value</CardTitle>
                  <CardDescription>Last 7 months</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <AreaChart 
                    data={areaChartData}
                    index="name"
                    categories={["value"]}
                    colors={["#0891b2"]}
                    className="h-full w-full"
                  />
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>APT Price</CardTitle>
                  <CardDescription>Last 7 months</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <LineChart 
                    data={lineChartData}
                    index="name"
                    categories={["value"]}
                    colors={["#f97316"]}
                    className="h-full w-full"
                  />
                </CardContent>
              </Card>
            </div>
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Distribution by token</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <BarChart 
                  data={barChartData}
                  index="name"
                  categories={["value"]}
                  colors={["#1e293b"]}
                  className="h-full w-full"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="assets" className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Your Assets</CardTitle>
                <CardDescription>All tokens in your wallet</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Asset</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Value (USD)</TableHead>
                      <TableHead>Change (24h)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">APT</TableCell>
                      <TableCell>2,345.67</TableCell>
                      <TableCell>$21,861.64</TableCell>
                      <TableCell className="text-green-500">+2.3%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">USDC</TableCell>
                      <TableCell>500.00</TableCell>
                      <TableCell>$500.00</TableCell>
                      <TableCell className="text-gray-500">0.0%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CAKE</TableCell>
                      <TableCell>25.00</TableCell>
                      <TableCell>$125.00</TableCell>
                      <TableCell className="text-red-500">-1.2%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
