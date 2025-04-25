import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import LoginComponent from "../components/LoginComponent";
import "../styles/HomePage.css";

const Header = () => {
  return (
    <motion.header 
      className="site-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="empty-space"></div>
      <LoginComponent />
    </motion.header>
  );
};

const HomeContent = () => {
  return (
    <motion.div 
      className="page-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* Add your main page content here */}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <PrivyProvider
      appId="cm9wa9olg004yl70mwjt9n1x9"
      config={{
        loginMethods: ['email', 'wallet', 'google', 'sms'],
        appearance: {
          theme: 'dark',
          accentColor: '#0f62fe',
          showWalletLoginFirst: false,
          layout: 'modal',
          defaultView: 'login',
          logo: 'https://acyl.world/logo.png',
        },
        embeddedWallets: {
          createOnLogin: 'all-users',
          noPromptOnSignature: false,
        },
      }}
    >
      <motion.div 
        className="multicolored-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <HomeContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default HomePage;
