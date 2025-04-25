import { usePrivy } from '@privy-io/react-auth';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/LoginComponent.css';

function LoginComponent() {
  const { login, logout, authenticated, user, ready } = usePrivy();
  const [displayName, setDisplayName] = useState('User');
  const [isMobile, setIsMobile] = useState(false);
  
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
  
  useEffect(() => {
    if (authenticated && user && ready) {
      console.log('User data:', user);
      
      // Check for wallet address in the embedded wallets
      if (user.wallet?.address) {
        const address = user.wallet.address;
        const truncated = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
        setDisplayName(truncated);
      } 
      // Check for linked wallets
      else if (user.linkedAccounts && user.linkedAccounts.length > 0) {
        const walletAccount = user.linkedAccounts.find(account => account.type === 'wallet');
        if (walletAccount && walletAccount.address) {
          const address = walletAccount.address;
          const truncated = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
          setDisplayName(truncated);
        }
      }
      // Check for email
      else if (user.email) {
        setDisplayName(user.email);
      }
      // Check for Google email
      else if (user.google?.email) {
        setDisplayName(user.google.email);
      }
    }
  }, [authenticated, user, ready]);

  return (
    <div className="auth-section">
      <AnimatePresence mode="wait">
        {!authenticated ? (
          isMobile ? (
            <button 
              className="privy-button mobile-login-button" 
              onClick={login}
            >
              LOGIN
            </button>
          ) : (
            <motion.button 
              className="privy-button" 
              onClick={login}
              key="login-button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              LOGIN
            </motion.button>
          )
        ) : (
          isMobile ? (
            <div className="user-section">
              <span className="welcome-text">
                {displayName}
              </span>
              <button 
                className="privy-button logout mobile-logout-button"
                onClick={logout}
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <motion.div 
              className="user-section"
              key="user-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="welcome-text"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {displayName}
              </motion.span>
              <motion.button 
                className="privy-button logout"
                onClick={logout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                LOG OUT
              </motion.button>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoginComponent;
