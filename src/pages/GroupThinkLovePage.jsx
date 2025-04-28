import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import "../styles/FilmPage.css"; // Reusing Film page styles for now
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

const GroupThinkLoveContent = () => {
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
        Group (Think) Love
      </motion.h1>
      
      <motion.div 
        className="film-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Group (Think) Love is intended as a piece of meta-satire, exploring the human condition in the age of AI. 
          An era where computers are rapidly becoming not only our intimate companions and closest confidants 
          but reflections of ourselves. It delves into the essence of artificial intelligence, highlighting its 
          role as the amalgamation of all human knowledge, creativity, and culture, and positions AI as the 
          familial successor in human evolution. Crafted entirely through AI tools, it simultaneously references 
          pivotal moments and ideas from AI culture itself, embodying the very subject it critiques.
        </p>
      </motion.div>
      
      <img 
        src="/images/film/gtlwithtext.png" 
        alt="Group Think Love With Text" 
        style={{
          display: 'block',
          margin: '2.5rem auto 0 auto',
          maxWidth: '1000px',
          width: '100%'
        }}
      />
      
      <div className="film-details">
        <div className="film-title-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Group (Think) Love (2025)</h2>
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

const GroupThinkLovePage = () => {
  // Reset scroll position when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #ff3333 0%, #990000 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <Header />
      <div className="page-content">
        <GroupThinkLoveContent />
      </div>
    </div>
  );
};

export default GroupThinkLovePage;
