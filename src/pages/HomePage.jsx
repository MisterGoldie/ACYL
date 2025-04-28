import React, { useEffect } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import "../styles/HomePage.css";
import "../styles/MobileMenu.css";
import "../styles/HomePageMobile.css"; // Mobile-specific fixes for homepage only

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

const HomeContent = () => {
  return (
    <motion.div 
      className="page-content homepage-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="acyl-description-container">
        <img src="/bighomepagelogo.png" alt="ACYL Logo" className="acyl-big-logo" />
        <p className="acyl-description-body">
          Welcome to Any Colour You Like, a new age media legacy company that champions independent voices and experimental storytelling. We believe that creativity thrives when it isn’t restricted, and we’re here to amplify the ideas that mainstream media overlooks. Our platform is home for the unconventional. A space for fearless filmmakers, writers, and creators who push limits, reimagine formats, and challenge perspectives.
        </p>
        <p className="acyl-description-body">
          At ACYL we celebrate the power of risk taking in media. Whether it’s a bold documentary, an experimental series, or a genre-defying art piece, our mission is to give a platform for work that disrupts, inspires, and evolves. Dive into a world where new ideas flourish, and join us in redefining the future of media.
        </p>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  useEffect(() => {
    // More aggressive scroll reset with multiple approaches
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Force layout recalculation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
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
        className="multicolored-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ minHeight: '100vh', height: '100%' }}
      >
        <Header />
        <HomeContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default HomePage;
