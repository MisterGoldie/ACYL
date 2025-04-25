import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import "../styles/HomePage.css";

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
    </motion.header>
  );
};

const HomeContent = () => {
  return (
    <motion.div 
      className="page-content"
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
  return (
    <PrivyProvider
      appId="cm9wa9olg004yl70mwjt9n1x9"
      config={{
        loginMethods: ['email', 'wallet', 'google', 'sms'],
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
        transition={{ duration: 0.3 }}
      >
        <Header />
        <HomeContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default HomePage;
