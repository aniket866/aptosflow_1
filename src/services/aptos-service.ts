
import { 
  getAptosClient, 
  checkAccountExists, 
  getAccountResources, 
  getAptBalance, 
  getAccountTransactions, 
  formatAddress,
  getTokenBalances,
  AptosTokenBalance
} from '@/lib/aptos';
import { Types } from 'aptos';

export type TransactionType = 'send' | 'receive' | 'swap' | 'mint' | 'burn' | 'stake' | 'unstake' | 'claim' | 'other';

export interface EnhancedTransaction {
  hash: string;
  type: TransactionType;
  timestamp: string;
  sender: string;
  recipient?: string;
  amount?: string;
  status: 'success' | 'failed' | 'pending';
  aptAmount?: string;
  tokenSymbol?: string;
  gas?: string;
  version: string;
  originalTx: Types.Transaction;
}

// Re-export AptosTokenBalance type so it can be imported from this service
export type { AptosTokenBalance };

class AptosService {
  async getWalletExists(address: string): Promise<boolean> {
    return checkAccountExists(address);
  }

  async getWalletBalance(address: string): Promise<string> {
    return getAptBalance(address);
  }

  async getTokenBalances(address: string): Promise<AptosTokenBalance[]> {
    return getTokenBalances(address);
  }

  async getTransactions(address: string, limit: number = 10): Promise<EnhancedTransaction[]> {
    try {
      const txs = await getAccountTransactions(address, limit);
      
      // Process and enhance transactions
      return txs.map(tx => this.processTransaction(tx));
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return [];
    }
  }

  async getMarketPrice(): Promise<{ price: string; change24h: string }> {
    // In a real app, this would fetch from a price API
    // Mock data for demonstration
    return {
      price: '$9.32',
      change24h: '-2.1%'
    };
  }

  processTransaction(tx: Types.Transaction): EnhancedTransaction {
    // Extract the basic transaction info
    const { hash, version, timestamp } = tx as any;
    const sender = (tx as any).sender;
    
    // Determine transaction type and other details
    // This is a simplified implementation
    let type: TransactionType = 'other';
    let recipient = undefined;
    let aptAmount = undefined;
    let tokenSymbol = 'APT';
    
    // Analyze transaction payload to determine type
    if ((tx as any).payload?.function === '0x1::coin::transfer') {
      type = 'send';
      recipient = (tx as any).payload?.arguments?.[0];
      aptAmount = (tx as any).payload?.arguments?.[1];
    } else if ((tx as any).payload?.function?.includes('::swap::')) {
      type = 'swap';
    } else if ((tx as any).payload?.function?.includes('::stake::')) {
      type = 'stake';
    }
    
    // Determine status
    const status = (tx as any).success ? 'success' : 'failed';
    
    // Gas used
    const gas = (tx as any).gas_used ? `${(parseInt((tx as any).gas_used) / 100000000).toFixed(8)} APT` : undefined;
    
    return {
      hash,
      type,
      timestamp: new Date(timestamp as string).toLocaleString(),
      sender,
      recipient,
      aptAmount: aptAmount ? (parseInt(aptAmount) / 100000000).toString() : undefined,
      tokenSymbol,
      status,
      gas,
      version: version.toString(),
      originalTx: tx
    };
  }

  async signAndSubmitTransaction(transaction: any): Promise<{ hash: string } | null> {
    if (typeof window === 'undefined' || !window.aptos) {
      throw new Error('Wallet not connected');
    }
    
    try {
      return await window.aptos.signAndSubmitTransaction(transaction);
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  }

  async transferApt(recipient: string, amount: string): Promise<{ hash: string } | null> {
    const amountInOctas = (parseFloat(amount) * 100000000).toString();
    
    const transaction = {
      type: 'entry_function_payload',
      function: '0x1::coin::transfer',
      type_arguments: ['0x1::aptos_coin::AptosCoin'],
      arguments: [recipient, amountInOctas]
    };
    
    return this.signAndSubmitTransaction(transaction);
  }
}

export const aptosService = new AptosService();
export default aptosService;
