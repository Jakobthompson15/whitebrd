import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${!isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        <div className="relative animate-pulse">
          <svg
            width="400"
            height="250"
            viewBox="0 0 800 500"
            className="w-80 md:w-96"
          >
            <rect
              x="40"
              y="40"
              width="720"
              height="420"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="16"
              className="text-gray-900"
            />
            
            <rect
              x="280"
              y="420"
              width="240"
              height="40"
              fill="currentColor"
              className="text-gray-900"
            />
            
            <rect
              x="40"
              y="460"
              width="720"
              height="8"
              fill="currentColor"
              className="text-gray-900"
            />
            
            <text
              x="140"
              y="280"
              fontSize="96"
              fontWeight="bold"
              fill="currentColor"
              className="text-gray-900"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              Whitebrd
            </text>
            
            <text
              x="580"
              y="360"
              fontSize="96"
              fontWeight="bold"
              fill="currentColor"
              className="text-gray-900"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              Co.
            </text>
          </svg>
        </div>
        
        <div className="mt-8 flex space-x-2">
          <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}