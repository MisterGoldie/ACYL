import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import "../styles/FilmPage.css"; // Reusing Film page styles for now
import "../styles/MobileMenu.css";
import "../styles/IFoundItPageMobile.css"; // Mobile-specific styles for IFoundIt page

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

const IFoundItContent = () => {
  return (
    <motion.div 
      className="film-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="film-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          FROM MOVING OUT FOR COLLEGE TO THE BIG CITY IN 2018, CHARLES FOX DOCUMENTS HIS DISCOVERY OF THE TALENTED UNDERGROUND MUSIC SCENE IN CHICAGO. A COMMUNITY THAT SEEMS TO CONTINUE GROWING.
        </h1>
        
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginTop: '3rem',
          marginBottom: '3rem',
          textTransform: 'uppercase'
        }}>
          AVAILABLE NOW
        </h2>
      </motion.div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <img 
          src="/images/film/ifiwithtext.png" 
          alt="I Found It With Text" 
          style={{
            display: 'block',
            maxWidth: '400px',
            width: '100%'
          }}
        />
        
        <div className="film-details" style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>I Found It (2025)</h2>
          <p style={{ fontSize: '1rem', color: '#ccc', display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              backgroundColor: 'white', 
              marginRight: '0.5rem' 
            }}>
              <span style={{ color: 'black', fontSize: '0.7rem' }}>A</span>
            </span>
            ANY COLOUR YOU LIKE
          </p>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>$5.00</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#ccc' }}>
                <span>4 / 1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const IFoundItPage = () => {
  // Reset scroll position when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div style={{ 
      background: 'black',
      minHeight: '100vh',
      color: 'white'
    }}>
      <Header />
      <div className="page-content">
        <IFoundItContent />
      </div>
    </div>
  );
};

export default IFoundItPage;
