import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/EventsPage.css";
import "../styles/MobileMenu.css";
import "../styles/EventsPageMobile.css";

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
              <Link to="/contribute" className="dropdown-item">Contribute</Link>
              <Link to="/discover" className="dropdown-item">Discover</Link>
              <Link to="/events" className="dropdown-item active">Events</Link>
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

// Mobile-specific content component with animations
const MobileEventsContent = () => {
  return (
    <motion.div 
      className="mobile-events-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="mobile-events-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Our Journey Through Culture
      </motion.h1>
      
      <motion.div 
        className="mobile-events-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          From concerts in a darkroom and rooftop cookouts to intimate parties and experimental film screenings,
          Any Colour You Like has always shown up where independent culture lives and breathes. Here's a look at
          the moments, spaces, and scenes we've helped bring to life.
        </p>
      </motion.div>
      
      <div className="film-posters-grid">
        <Link to="/brushstrokes" className="film-poster-link">
          <OptimizedImage 
            src="/images/brushstrokes/bstrokes.webp" 
            alt="B Strokes Event" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/experimental" className="film-poster-link">
          <OptimizedImage 
            src="/images/experimental/nyevent.webp" 
            alt="NY Event" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/decentralympics" className="film-poster-link">
          <OptimizedImage 
            src="/images/decentralympics/decetra.webp" 
            alt="Decentra Event" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/cyberjam" className="film-poster-link">
          <OptimizedImage 
            src="/images/cyberjam/cyberjam.webp" 
            alt="Cyber Jam Event" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/CAF" className="film-poster-link">
          <OptimizedImage 
            src="/images/caf/cafthumbnail.webp" 
            alt="Chicago Art Fair" 
            className="film-poster-image"
          />
        </Link>
      </div>
    </motion.div>
  );
};

// Desktop content component
const EventsContent = () => {
  return (
    <motion.div 
      className="events-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="events-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1>Our Journey Through Culture</h1>
      </motion.div>
      
      <motion.div 
        className="events-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          From concerts in a darkroom and rooftop cookouts to intimate parties and experimental film screenings,
          Any Colour You Like has always shown up where independent culture lives and breathes. Here's a look at
          the moments, spaces, and scenes we've helped bring to life.
        </p>
      </motion.div>
      
      <div className="film-posters-grid">
        <Link to="/brushstrokes" className="film-poster-link">
          <OptimizedImage 
            src="/images/brushstrokes/bstrokes.webp" 
            alt="B Strokes Event" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/experimental" className="film-poster-link">
          <OptimizedImage 
            src="/images/experimental/nyevent.webp" 
            alt="NY Event" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/decentralympics" className="film-poster-link">
          <OptimizedImage 
            src="/images/decentralympics/decetra.webp" 
            alt="Decentra Event" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/cyberjam" className="film-poster-link">
          <OptimizedImage 
            src="/images/cyberjam/cyberjam.webp" 
            alt="Cyber Jam Event" 
            className="film-poster-image"
          />
        </Link>
        <Link to="/CAF" className="film-poster-link">
          <OptimizedImage 
            src="/images/caf/cafthumbnail.webp" 
            alt="Chicago Art Fair" 
            className="film-poster-image"
          />
        </Link>
      </div>
    </motion.div>
  );
};

// Main page component
const EventsPage = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
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
      <motion.div 
        className="events-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        {isMobile ? <MobileEventsContent /> : <EventsContent />}
      </motion.div>
    </PrivyProvider>
  );
};

export default EventsPage;
