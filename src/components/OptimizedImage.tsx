import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  aspectRatio,
  priority = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-black animate-pulse" />
      )}
    </>
  );
}
