
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import aptosService from '@/services/aptos-service';
import { useAptosWallet } from '@/hooks/use-aptos-wallet';
import { useTransactionTracker } from '@/lib/transaction-tracker';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { ArrowRight, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  recipient: z.string()
    .min(1, 'Recipient address is required')
    .regex(/^0x[a-fA-F0-9]{1,64}$/, 'Invalid Aptos address format'),
  amount: z.string()
    .min(1, 'Amount is required')
    .refine((val) => !isNaN(parseFloat(val)), 'Amount must be a valid number')
    .refine((val) => parseFloat(val) > 0, 'Amount must be greater than 0'),
});

type FormValues = z.infer<typeof formSchema>;

export const SendTransaction = () => {
  const { toast } = useToast();
  const { connected, address } = useAptosWallet();
  const { trackTransaction } = useTransactionTracker();
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [txStatus, setTxStatus] = useState<'pending' | 'confirmed' | 'failed' | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipient: '',
      amount: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!connected || !address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTxHash(null);
    setTxStatus(null);

    try {
      const result = await aptosService.transferApt(values.recipient, values.amount);
      
      if (result && result.hash) {
        setTxHash(result.hash);
        setTxStatus('pending');
        
        toast({
          title: "Transaction submitted",
          description: `Sent ${values.amount} APT to ${values.recipient.slice(0, 6)}...${values.recipient.slice(-4)}`,
        });

        // Track the transaction
        trackTransaction(result.hash).then(success => {
          setTxStatus(success ? 'confirmed' : 'failed');
        });
        
        form.reset();
      }
    } catch (error: any) {
      console.error('Transaction error:', error);
      toast({
        title: "Transaction failed",
        description: error.message || "Failed to send transaction",
        variant: "destructive",
      });
      setTxStatus('failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (!connected) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Send APT</CardTitle>
          <CardDescription>
            Connect your wallet to send APT tokens
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-8">
          <p className="mb-4 text-gray-500">
            You need to connect your wallet to send transactions
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send APT</CardTitle>
        <CardDescription>
          Send APT tokens to another address
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="recipient"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="0x..." 
                      {...field} 
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (APT)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.000001"
                      placeholder="0.0" 
                      {...field} 
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full mt-4 bg-gradient-to-r from-aptos-blue to-aptos-coral"
              disabled={isLoading || txStatus === 'pending'}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : txStatus === 'pending' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Send APT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
        
        {txHash && (
          <div className={`mt-4 p-3 rounded-md border ${
            txStatus === 'confirmed' ? 'bg-green-50 border-green-100' : 
            txStatus === 'failed' ? 'bg-red-50 border-red-100' : 
            'bg-blue-50 border-blue-100'
          }`}>
            <div className="flex items-start">
              {txStatus === 'confirmed' ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
              ) : txStatus === 'failed' ? (
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
              ) : (
                <Loader2 className="h-5 w-5 text-blue-500 animate-spin mt-0.5 mr-2" />
              )}
              <div>
                <p className={`text-sm font-medium ${
                  txStatus === 'confirmed' ? 'text-green-800' : 
                  txStatus === 'failed' ? 'text-red-800' : 
                  'text-blue-800'
                }`}>
                  {txStatus === 'confirmed' ? 'Transaction confirmed!' : 
                   txStatus === 'failed' ? 'Transaction failed' : 
                   'Transaction submitted!'}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Hash: {txHash.slice(0, 10)}...{txHash.slice(-8)}
                </p>
                <a 
                  href={`https://explorer.devnet.aptos.dev/txn/${txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-aptos-blue hover:underline mt-2 inline-block"
                >
                  View on Explorer <ArrowRight className="inline h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SendTransaction;
