import { useState, useEffect, useRef } from 'react';

const VIDEOS = [
  '/videos/hvac-video.mp4',
  '/videos/landscaper-video.mp4', 
  '/videos/lawyer-video.mp4',
  '/videos/pest-control-video.mp4',
  '/videos/real-estate-video.mp4',
  '/videos/roofing-video.mp4'
];


export function VideoBackground() {
  const [videosLoaded, setVideosLoaded] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Simple fade-in effect for all videos
    const timer = setTimeout(() => {
      setVideosLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Start playing all videos when component mounts
    VIDEOS.forEach((_, videoIndex) => {
      const video = videoRefs.current[videoIndex];
      if (video) {
        video.play().catch(() => {
          // Handle autoplay policy restrictions - videos will show as static background
          console.log(`Video ${videoIndex} autoplay blocked`);
        });
      }
    });
  }, [videosLoaded]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Video Grid - 3x2 layout */}
      <div 
        className={`absolute inset-0 grid gap-1 transition-opacity duration-1000 ${videosLoaded ? 'opacity-100' : 'opacity-0'}`} 
        style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr' }}
      >
        {VIDEOS.map((videoSrc, videoIndex) => (
          <div key={videoIndex} className="relative overflow-hidden bg-gray-900 w-full h-full">
            <video
              ref={(el) => (videoRefs.current[videoIndex] = el)}
              className="absolute inset-0 w-full h-full object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => console.log(`Video ${videoIndex} failed to load: ${videoSrc}`)}
            />
          </div>
        ))}
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
}
