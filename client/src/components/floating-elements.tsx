import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const elements = [
    { id: 1, size: 80, x: '10%', y: '20%', duration: 20, delay: 0 },
    { id: 2, size: 120, x: '75%', y: '15%', duration: 25, delay: 2 },
    { id: 3, size: 60, x: '85%', y: '60%', duration: 18, delay: 1 },
    { id: 4, size: 100, x: '15%', y: '70%', duration: 22, delay: 3 },
    { id: 5, size: 90, x: '60%', y: '80%', duration: 24, delay: 1.5 },
    { id: 6, size: 70, x: '25%', y: '40%', duration: 19, delay: 2.5 },
  ];

  const sketches = ['✏️', '📐', '📏', '🖊️', '📝', '💡'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5" />
      
      {/* Animated grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating sketch elements */}
      {elements.map((element, index) => (
        <motion.div
          key={element.id}
          className="absolute opacity-10"
          style={{
            left: element.x,
            top: element.y,
            fontSize: element.size,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            x: mousePosition.x * (index % 2 === 0 ? 1 : -1),
            y: mousePosition.y * (index % 2 === 0 ? -1 : 1),
          }}
          transition={{
            scale: {
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: element.duration * 2,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              type: "spring",
              stiffness: 50,
              damping: 20,
            },
            y: {
              type: "spring",
              stiffness: 50,
              damping: 20,
            },
          }}
        >
          {sketches[index]}
        </motion.div>
      ))}

      {/* Animated light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100vw', '100vw'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
        animate={{
          x: ['100vw', '-100vw'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
    </div>
  );
}