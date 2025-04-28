import React from 'react';

/**
 * OptimizedImage component that serves WebP images with PNG fallbacks
 * 
 * @param {Object} props
 * @param {string} props.src - The source path to the PNG image (e.g., "/images/example.png")
 * @param {string} props.alt - Alt text for the image
 * @param {Object} props.style - Optional style object
 * @param {string} props.className - Optional CSS class name
 * @param {Function} props.onClick - Optional click handler
 * @param {Object} props.rest - Any other props to pass to the img element
 */
const OptimizedImage = ({ src, alt, style, className, onClick, ...rest }) => {
  // Generate the WebP source path by replacing .png with .webp
  const webpSrc = src.replace(/\.png$/i, '.webp');
  
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img 
        src={src} 
        alt={alt || ''} 
        style={style} 
        className={className}
        onClick={onClick}
        {...rest}
      />
    </picture>
  );
};

export default OptimizedImage;
