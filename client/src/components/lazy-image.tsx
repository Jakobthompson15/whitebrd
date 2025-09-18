import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
}

export function LazyImage({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3C/svg%3E',
  width,
  height,
  priority = false,
  onLoad
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setImageRef(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, priority]);

  useEffect(() => {
    if (isInView || priority) {
      setImageRef(src);
    }
  }, [isInView, src, priority]);

  useEffect(() => {
    if (!imageRef) return;

    const img = new Image();
    img.src = imageRef;
    img.onload = () => {
      setImageSrc(imageRef);
      setIsLoaded(true);
      onLoad?.();
    };
    img.onerror = () => {
      setImageSrc(placeholder);
    };
  }, [imageRef, placeholder, onLoad]);

  return (
    <motion.img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${!isLoaded ? 'blur-sm' : ''} transition-all duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0.5 }}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}