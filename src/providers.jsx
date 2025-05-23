'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains'; // use baseSepolia for testing if needed
import { createConfig } from 'wagmi';
import { http } from 'viem';
import { useState, useEffect } from 'react';

export function Providers({ children }) {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    // Safely access environment variable after component mounts
    setApiKey(import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY);
  }, []);

  // Configure Base Mainnet with Coinbase's RPC endpoint
  const baseWithCoinbaseRPC = {
    ...base,
    rpcUrls: {
      ...base.rpcUrls,
      default: {
        http: ['https://base-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY'],
        webSocket: ['wss://base-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY'],
      },
      public: {
        http: ['https://mainnet.base.org'],
        webSocket: ['wss://mainnet.base.org'],
      },
      coinbase: {
        http: ['https://api.developer.coinbase.com/rpc/v1/base/'],
        webSocket: [],
      }
    },
  };

  return (
    <OnchainKitProvider
      apiKey={apiKey}
      chain={baseWithCoinbaseRPC}
      transport={http('https://api.developer.coinbase.com/rpc/v1/base/')}
    >
      {children}
    </OnchainKitProvider>
  );
}
