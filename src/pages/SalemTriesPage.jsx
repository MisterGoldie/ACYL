import React from "react";
import SiteHeader from "../components/SiteHeader";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/StreamPage.css"; // Reusing Stream page styles for now
import "../styles/SalemTriesPageMobile.css"; // Mobile-specific styles for SalemTries page


const SalemTriesContent = () => {
  return (
    <motion.div 
      className="stream-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="stream-headline salem-logo-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}
      >
        <OptimizedImage 
          src="/images/salemtries/salemlogo.webp" 
          alt="Salem Tries" 
          className="salem-logo-image"
          style={{ width: '100%', maxWidth: '600px' }}
        />
      </motion.div>
      
      <motion.div 
        className="stream-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Salem Tries is a gaming stream series where our host Salem explores a variety of 
          games across different genres and platforms. From indie gems to AAA blockbusters, 
          Salem brings enthusiasm, humor, and genuine reactions to every gaming experience.
        </p>
        <p>
          Join the community as Salem navigates new worlds, tackles challenging bosses, and 
          occasionally fails spectacularly – all in good fun. Interactive chat, community 
          challenges, and special guest appearances make each stream a unique event.
        </p>
      </motion.div>
      
      {/* Add the salemsequence1.mp4 video */}
      <motion.div
        className="salem-video-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '3rem',
          marginBottom: '3rem',
          width: '100%',
          maxWidth: '800px',
          margin: '3rem auto'
        }}
      >
        {/* Video with sound control */}
        {(() => {
          const [isMuted, setIsMuted] = React.useState(true);
          
          return (
            <>
              <OptimizedVideo
                src="/images/salemtries/salemsequence1.mp4"
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
                  e.currentTarget.style.backgroundColor = 'rgba(70, 70, 70, 0.9)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
                }}
              >
                {isMuted ? '🔇 Unmute Audio' : '🔊 Mute Audio'}
              </button>
            </>
          );
        })()}
      </motion.div>
    </motion.div>
  );
};

// Main page component
const SalemTriesPage = () => {
  // Reset scroll position when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <SalemTriesPageContent />
  );
};

// Content wrapper that uses Privy hooks
const SalemTriesPageContent = () => {
  return (
    <motion.div
      className="stream-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ 
        background: 'url("/images/salemtries/salemtriesbg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      <SiteHeader />
      <div className="page-content">
        <SalemTriesContent />
      </div>
    </motion.div>
  );
};

export default SalemTriesPage;
