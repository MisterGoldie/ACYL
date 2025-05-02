import React, { useRef, useEffect, useState } from 'react';

/**
 * OptimizedVideo component for H.264 video playback optimization
 * 
 * @param {string} src - Source path to the mp4 video
 * @param {Object} props - Additional props like className, style, etc.
 * @returns {JSX.Element} - Optimized video element
 */
const OptimizedVideo = ({ src, ...props }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Create an intersection observer to detect when the video is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // When video becomes visible
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Only autoplay if this was enabled in props and video hasn't played yet
            if (props.autoPlay && !hasPlayed && videoRef.current) {
              // Some browsers require user interaction before playing videos
              // This will attempt to play, but might be blocked
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setHasPlayed(true);
                  })
                  .catch(error => {
                    // Auto-play was prevented - silent failure
                    console.log("Auto-play prevented:", error);
                  });
              }
            }
          } else {
            setIsVisible(false);
            // Optionally pause when out of view to save resources
            if (videoRef.current && !props.keepPlaying && videoRef.current.paused === false) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.1, // Trigger when at least 10% of the video is visible
      }
    );

    // Start observing the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [props.autoPlay, props.keepPlaying, hasPlayed]);

  // Default video attributes for optimal H.264 playback
  const videoAttributes = {
    ref: videoRef,
    playsInline: true, // Better mobile experience
    preload: "metadata", // Load video metadata but not the full video until needed
    ...props, // Allow overriding defaults with passed props
  };

  // If poster wasn't provided but autoplay is disabled, create a placeholder
  if (!props.poster && !props.autoPlay) {
    videoAttributes.poster = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; // Transparent GIF
  }

  return (
    <video {...videoAttributes}>
      <source src={src} type="video/mp4; codecs=avc1.42E01E" /> {/* Explicitly specify H.264 codec */}
      Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo;
