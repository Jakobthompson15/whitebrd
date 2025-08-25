import { useState, useEffect } from 'react';

const videos = [
  '/videos/plumbing-video-1.mp4',
  '/videos/plumbing-video-2.mp4',
  '/videos/ac-video.mp4'
];

export function VideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 15000); // Switch video every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for better text readability */}
      {videos.map((video, index) => (
        <video
          key={video}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}