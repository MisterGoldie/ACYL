import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/StreamPage.css";
import "../styles/MobileMenu.css";
import "../styles/StreamPageMobile.css"; // Mobile-specific fixes for Stream page

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
          <li><Link to="/stream" className="active">Stream</Link></li>
          <li className="more-dropdown">
            <Link to="#">More <span className="dropdown-arrow">▼</span></Link>
            <div className="dropdown-menu">
              <Link to="/contribute" className="dropdown-item">Contribute</Link>
              <Link to="/discover" className="dropdown-item">Discover</Link>
              <Link to="/podplayr" className="dropdown-item">PODPLAYR</Link>
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
};

const StreamContent = () => {
  return (
    <motion.div 
      className="stream-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="stream-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Game On. Stream On.
      </motion.h1>
      
      <motion.div 
        className="stream-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          At ACYL, gaming isn't just entertainment, it's a way to connect, 
          celebrate, and explore endless virtual worlds. Whether you're a 
          hardcore gamer, a casual fan, or just curious, there's always 
          something exciting to watch.
        </p>
      </motion.div>
      <Link to="/salemtries" style={{ display: 'block', textDecoration: 'none' }}>
        <OptimizedImage 
          src="/images/stream/salemstream.png" 
          alt="Salem Stream" 
          className="stream-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
        />
      </Link>
      <Link to="/sazon" style={{ display: 'block', textDecoration: 'none' }}>
        <OptimizedImage 
          src="/images/stream/swsstream.png" 
          alt="SWS Stream" 
          className="stream-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
        />
      </Link>
    </motion.div>
  );
};

const StreamPage = () => {
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
        className="stream-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          minHeight: '100vh', 
          height: '100%',
          backgroundImage: 'url("/images/stream/streambg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />
        <StreamContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default StreamPage;
