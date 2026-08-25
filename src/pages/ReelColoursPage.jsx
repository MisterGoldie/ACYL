import React from "react";
import SiteHeader from "../components/SiteHeader";
import { motion } from "framer-motion";
import { usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/ReelColoursPage.css";
import "../styles/ReelColoursPageMobile.css";


// Mobile-specific content component with animations
const MobileReelColoursContent = () => {
  return (
    <motion.div 
      className="mobile-reelcolours-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="mobile-reelcolours-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        REEL COLOURS
      </motion.h1>
      

      
      <motion.div 
        className="mobile-reelcolours-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Reel Colours is a monthly screening series dedicated to showcasing the bold, the independent, and the original. Hosted at De Dualle, a proudly minority-owned business, each event brings together filmmakers, cinephiles, and the local creative community to celebrate independent film in all its shades. Come for the screenings, stay for the conversation.
        </p>
        <p>
          Each month, we spotlight new voices and fresh perspectives through curated short films, features, and experimental work from emerging creators. Whether you're a filmmaker looking to share your work or a fan of boundary-pushing cinema, Reel Colours offers a space to connect, reflect, and imagine what's next for independent storytelling.
        </p>
      </motion.div>
    </motion.div>
  );
};

// Desktop content component
const ReelColoursContent = () => {
  return (
    <motion.div 
      className="reelcolours-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="reelcolours-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="reelcolours-title">REEL COLOURS</h1>
      </motion.div>

      <div className="reelcolours-main">
        
        <motion.div 
          className="reelcolours-description"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="reelcolours-intro">
            Reel Colours is a monthly screening series dedicated to showcasing the bold, the independent, and the original. Hosted at De Dualle, a proudly minority-owned business, each event brings together filmmakers, cinephiles, and the local creative community to celebrate independent film in all its shades. Come for the screenings, stay for the conversation.
          </p>
          <p>
            Each month, we spotlight new voices and fresh perspectives through curated short films, features, and experimental work from emerging creators. Whether you're a filmmaker looking to share your work or a fan of boundary-pushing cinema, Reel Colours offers a space to connect, reflect, and imagine what's next for independent storytelling.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Content wrapper that uses Privy hooks
const ReelColoursPageContent = () => {
  const { ready } = usePrivy();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!ready) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <motion.div
      className="reelcolours-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SiteHeader />
      <div className="reelcolours-container">
        {isMobile ? <MobileReelColoursContent /> : <ReelColoursContent />}
      </div>
    </motion.div>
  );
};

// Main page component
const ReelColoursPage = () => {
  // Reset scroll position when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <ReelColoursPageContent />
  );
};

export default ReelColoursPage;
