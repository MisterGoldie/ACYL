import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MobileMenu.css';

// Custom styles to fix the close button position on the Contribute page
const contributePageStyles = {
  overlay: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menu: {
    borderRadius: '0 0 0 1rem',
    height: '100vh',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  }
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the Contribute page
  const isContributePage = location.pathname === '/contribute';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close menu when location changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="mobile-menu-container">
      <button 
        className="hamburger-button" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-icon">≡</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={isContributePage ? contributePageStyles.overlay : {}}
          >
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={isContributePage ? contributePageStyles.menu : {}}
            >
              <button 
                className="close-button"
                onClick={toggleMenu}
                aria-label="Close menu"
                style={isContributePage ? contributePageStyles.closeButton : {}}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <nav className="mobile-nav">
                <Link to="/tv" className="mobile-nav-item">TV</Link>
                <Link to="/film" className="mobile-nav-item">Film</Link>
                <Link to="/radio" className="mobile-nav-item">Radio</Link>
                <Link to="/stream" className="mobile-nav-item">Stream</Link>
                <Link to="/contribute" className="mobile-nav-item">Contribute</Link>
                <Link to="/discover" className="mobile-nav-item">Discover</Link>
                <Link to="/events" className="mobile-nav-item">Events</Link>
                <Link to="/podplayr" className="mobile-nav-item">PODPLAYR</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
