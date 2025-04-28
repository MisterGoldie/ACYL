import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import "../styles/FilmPage.css"; // Reusing Film page styles for now
import "../styles/MobileMenu.css";
import "../styles/IsolationPageMobile.css"; // Mobile-specific styles for Isolation page

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
          <li><Link to="/film" className="active">Film</Link></li>
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

const IsolationContent = () => {
  return (
    <motion.div 
      className="film-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="film-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Isolation
      </motion.h1>
      
      <motion.div 
        className="film-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          A man attempts to meditate.
        </p>
      </motion.div>
      
      <img 
        src="/images/isolation/isowithtext.png" 
        alt="Isolation With Text" 
        style={{
          display: 'block',
          margin: '2.5rem auto 0 auto',
          maxWidth: '1000px',
          width: '100%'
        }}
      />
      
      <div className="film-details">
        <div className="film-title-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Isolation (2025)</h2>
          <p style={{ fontSize: '1rem', color: '#ccc' }}>ANY COLOUR YOU LIKE</p>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>$5.00</p>
            <button 
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: 'white',
                color: 'black',
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
        </div>
      </div>
    </motion.div>
  );
};

const IsolationPage = () => {
  // Reset scroll position when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #666666 0%, #333333 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <Header />
      <div className="page-content">
        <IsolationContent />
      </div>
    </div>
  );
};

export default IsolationPage;
