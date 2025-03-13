
import { AptosClient, Types } from "aptos";

// Default to devnet for testing purposes
const NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";

/**
 * Gets an instance of the Aptos client
 * @returns AptosClient
 */
export const getAptosClient = () => {
  return new AptosClient(NODE_URL);
};

/**
 * Checks if a wallet account exists
 * @param address Wallet address
 * @returns Promise<boolean>
 */
export const checkAccountExists = async (address: string): Promise<boolean> => {
  try {
    const client = getAptosClient();
    await client.getAccount(address);
    return true;
  } catch (error) {
    console.error("Error checking account:", error);
    return false;
  }
};

/**
 * Gets account resources
 * @param address Wallet address
 * @returns Promise<Types.MoveResource[]>
 */
export const getAccountResources = async (address: string): Promise<Types.MoveResource[]> => {
  try {
    const client = getAptosClient();
    return await client.getAccountResources(address);
  } catch (error) {
    console.error("Error fetching account resources:", error);
    return [];
  }
};

/**
 * Gets account APT balance
 * @param address Wallet address
 * @returns Promise<string> Balance in APT
 */
export const getAptBalance = async (address: string): Promise<string> => {
  try {
    const client = getAptosClient();
    const resources = await client.getAccountResources(address);
    
    // Find the coin resource for APT
    const aptCoinResource = resources.find(r => r.type === "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>");
    
    if (!aptCoinResource) {
      return "0";
    }
    
    // @ts-ignore Type is verified above
    const balance = aptCoinResource.data.coin.value;
    
    // Convert from octas (10^8) to APT
    const balanceApt = parseInt(balance) / 100000000;
    
    return balanceApt.toString();
  } catch (error) {
    console.error("Error fetching APT balance:", error);
    return "0";
  }
};

/**
 * Gets account transactions
 * @param address Wallet address
 * @param limit Number of transactions to fetch
 * @returns Promise<Types.Transaction[]>
 */
export const getAccountTransactions = async (
  address: string,
  limit: number = 10
): Promise<Types.Transaction[]> => {
  try {
    const client = getAptosClient();
    return await client.getAccountTransactions(address, { limit });
  } catch (error) {
    console.error("Error fetching account transactions:", error);
    return [];
  }
};

/**
 * Helper function to format an address for display
 * @param address Full address
 * @returns Shortened address (e.g., 0x1a2b...3c4d)
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  
  if (address.length <= 10) return address;
  
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export type AptosTokenBalance = {
  tokenType: string;
  tokenName: string;
  balance: string;
  symbol: string;
  value?: string; // Optional USD value
};

/**
 * Gets token balances for an account
 * This is a simplified implementation and would need to be expanded in a real app
 */
export const getTokenBalances = async (address: string): Promise<AptosTokenBalance[]> => {
  try {
    // In a real implementation, you would query all coin store resources
    // and parse their balances
    return [
      {
        tokenType: "0x1::aptos_coin::AptosCoin",
        tokenName: "Aptos Coin",
        balance: await getAptBalance(address),
        symbol: "APT",
        value: "0", // Would be calculated based on current price
      }
    ];
  } catch (error) {
    console.error("Error fetching token balances:", error);
    return [];
  }
};

export default {
  getAptosClient,
  checkAccountExists,
  getAccountResources,
  getAptBalance,
  getAccountTransactions,
  formatAddress,
  getTokenBalances,
};
