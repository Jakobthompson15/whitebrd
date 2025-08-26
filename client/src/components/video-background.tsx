import { useState, useEffect, useRef } from 'react';

const VIDEOS = [
  '/videos/hvac-video.mp4',
  '/videos/landscaper-video.mp4', 
  '/videos/lawyer-video.mp4',
  '/videos/pest-control-video.mp4',
  '/videos/real-estate-video.mp4',
  '/videos/roofing-video.mp4'
];

// Each video cell will have its own pixel grid for loading effect
const PIXELS_PER_CELL = 16; // 16x16 pixels per video cell
const TOTAL_PIXELS_PER_CELL = PIXELS_PER_CELL * PIXELS_PER_CELL;

export function VideoBackground() {
  const [activeVideoPixels, setActiveVideoPixels] = useState<Map<number, Set<number>>>(new Map());
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    let currentVideo = 0;
    
    // Start immediately with the first video
    const startVideoLoading = (videoIndex: number) => {
      let pixelIndex = 0;
      const pixelInterval = setInterval(() => {
        if (pixelIndex < TOTAL_PIXELS_PER_CELL) {
          setActiveVideoPixels(prev => {
            const newMap = new Map(prev);
            const currentPixels = newMap.get(videoIndex) || new Set();
            const newPixels = new Set(currentPixels);
            
            // Add multiple pixels at once for faster reveal
            const pixelsToAdd = Math.min(8, TOTAL_PIXELS_PER_CELL - pixelIndex);
            for (let i = 0; i < pixelsToAdd; i++) {
              newPixels.add(pixelIndex + i);
            }
            
            newMap.set(videoIndex, newPixels);
            return newMap;
          });
          pixelIndex += 8;
        } else {
          clearInterval(pixelInterval);
        }
      }, 20); // Fast pixel reveal
    };
    
    // Start first video immediately
    startVideoLoading(0);
    currentVideo = 1;
    
    const videoInterval = setInterval(() => {
      if (currentVideo < VIDEOS.length) {
        startVideoLoading(currentVideo);
        currentVideo++;
      } else {
        // All videos loaded - clear interval and keep them displayed
        clearInterval(videoInterval);
      }
    }, 1000); // New video every 1 second

    return () => clearInterval(videoInterval);
  }, []);

  useEffect(() => {
    // Start playing all videos when component mounts
    VIDEOS.forEach((_, videoIndex) => {
      const video = videoRefs.current[videoIndex];
      if (video && video.paused) {
        video.play().catch(() => {
          // Handle autoplay policy restrictions
        });
      }
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Video Grid - 3x2 layout like original */}
      <div className="absolute inset-0 grid gap-1" style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
        {VIDEOS.map((videoSrc, videoIndex) => {
          const activePixels = activeVideoPixels.get(videoIndex) || new Set();
          const isVideoActive = activePixels.size > 0;
          
          return (
            <div key={videoIndex} className="relative overflow-hidden bg-gray-900 w-full h-full">
              {/* Full video */}
              <video
                ref={(el) => (videoRefs.current[videoIndex] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              
              {/* Pixel mask overlay for this video */}
              <div 
                className="absolute inset-0 grid gap-0 w-full h-full"
                style={{ 
                  gridTemplateColumns: `repeat(${PIXELS_PER_CELL}, 1fr)`,
                  gridTemplateRows: `repeat(${PIXELS_PER_CELL}, 1fr)`
                }}
              >
                {Array.from({ length: TOTAL_PIXELS_PER_CELL }, (_, pixelIndex) => {
                  const isPixelActive = activePixels.has(pixelIndex);
                  
                  return (
                    <div
                      key={pixelIndex}
                      className="transition-all duration-200 w-full h-full"
                      style={{
                        backgroundColor: isPixelActive ? 'transparent' : 'black',
                        opacity: isPixelActive ? 0 : 1,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
}
