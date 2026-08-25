import React from "react";
import SiteHeader from "../components/SiteHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/BrushstrokesPage.css";
import "../styles/BrushstrokesPageMobile.css";


// Mobile-specific content component with animations
const MobileBrushstrokesContent = () => {
  return (
    <motion.div 
      className="mobile-brushstrokes-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="mobile-brushstrokes-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Brushstrokes
      </motion.h1>
      
      <motion.div
        className="mobile-brushstrokes-secondary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/brushstrokes/bsmobile1.webp" 
          alt="Brushstrokes Event Image" 
          className="mobile-bsmobile1-image"
        />
      </motion.div>
      
      <motion.div 
        className="mobile-brushstrokes-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Tucked inside a former photo darkroom turned DIY skatepark, Brushstrokes brought together a crew of creatives for a night of raw expression and real connection. The space buzzed with live art, spontaneous collabs, and an intimate music set featuring the genre-blurring talents of Jamee Cornelia, GRLKRASH, and Leo Pastel.
        </p>
      </motion.div>
      
      <motion.div
        className="mobile-brushstrokes-tertiary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/brushstrokes/bsmobile2.webp" 
          alt="Brushstrokes Event Image 2" 
          className="mobile-bsmobile2-image"
        />
      </motion.div>
      
      <motion.div 
        className="mobile-brushstrokes-description-second"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p>
          No stage, no velvet ropes. Just a shared energy that blurred the lines between performer and crowd. It was community in motion, soundtracked by artists who aren't afraid to bend the rules.
        </p>
      </motion.div>
    </motion.div>
  );
};

// Desktop content component
const BrushstrokesContent = () => {
  return (
    <motion.div 
      className="brushstrokes-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="brushstrokes-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1>Brushstrokes</h1>
      </motion.div>
      
      <motion.div 
        className="brushstrokes-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Tucked inside a former photo darkroom turned DIY skatepark, Brushstrokes brought together a crew of creatives for a night of raw expression and real connection. The space buzzed with live art, spontaneous collabs, and an intimate music set featuring the genre-blurring talents of Jamee Cornelia, GRLKRASH, and Leo Pastel.
        </p>
        
        <p>
          No stage, no velvet ropes. Just a shared energy that blurred the lines between performer and crowd. It was community in motion, soundtracked by artists who aren't afraid to bend the rules.
        </p>
      </motion.div>
      
      <div className="brushstrokes-video-container" style={{ marginTop: '40px', maxWidth: '800px', margin: '0 auto' }}>
        {(() => {
          const [isMuted, setIsMuted] = React.useState(true);
          
          return (
            <>
              <OptimizedVideo
                src="/images/brushstrokes/2025 ACYL LIVE BROOKLYN MEETUPO.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                keepPlaying={true}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
              />
              
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1.5rem',
                    padding: '0.6rem 1.2rem',
                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(100, 100, 100, 0.5)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(60, 60, 60, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {isMuted ? '🔇 Unmute Video' : '🔊 Mute Video'}
                </button>
              </div>
            </>
          );
        })()}
      </div>
    </motion.div>
  );
};

// Main page component
const BrushstrokesPage = () => {
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
    <motion.div 
        className="brushstrokes-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SiteHeader />
        {isMobile ? <MobileBrushstrokesContent /> : <BrushstrokesContent />}
      </motion.div>
  );
};

export default BrushstrokesPage;
