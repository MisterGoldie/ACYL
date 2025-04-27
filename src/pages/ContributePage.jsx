import React, { useState } from "react";
import { motion } from "framer-motion";
import { PrivyProvider, usePrivy, useWallets } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import "../styles/ContributePage.css";
import "../styles/MobileMenu.css";

const Header = () => {
  return (
    <motion.header 
      className="site-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-logo">
        <Link to="/">
          <img src="/circleheaderlogo.png" alt="ACYL Logo" className="circle-header-logo" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link to="/tv">TV</Link></li>
          <li><Link to="/film">Film</Link></li>
          <li><Link to="/radio">Radio</Link></li>
          <li><Link to="/stream">Stream</Link></li>
          <li className="more-dropdown">
            <Link to="#">More <span className="dropdown-arrow">▼</span></Link>
            <div className="dropdown-menu">
              <Link to="/contribute" className="dropdown-item active">Contribute</Link>
              <Link to="/discover" className="dropdown-item">Discover</Link>
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
};

// Separate component for the free membership card
const MemberCard = () => {
  return (
    <div className="membership-card">
      <div className="card-logo">
        <img src="/images/contribute/freemember.png" alt="ACYL Member" className="logo-image" />
      </div>
      <h3>ACYL Member</h3>
      <div className="price">Free</div>
      <button className="join-button">Join</button>
      <p className="card-description">
        Join the community and receive updates and get access to members-only content and drops
      </p>
      <div className="benefits-section">
        <div className="benefits-title">Benefits</div>
        <ul className="benefits-list">
          <li>
            <span className="bullet">●</span>
            Receive updates on new drops and releases
          </li>
          <li>
            <span className="bullet">●</span>
            Access members-only content and perks
          </li>
        </ul>
      </div>
    </div>
  );
};

// Separate component for the patron membership card
const PatronCard = () => {
  const { authenticated, login, user } = usePrivy();
  const { wallets } = useWallets();
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);
  
  const handlePatronTransaction = async () => {
    if (!authenticated) {
      login();
      return;
    }
    
    try {
      setIsProcessing(true);
      setTransactionStatus("processing");
      
      // Check if user has connected wallets
      if (!wallets || wallets.length === 0) {
        console.log("No wallets found");
        setTransactionStatus("failed");
        setIsProcessing(false);
        return;
      }
      
      // Log all available wallets for debugging
      console.log("All available wallets:", wallets.map(w => ({ 
        type: w.walletClientType, 
        address: w.address,
        connectorType: w.connectorType
      })));
      
      // Determine login method from user data (already obtained at component level)
      const loginMethod = user?.phone ? 'phone' : 
                        user?.email ? 'email' : 
                        user?.wallet ? 'wallet' : 'unknown';
      
      console.log("User login method:", loginMethod);
      
      let selectedWallet;
      
      // For phone/email logins, prioritize the embedded Privy wallet
      if (loginMethod === 'phone' || loginMethod === 'email') {
        selectedWallet = wallets.find(wallet => wallet.walletClientType === 'privy' && wallet.connectorType === 'embedded');
        console.log("Using embedded wallet for phone/email login");
      }
      
      // For wallet logins, use the connected external wallet
      if (!selectedWallet && loginMethod === 'wallet') {
        selectedWallet = wallets.find(wallet => wallet.walletClientType === 'metamask');
        if (!selectedWallet) {
          selectedWallet = wallets.find(wallet => wallet.walletClientType !== 'privy');
        }
        console.log("Using external wallet for wallet login");
      }
      
      // Fallback to any available wallet
      if (!selectedWallet) {
        selectedWallet = wallets[0];
        console.log("Falling back to first available wallet");
      }
      
      const wallet = selectedWallet;
      
      // Validate wallet address - ensure it's a valid Ethereum address
      if (!wallet || !wallet.address || typeof wallet.address !== 'string' || !wallet.address.startsWith('0x')) {
        console.error("Invalid wallet address format", wallet?.address);
        setTransactionStatus("failed");
        setIsProcessing(false);
        return;
      }
      
      console.log("Using wallet:", wallet.address, "Type:", wallet.walletClientType);
      
      // Get the Ethereum provider from the wallet
      const provider = await wallet.getEthereumProvider();
      
      if (!provider) {
        console.error("Failed to get Ethereum provider");
        setTransactionStatus("failed");
        setIsProcessing(false);
        return;
      }
      
      // Check if the user's address is available from the provider
      const accounts = await provider.request({ method: 'eth_accounts' });
      if (!accounts || accounts.length === 0) {
        console.error("No accounts available from provider");
        setTransactionStatus("failed");
        setIsProcessing(false);
        return;
      }
      
      const fromAddress = accounts[0]; // Use the actual active address from the provider
      console.log("Transaction from address:", fromAddress);
      
      // Switch to Base network first
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x2105' }], // Chain ID for Base Mainnet (8453 in hex)
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to the wallet
        if (switchError.code === 4902) {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x2105', // Base Mainnet (8453 in hex)
                chainName: 'Base',
                nativeCurrency: {
                  name: 'ETH',
                  symbol: 'ETH',
                  decimals: 18,
                },
                rpcUrls: ['https://mainnet.base.org'],
                blockExplorerUrls: ['https://basescan.org'],
              },
            ],
          });
        } else {
          throw switchError; // Re-throw other errors
        }
      }
      
      // Prepare transaction parameters with explicit from address
      const transactionParameters = {
        from: fromAddress, // Explicitly include sender address
        to: "0x76A3B9340A2ae2144c0Ba37B04bD5Be3535Ac1A1", // ACYL treasury address
        value: "0x38D7EA4C68000", // 0.001 ETH in hex (approximately $1)
        gas: "0x5208", // 21000 gas in hex
      };
      
      console.log("Transaction parameters:", transactionParameters);
      
      // Send the transaction using the provider
      const txHash = await provider.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      
      console.log("Transaction sent:", txHash);
      setTransactionStatus("success");
      
    } catch (error) {
      console.error("Error processing payment:", error);
      setTransactionStatus("failed");
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="membership-card">
      <div className="card-logo dark">
        <img src="/images/contribute/paidmember.png" alt="ACYL Patron" className="logo-image" />
      </div>
      <h3>ACYL Patron</h3>
      <div className="price">$1.00</div>
      <button 
        className={`join-button ${isProcessing ? 'processing' : ''}`} 
        onClick={handlePatronTransaction}
        disabled={isProcessing || !authenticated}
      >
        {isProcessing ? 'Processing...' : 'Join'}
      </button>
      {transactionStatus === "success" && (
        <div className="transaction-status success">Payment successful! Welcome, Patron!</div>
      )}
      {transactionStatus === "failed" && (
        <div className="transaction-status error">Payment failed. Please try again.</div>
      )}
      <p className="card-description">
        Contribute to the growth of ACYL with a custom donation. 100% of your donation goes into the ACYL Treasury
      </p>
      <div className="benefits-section">
        <div className="benefits-title">Benefits</div>
        <ul className="benefits-list">
          <li>
            <span className="bullet">●</span>
            Same benefits as ACYL Member
          </li>
          <li>
            <span className="bullet">●</span>
            You help independent creators bring bold, untold stories to life
          </li>
          <li>
            <span className="bullet">●</span>
            Create opportunities for artists to reach global audiences
          </li>
          <li>
            <span className="bullet">●</span>
            Champion diverse voices in the industry
          </li>
        </ul>
      </div>
    </div>
  );
};

const ContributeContent = () => {
  return (
    <motion.div 
      className="contribute-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="contribute-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Support the Future of Media
      </motion.h1>
      
      <motion.div 
        className="contribute-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Become a member, or donate to make a difference. Your support ensures that 
          independent voices continue to thrive and reach audiences around the globe. 
          Join ACYL and help us pave the way for the future of independent media.
        </p>
      </motion.div>
      
      <motion.div 
        className="membership-options"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <MemberCard />
        <PatronCard />
      </motion.div>
    </motion.div>
  );
};

const ContributePage = () => {
  return (
    <PrivyProvider
      appId="cm9wa9olg004yl70mwjt9n1x9"
      config={{
        loginMethods: ['email', 'wallet', 'google', 'sms', 'farcaster'],
        appearance: {
          theme: 'light',
          accentColor: '#0f62fe',
          showWalletLoginFirst: false, // Don't prioritize wallet login
          layout: 'modal',
          defaultView: 'login',
          logo: '/acylprivylogo.png',
          backgroundColor: '#fff',
        },
        embeddedWallets: {
          createOnLogin: 'all-users', // Create embedded wallets for all users
          noPromptOnSignature: false,
        }
      }}
    >
      <motion.div 
        className="contribute-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ minHeight: '100vh', height: '100%' }}
      >
        <Header />
        <ContributeContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default ContributePage;
