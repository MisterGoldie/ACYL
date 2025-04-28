import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/StreamPage.css"; // Reusing Stream page styles for now
import "../styles/MobileMenu.css";
import "../styles/SazonPageMobile.css"; // Mobile-specific styles for Sazon page

// Header component that uses Privy hooks
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
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
};

const SazonContent = () => {
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
        Sazon With Santi
      </motion.h1>
      
      <motion.div 
        className="stream-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Sazon With Santi brings the vibrant flavors of Latin cuisine to your screen. Join 
          Santiago as he explores traditional recipes, modern fusion dishes, and the cultural 
          stories behind every meal.
        </p>
        <p>
          More than just a cooking stream, Sazon With Santi celebrates the rich culinary 
          heritage of Latin America while creating a space for community, conversation, and 
          connection through food.
        </p>
      </motion.div>
      
      <OptimizedImage 
        src="/images/sazon/swsstream.png" 
        alt="Sazon Stream" 
        style={{
          display: 'block',
          margin: '2.5rem auto 0 auto',
          maxWidth: '700px',
          width: '100%'
        }}
      />
      
      <div className="stream-details" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Sazon With Santi (2025)</h2>
        <p style={{ fontSize: '1rem', color: '#ccc' }}>ANY COLOUR YOU LIKE</p>
        <div style={{ marginTop: '1rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>$5.00</p>
          <button 
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'white',
              color: '#8B0000',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Mint
          </button>
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Stream Schedule</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0.5rem 0' }}>Wednesdays: 7PM - 9PM EST</li>
            <li style={{ margin: '0.5rem 0' }}>Sundays: 4PM - 6PM EST</li>
            <li style={{ margin: '0.5rem 0' }}>Special Events: Announced on Discord</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// Main page component
const SazonPage = () => {
  // Reset scroll position when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

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
      <SazonPageContent />
    </PrivyProvider>
  );
};

// Content wrapper that uses Privy hooks
const SazonPageContent = () => {
  return (
    <motion.div
      className="stream-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ 
        background: 'linear-gradient(135deg, #8B0000 0%, #006400 100%)',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      <Header />
      <div className="page-content">
        <SazonContent />
      </div>
    </motion.div>
  );
};

export default SazonPage;
