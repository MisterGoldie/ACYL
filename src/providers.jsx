'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains'; // use baseSepolia for testing if needed
import { useState, useEffect } from 'react';

export function Providers({ children }) {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    // Safely access environment variable after component mounts
    setApiKey(import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY);
  }, []);

  return (
    <OnchainKitProvider
      apiKey={apiKey}
      chain={base} // use baseSepolia for testing if needed
    >
      {children}
    </OnchainKitProvider>
  );
}
