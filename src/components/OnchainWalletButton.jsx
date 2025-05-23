import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { ConnectWallet, WalletAvatar, useOnchainKit } from '@coinbase/onchainkit/wallet';
import '../styles/OnchainWalletButton.css';

// This component bridges Privy and OnchainKit
function OnchainWalletButton() {
  const { login, authenticated, user } = usePrivy();
  const { wallet } = useOnchainKit();
  const [showOnchainWallet, setShowOnchainWallet] = useState(false);
  
  // Detect if user has connected an external wallet through Privy
  // If so, we can use OnchainKit's wallet components
  useEffect(() => {
    if (authenticated && user) {
      const hasExternalWallet = user.linkedAccounts?.some(account => account.type === 'wallet');
      setShowOnchainWallet(hasExternalWallet);
    } else {
      setShowOnchainWallet(false);
    }
  }, [authenticated, user]);

  // If Privy is authenticated with a wallet, show the OnchainKit wallet UI
  if (authenticated && showOnchainWallet) {
    return (
      <div className="onchain-wallet-wrapper">
        {wallet?.isConnected ? (
          <div className="wallet-connected">
            <WalletAvatar size="sm" />
            <span className="wallet-balance">
              {wallet.balance?.formatted || '0.00'} ETH
            </span>
          </div>
        ) : (
          <ConnectWallet />
        )}
      </div>
    );
  }
  
  // If Privy is authenticated but without a wallet, or not authenticated at all,
  // use Privy's login/connect flow
  return null; // Let the regular Privy LoginComponent handle this case
}

export default OnchainWalletButton;
