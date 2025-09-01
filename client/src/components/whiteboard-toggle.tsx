import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function WhiteboardToggle() {
  const [isWhiteboard, setIsWhiteboard] = useState(() => {
    const saved = localStorage.getItem('whiteboard-mode');
    return saved === 'true';
  });

  useEffect(() => {
    if (isWhiteboard) {
      document.body.classList.add('whiteboard-mode', 'whiteboard-bg');
    } else {
      document.body.classList.remove('whiteboard-mode', 'whiteboard-bg');
    }
    localStorage.setItem('whiteboard-mode', isWhiteboard.toString());
  }, [isWhiteboard]);

  return (
    <motion.button
      onClick={() => setIsWhiteboard(!isWhiteboard)}
      className="fixed bottom-6 right-6 z-50 bg-white border-2 border-black p-3 shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isWhiteboard ? "Switch to clean mode" : "Switch to whiteboard mode"}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-6 h-6"
      >
        {isWhiteboard ? (
          // Clean mode icon (document)
          <path 
            d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 9V3.5L18.5 9H13Z" 
            fill="currentColor"
          />
        ) : (
          // Whiteboard icon
          <>
            <rect x="3" y="4" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 10H16M8 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="19" cy="11" r="1" fill="currentColor"/>
          </>
        )}
      </svg>
    </motion.button>
  );
}