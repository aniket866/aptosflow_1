
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Grid, List, Heart, Share2, Info } from 'lucide-react';

const NFTs = () => {
  useEffect(() => {
    document.title = 'NFTs | AptosFlow';
  }, []);
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample NFT data
  const nfts = [
    {
      id: 'nft1',
      name: 'Aptos Monkeys #1234',
      image: 'https://placebear.com/400/400',
      collection: 'Aptos Monkeys',
      description: 'A unique Aptos Monkey NFT with rare attributes.',
      attributes: [
        { trait: 'Background', value: 'Blue' },
        { trait: 'Fur', value: 'Golden' },
        { trait: 'Eyes', value: 'Laser' },
        { trait: 'Mouth', value: 'Grin' },
        { trait: 'Hat', value: 'Crown' }
      ],
      price: '3.5 APT',
      lastSale: '2.8 APT',
      acquired: '2023-05-15'
    },
    {
      id: 'nft2',
      name: 'Aptomingos #4567',
      image: 'https://placebear.com/400/401',
      collection: 'Aptomingos',
      description: 'A beautiful Aptomingo with special traits.',
      attributes: [
        { trait: 'Background', value: 'Sunset' },
        { trait: 'Feathers', value: 'Rainbow' },
        { trait: 'Eyes', value: 'Sunglasses' },
        { trait: 'Beak', value: 'Gold' },
        { trait: 'Accessory', value: 'Necklace' }
      ],
      price: '2.1 APT',
      lastSale: '1.9 APT',
      acquired: '2023-06-20'
    },
    {
      id: 'nft3',
      name: 'AptosLand Plot #7890',
      image: 'https://placebear.com/401/400',
      collection: 'AptosLand',
      description: 'A virtual land plot in the AptosLand metaverse.',
      attributes: [
        { trait: 'Region', value: 'Central' },
        { trait: 'Size', value: 'Medium' },
        { trait: 'Elevation', value: 'High' },
        { trait: 'Resource', value: 'Crystal' },
        { trait: 'Building', value: 'None' }
      ],
      price: '5.0 APT',
      lastSale: '4.2 APT',
      acquired: '2023-04-10'
    },
    {
      id: 'nft4',
      name: 'Aptos Punks #3456',
      image: 'https://placebear.com/402/402',
      collection: 'Aptos Punks',
      description: 'An iconic Aptos Punk with unique features.',
      attributes: [
        { trait: 'Background', value: 'Red' },
        { trait: 'Skin', value: 'Alien' },
        { trait: 'Eyes', value: 'Wide' },
        { trait: 'Hair', value: 'Mohawk' },
        { trait: 'Accessory', value: 'Pipe' }
      ],
      price: '8.3 APT',
      lastSale: '7.5 APT',
      acquired: '2023-03-25'
    },
    {
      id: 'nft5',
      name: 'Aptos Dragons #5678',
      image: 'https://placebear.com/403/403',
      collection: 'Aptos Dragons',
      description: 'A fierce dragon from the Aptos Dragons collection.',
      attributes: [
        { trait: 'Background', value: 'Mountain' },
        { trait: 'Scales', value: 'Diamond' },
        { trait: 'Eyes', value: 'Glowing' },
        { trait: 'Wings', value: 'Large' },
        { trait: 'Breath', value: 'Fire' }
      ],
      price: '6.2 APT',
      lastSale: '5.8 APT',
      acquired: '2023-02-15'
    },
    {
      id: 'nft6',
      name: 'Aptos Blobs #9012',
      image: 'https://placebear.com/404/404',
      collection: 'Aptos Blobs',
      description: 'A cute blob character with a unique personality.',
      attributes: [
        { trait: 'Background', value: 'Space' },
        { trait: 'Color', value: 'Purple' },
        { trait: 'Eyes', value: 'Cute' },
        { trait: 'Mouth', value: 'Smile' },
        { trait: 'Hat', value: 'Beanie' }
      ],
      price: '1.8 APT',
      lastSale: '1.5 APT',
      acquired: '2023-07-02'
    }
  ];

  // Filter NFTs based on search query
  const filteredNFTs = nfts.filter(nft => 
    nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nft.collection.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nft.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold">NFT Gallery</h1>
          <p className="text-gray-600">Browse and manage your NFT collection on Aptos</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full sm:w-auto sm:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search by name, collection, trait..." 
              className="pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-3 w-full sm:w-auto justify-end">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <div className="flex border rounded-md overflow-hidden">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                size="sm" 
                className={`rounded-none ${viewMode === 'grid' ? 'bg-gray-200 text-gray-900 hover:bg-gray-200' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'ghost'} 
                size="sm" 
                className={`rounded-none ${viewMode === 'list' ? 'bg-gray-200 text-gray-900 hover:bg-gray-200' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="owned" className="mb-8">
          <TabsList>
            <TabsTrigger value="owned">Owned</TabsTrigger>
            <TabsTrigger value="favorited">Favorited</TabsTrigger>
            <TabsTrigger value="created">Created</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="owned" className="mt-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredNFTs.map((nft) => (
                  <Card key={nft.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={nft.image} 
                        alt={nft.name} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 flex space-x-2">
                        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                          <Heart className="h-4 w-4 text-gray-700" />
                        </Button>
                        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                          <Share2 className="h-4 w-4 text-gray-700" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <div className="text-sm text-aptos-blue font-medium">{nft.collection}</div>
                      <h3 className="font-semibold truncate">{nft.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <div className="text-xs text-gray-500">Current Value</div>
                          <div className="font-semibold">{nft.price}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Last Sale</div>
                          <div className="text-sm">{nft.lastSale}</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 border-t border-gray-100">
                      <Button variant="ghost" className="w-full justify-start p-0 text-aptos-blue font-medium hover:text-aptos-blue/80">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredNFTs.map((nft) => (
                  <Card key={nft.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-[160px] h-[160px] overflow-hidden">
                        <img 
                          src={nft.image} 
                          alt={nft.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm text-aptos-blue font-medium">{nft.collection}</div>
                            <h3 className="font-semibold text-lg">{nft.name}</h3>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{nft.description}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Heart className="h-4 w-4 text-gray-700" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Share2 className="h-4 w-4 text-gray-700" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Info className="h-4 w-4 text-gray-700" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {nft.attributes.slice(0, 3).map((attr, index) => (
                            <div key={index} className="px-2 py-1 bg-gray-100 rounded text-xs">
                              {attr.trait}: <span className="font-medium">{attr.value}</span>
                            </div>
                          ))}
                          {nft.attributes.length > 3 && (
                            <div className="px-2 py-1 bg-gray-100 rounded text-xs">
                              +{nft.attributes.length - 3} more
                            </div>
                          )}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <div className="text-xs text-gray-500">Current Value</div>
                            <div className="font-semibold">{nft.price}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Last Sale</div>
                            <div className="text-sm">{nft.lastSale}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Acquired</div>
                            <div className="text-sm">{nft.acquired}</div>
                          </div>
                          <Button variant="outline" size="sm" className="text-aptos-blue border-aptos-blue hover:bg-aptos-blue/10">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            {filteredNFTs.length === 0 && (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No NFTs found matching your search.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="favorited" className="mt-6">
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <p className="text-gray-500">You haven't favorited any NFTs yet.</p>
              <Button variant="outline" className="mt-4">Browse Marketplace</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="created" className="mt-6">
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <p className="text-gray-500">You haven't created any NFTs yet.</p>
              <Button variant="outline" className="mt-4">Create NFT</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="mt-6">
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No recent NFT activity found.</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default NFTs;
