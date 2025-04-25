import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider } from "@privy-io/react-auth";
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
        <div className="membership-card">
          <div className="card-logo">
            <span className="logo-letter">a</span>
          </div>
          <h3>ACYL Member</h3>
          <div className="price">Free</div>
          <button className="join-button">Join</button>
          <p className="card-description">
            Join the community and receive updates and get access to members-only content and drops
          </p>
          <div className="benefits-section">
            <h4>Benefits</h4>
            {/* Benefits would be listed here */}
          </div>
        </div>
        
        <div className="membership-card">
          <div className="card-logo dark">
            <span className="logo-letter">a</span>
          </div>
          <h3>ACYL Patron</h3>
          <div className="price">$1.00</div>
          <button className="join-button">Join</button>
          <p className="card-description">
            Contribute to the growth of ACYL with a custom donation. 100% of your donation goes into the ACYL Treasury
          </p>
          <div className="benefits-section">
            <h4>Benefits</h4>
            {/* Benefits would be listed here */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ContributePage = () => {
  return (
    <PrivyProvider
      appId="cm9wa9olg004yl70mwjt9n1x9"
      config={{
        loginMethods: ['email', 'wallet', 'google', 'sms'],
        appearance: {
          theme: 'light',
          accentColor: '#0f62fe',
          showWalletLoginFirst: false,
          layout: 'modal',
          defaultView: 'login',
          logo: '/acylprivylogo.png',
          backgroundColor: '#fff',
        },
        embeddedWallets: {
          createOnLogin: 'all-users',
          noPromptOnSignature: false,
        },
      }}
    >
      <motion.div 
        className="contribute-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <ContributeContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default ContributePage;
