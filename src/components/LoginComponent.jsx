import { usePrivy } from '@privy-io/react-auth';
import { motion, AnimatePresence } from 'framer-motion';

function LoginComponent() {
  const { login, logout, authenticated, user } = usePrivy();

  return (
    <div className="auth-section">
      <AnimatePresence mode="wait">
        {!authenticated ? (
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
              Welcome, {user?.email || 'User'}!
            </motion.span>
            <motion.button 
              className="privy-button logout"
              onClick={logout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Log out
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoginComponent;
