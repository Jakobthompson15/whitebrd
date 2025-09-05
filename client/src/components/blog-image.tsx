import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlogImage({ src, alt, className = '' }: BlogImageProps) {
  const [imageError, setImageError] = useState(false);
  
  // Fallback gradient background
  const fallbackStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center' as const,
    padding: '2rem'
  };
  
  if (imageError) {
    return (
      <div className={className} style={fallbackStyle}>
        {alt.slice(0, 50)}
      </div>
    );
  }
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
      loading="lazy"
    />
  );
}