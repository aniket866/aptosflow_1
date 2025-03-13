
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowDown, ArrowUp, Search, Filter, ExternalLink, Download, Clock } from 'lucide-react';

const Transactions = () => {
  useEffect(() => {
    document.title = 'Transactions | AptosFlow';
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  // Sample transaction data
  const transactions = [
    {
      id: 'tx1',
      hash: '0x7ec7cbf3a9a0c9a8a0b2e0e3a9a0c9a8a0b2e0e3',
      type: 'Send',
      amount: '10.5 APT',
      to: '0x3a21...9f3e',
      from: '0x1a2b...3c4d',
      status: 'Confirmed',
      time: '2023-07-10 14:32:10',
      blockHeight: '12345678',
      gas: '0.001 APT'
    },
    {
      id: 'tx2',
      hash: '0x8fd8cbd4b0a1c0a9b1b3e1e4a1c0a9b1b3e1e4a1',
      type: 'Receive',
      amount: '5.2 APT',
      to: '0x1a2b...3c4d',
      from: '0x5e6f...7g8h',
      status: 'Confirmed',
      time: '2023-07-09 09:45:22',
      blockHeight: '12345670',
      gas: '0.001 APT'
    },
    {
      id: 'tx3',
      hash: '0x9fe9dce5c1b2d1b4c2e5f2f5c1b2d1b4c2e5f2f5',
      type: 'Swap',
      amount: '20 APT → 80 USDC',
      to: 'Econia DEX',
      from: '0x1a2b...3c4d',
      status: 'Confirmed',
      time: '2023-07-08 16:18:05',
      blockHeight: '12345650',
      gas: '0.002 APT'
    },
    {
      id: 'tx4',
      hash: '0xa0f0edf6d2c3e2c5d3f6g3f6d2c3e2c5d3f6g3f6',
      type: 'Stake',
      amount: '100 APT',
      to: 'Validator Node',
      from: '0x1a2b...3c4d',
      status: 'Confirmed',
      time: '2023-07-07 11:30:45',
      blockHeight: '12345620',
      gas: '0.001 APT'
    },
    {
      id: 'tx5',
      hash: '0xb1g1feg7e3d4f3d6e4g7e3d4f3d6e4g7e3d4f3d6',
      type: 'NFT Purchase',
      amount: '2.5 APT',
      to: 'NFT Marketplace',
      from: '0x1a2b...3c4d',
      status: 'Pending',
      time: '2023-07-06 18:22:30',
      blockHeight: 'Pending',
      gas: '0.001 APT'
    }
  ];

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter(tx => 
    tx.hash.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold">Transactions</h1>
          <p className="text-gray-600">View and track all your Aptos blockchain transactions</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-auto sm:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search by hash, address, or type..." 
              className="pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Transactions</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="received">Received</TabsTrigger>
            <TabsTrigger value="swap">Swaps</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-0">
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>
                  View details of all your blockchain transactions
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>From</TableHead>
                        <TableHead>To</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>View</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((tx) => (
                          <TableRow key={tx.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {tx.type === 'Send' && <ArrowUp className="text-red-500 h-4 w-4" />}
                                {tx.type === 'Receive' && <ArrowDown className="text-green-500 h-4 w-4" />}
                                {tx.type === 'Swap' && <div className="h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-blue-500 text-[10px]">S</span>
                                </div>}
                                {tx.type === 'Stake' && <div className="h-4 w-4 rounded-full bg-purple-100 flex items-center justify-center">
                                  <span className="text-purple-500 text-[10px]">ST</span>
                                </div>}
                                {tx.type === 'NFT Purchase' && <div className="h-4 w-4 rounded-full bg-orange-100 flex items-center justify-center">
                                  <span className="text-orange-500 text-[10px]">N</span>
                                </div>}
                                <span className="font-medium">{tx.type}</span>
                              </div>
                            </TableCell>
                            <TableCell>{tx.amount}</TableCell>
                            <TableCell className="text-gray-600">{tx.from}</TableCell>
                            <TableCell className="text-gray-600">{tx.to}</TableCell>
                            <TableCell className="text-gray-600 whitespace-nowrap">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-gray-400" />
                                {tx.time.split(' ')[0]}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span 
                                className={`px-2 py-1 rounded-full text-xs 
                                  ${tx.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                              >
                                {tx.status}
                              </span>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ExternalLink className="h-4 w-4 text-gray-500 hover:text-aptos-blue" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center h-24 text-gray-500">
                            No transactions found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sent" className="mt-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Sent Transactions</CardTitle>
                <CardDescription>
                  Transactions where you've sent assets
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Content for sent transactions */}
                <div className="h-48 flex items-center justify-center text-gray-500">
                  Filter implementation coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="received" className="mt-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Received Transactions</CardTitle>
                <CardDescription>
                  Transactions where you've received assets
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Content for received transactions */}
                <div className="h-48 flex items-center justify-center text-gray-500">
                  Filter implementation coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="swap" className="mt-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Swap Transactions</CardTitle>
                <CardDescription>
                  Token swap transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Content for swap transactions */}
                <div className="h-48 flex items-center justify-center text-gray-500">
                  Filter implementation coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="other" className="mt-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Other Transactions</CardTitle>
                <CardDescription>
                  Staking, NFT purchases, and other transaction types
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Content for other transactions */}
                <div className="h-48 flex items-center justify-center text-gray-500">
                  Filter implementation coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Transactions;
