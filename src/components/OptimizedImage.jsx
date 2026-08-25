import React from 'react';

/**
 * Serves WebP images only.
 *
 * @param {Object} props
 * @param {string} props.src - Image path (.webp, or .png which is rewritten to .webp)
 */
const OptimizedImage = ({ src, alt, style, className, onClick, ...rest }) => {
  const imageSrc = src.replace(/\.png(\?.*)?$/i, '.webp$1');

  return (
    <img
      src={imageSrc}
      alt={alt || ''}
      style={style}
      className={className}
      onClick={onClick}
      {...rest}
    />
  );
};

export default OptimizedImage;
