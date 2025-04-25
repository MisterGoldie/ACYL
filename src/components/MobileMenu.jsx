import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MobileMenu.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
          >
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                className="close-button"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                ×
              </button>
              
              <nav className="mobile-nav">
                <Link to="/tv" className="mobile-nav-item">TV</Link>
                <Link to="/film" className="mobile-nav-item">Film</Link>
                <Link to="/radio" className="mobile-nav-item">Radio</Link>
                <Link to="/stream" className="mobile-nav-item">Stream</Link>
                <Link to="/contribute" className="mobile-nav-item">Contribute</Link>
                <Link to="/discover" className="mobile-nav-item">Discover</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
