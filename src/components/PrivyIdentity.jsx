import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { Identity, Avatar, Name, Badge, Address } from '@coinbase/onchainkit/identity';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/PrivyIdentity.css';

function PrivyIdentity() {
  const { authenticated, user, ready } = usePrivy();
  const [walletAddress, setWalletAddress] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Schema ID for Base attestations - this is an example, you may need to replace with your specific schema
  const baseSchemaId = '0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9';
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Extract wallet address from Privy user data
  useEffect(() => {
    if (authenticated && user && ready) {
      // Check for wallet address in the embedded wallets
      if (user.wallet?.address) {
        setWalletAddress(user.wallet.address);
      } 
      // Check for linked wallets
      else if (user.linkedAccounts && user.linkedAccounts.length > 0) {
        const walletAccount = user.linkedAccounts.find(account => account.type === 'wallet');
        if (walletAccount && walletAccount.address) {
          setWalletAddress(walletAccount.address);
        }
      }
      // If no wallet is found, identity component won't be shown
    }
  }, [authenticated, user, ready]);

  // Only render the Identity component if we have a wallet address
  if (!authenticated || !walletAddress) {
    return null;
  }

  return (
    <AnimatePresence>
      {walletAddress && (
        <motion.div 
          className="identity-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Identity
            address={walletAddress}
            schemaId={baseSchemaId}
            className={isMobile ? "identity-mobile" : "identity-desktop"}
          >
            <div className="identity-layout">
              <Avatar size={isMobile ? "sm" : "md"} />
              <div className="identity-info">
                <Name>
                  <Badge tooltip="Verified on Base" />
                </Name>
                <Address />
              </div>
            </div>
          </Identity>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PrivyIdentity;
