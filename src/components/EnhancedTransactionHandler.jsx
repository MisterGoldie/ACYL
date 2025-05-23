import React, { useState } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useOnchainKit, useSendTransaction } from '@coinbase/onchainkit/wallet';

// Enhanced transaction handler that uses OnchainKit for web3 transactions
// while maintaining compatibility with Privy
const EnhancedTransactionHandler = ({ 
  amount, // Amount in ETH (hex string, e.g. "0x38D7EA4C68000" for 0.001 ETH)
  recipientAddress = "0x76A3B9340A2ae2144c0Ba37B04bD5Be3535Ac1A1", // Default ACYL treasury
  onSuccess, // Callback for successful transaction
  onError, // Callback for transaction error
  children, // Button or UI element to trigger the transaction
}) => {
  const privy = usePrivy();
  const { authenticated, login, user, sendTransaction: privySendTransaction } = privy;
  const { wallets } = useWallets();
  const { wallet } = useOnchainKit();
  const { sendTransaction: onchainSendTransaction } = useSendTransaction();
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);

  const handleTransaction = async () => {
    if (!authenticated) {
      login();
      return;
    }
    
    try {
      setIsProcessing(true);
      setTransactionStatus("processing");
      
      // Determine login method from user data
      const loginMethod = user?.phone ? 'phone' : 
                        user?.email ? 'email' : 
                        user?.wallet ? 'wallet' : 'unknown';
      
      console.log("User login method:", loginMethod);
      
      // Transaction parameters
      const transactionParams = {
        to: recipientAddress,
        value: amount,
      };
      
      let txHash;
      
      // APPROACH 1: For phone/email logins (embedded wallets), use Privy's sendTransaction
      if (loginMethod === 'phone' || loginMethod === 'email') {
        console.log("Using Privy's sendTransaction for embedded wallet");
        
        // Define the transaction request for Privy's sendTransaction
        const transactionRequest = {
          chainId: 8453, // Base Mainnet
          ...transactionParams
        };
        
        // Use Privy's sendTransaction which handles funding UI automatically
        txHash = await privySendTransaction(transactionRequest);
      } 
      // APPROACH 2: If OnchainKit wallet is connected, use it
      else if (wallet && wallet.isConnected) {
        console.log("Using OnchainKit for transaction");
        
        // Use OnchainKit's transaction system
        const { hash } = await onchainSendTransaction({
          to: recipientAddress,
          value: amount,
        });
        
        txHash = hash;
      }
      // APPROACH 3: Fallback to direct wallet transaction via Privy's external wallet
      else {
        console.log("Using direct wallet transaction for external wallet");
        
        // Find the wallet that was used to login
        const linkedWallets = user?.linkedAccounts?.filter(account => account.type === 'wallet') || [];
        
        // Find the wallet that matches the login wallet
        let loginWallet = null;
        
        if (linkedWallets.length > 0) {
          // Get the most recently used wallet address
          const loginWalletAddress = linkedWallets[0].address;
          
          // Find the matching wallet in the connected wallets
          loginWallet = wallets.find(w => 
            w.address.toLowerCase() === loginWalletAddress.toLowerCase()
          );
        }
        
        // If we couldn't find the exact login wallet, fall back to any connected wallet
        const externalWallet = loginWallet || wallets[0];
        
        if (!externalWallet) {
          throw new Error("No wallet found");
        }
        
        // Get the provider from the wallet
        const provider = await externalWallet.getEthereumProvider();
        
        // Switch to Base network
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x2105' }], // Chain ID for Base (8453 in hex)
        }).catch(async (switchError) => {
          // Add the network if it doesn't exist
          if (switchError.code === 4902) {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x2105',
                chainName: 'Base',
                nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
                rpcUrls: ['https://mainnet.base.org'],
                blockExplorerUrls: ['https://basescan.org'],
              }],
            });
          } else {
            throw switchError;
          }
        });
        
        // Get the accounts
        const accounts = await provider.request({ method: 'eth_accounts' });
        if (!accounts || accounts.length === 0) {
          throw new Error("No accounts available");
        }
        
        // Send the transaction
        txHash = await provider.request({
          method: 'eth_sendTransaction',
          params: [{
            from: accounts[0],
            ...transactionParams,
            gas: "0x5208", // 21000 gas in hex
          }],
        });
      }
      
      console.log("Transaction sent:", txHash);
      setTransactionStatus("success");
      
      if (onSuccess) {
        onSuccess(txHash);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setTransactionStatus("failed");
      
      if (onError) {
        onError(error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Render children with transaction props
  return React.cloneElement(children, {
    onClick: handleTransaction,
    disabled: isProcessing,
    className: `${children.props.className || ''} ${isProcessing ? 'processing' : ''}`,
  });
};

export default EnhancedTransactionHandler;
