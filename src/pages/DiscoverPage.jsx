import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import "../styles/DiscoverPage.css"; // Main styles for Discover page
import "../styles/MobileMenu.css";
import "../styles/DiscoverPageMobile.css"; // Mobile-specific fixes for Discover page

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
              <Link to="/contribute" className="dropdown-item">Contribute</Link>
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

const DiscoverContent = () => {
  return (
    <motion.div 
      className="page-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="discover-container">
        <h1 className="discover-title">Discover Bold, Independent Stories</h1>
        <p className="discover-description">
          The ACYL catalog is your gateway to a world of creativity and imagination. Dive 
          into a curated catalog of independent films, radio programs, documentaries, and 
          experimental works that celebrate diverse voices and bold storytelling.
        </p>
        <img 
          src="/images/discover/groupthinklove.png" 
          alt="Group Think Love" 
          className="discover-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            borderRadius: '18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
          }}
        />
        <img 
          src="/images/discover/iso.png" 
          alt="ISO Film Still" 
          className="discover-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            borderRadius: '18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
          }}
        />
        <img 
          src="/images/discover/arthouse.png" 
          alt="Arthouse Film Still" 
          className="discover-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            borderRadius: '18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
          }}
        />
        <img 
          src="/images/discover/ifoundit.png" 
          alt="I Found It Film Still" 
          className="discover-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            borderRadius: '18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
          }}
        />
        <img 
          src="/images/discover/salem.png" 
          alt="Salem Film Still" 
          className="discover-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            borderRadius: '18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
          }}
        />
      </div>
    </motion.div>
  );
};

const DiscoverPage = () => {
  return (
    <PrivyProvider
      appId="cm9wa9olg004yl70mwjt9n1x9"
      config={{
        loginMethods: ['email', 'wallet', 'google', 'sms', 'farcaster'],
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
        className="discover-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ minHeight: '100vh', height: '100%' }}
      >
        <Header />
        <DiscoverContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default DiscoverPage;
