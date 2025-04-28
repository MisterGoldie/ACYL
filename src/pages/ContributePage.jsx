import React, { useState } from "react";
import { motion } from "framer-motion";
import { PrivyProvider, usePrivy, useWallets } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import TransactionHandler from "../components/TransactionHandler";
import "../styles/ContributePage.css";
import "../styles/MobileMenu.css";
import "../styles/ContributePageMobile.css"; // Mobile-specific fixes for Contribute page

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
          <OptimizedImage src="/circleheaderlogo.png" alt="ACYL Logo" className="circle-header-logo" />
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
        <OptimizedImage src="/images/contribute/freemember.png" alt="ACYL Member" className="logo-image" />
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
  const { authenticated, login } = usePrivy();
  const [transactionStatus, setTransactionStatus] = useState(null);
  
  // Handle transaction success
  const handleTransactionSuccess = (txHash) => {
    console.log("Transaction successful:", txHash);
    setTransactionStatus("success");
  };
  
  // Handle transaction error
  const handleTransactionError = (error) => {
    console.error("Transaction failed:", error);
    setTransactionStatus("failed");
  };
  
  return (
    <div className="membership-card">
      <div className="card-logo dark">
        <OptimizedImage src="/images/contribute/paidmember.png" alt="ACYL Patron" className="logo-image" />
      </div>
      <h3>ACYL Patron</h3>
      <div className="price">$1.00</div>
      <TransactionHandler
        amount="0x38D7EA4C68000" // 0.001 ETH in hex (approximately $1)
        recipientAddress="0x76A3B9340A2ae2144c0Ba37B04bD5Be3535Ac1A1" // ACYL treasury address
        onSuccess={handleTransactionSuccess}
        onError={handleTransactionError}
      >
        <button 
          className="join-button"
          disabled={!authenticated}
        >
          {transactionStatus === "processing" ? 'Processing...' : 'Join'}
        </button>
      </TransactionHandler>
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
