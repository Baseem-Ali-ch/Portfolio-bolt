import React, { useState } from 'react';

interface PixelatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PixelatedImage: React.FC<PixelatedImageProps> = ({ src, alt, className = '' }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`
          transition-all duration-700 w-full h-full object-cover
          ${loaded ? 'filter-none' : 'blur-sm scale-105'}
        `}
        style={{
          imageRendering: 'pixelated',
          imageRendering: '-moz-crisp-edges',
          imageRendering: 'crisp-edges'
        }}
      />
      <div className="absolute inset-0 pointer-events-none scanline-effect"></div>
    </div>
  );
};

export default PixelatedImage;