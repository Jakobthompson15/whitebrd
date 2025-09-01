import React, { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  time: number;
}

export function MarkerCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const marker = markerRef.current;
    if (!canvas || !marker) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      // Update marker position
      marker.style.left = `${e.clientX}px`;
      marker.style.top = `${e.clientY}px`;

      // Add point to trail only if drawing (mouse is down)
      if (isDrawing) {
        trailsRef.current.push({
          x: e.clientX,
          y: e.clientY,
          time: Date.now()
        });
      }
    };

    // Mouse down/up handlers for drawing control
    const handleMouseDown = () => {
      setIsDrawing(true);
      // Clear any existing trail when starting new stroke
      trailsRef.current = [];
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    // Animation loop
    const draw = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const now = Date.now();
      const trails = trailsRef.current;
      
      if (trails.length > 1) {
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Draw the trail as connected segments
        for (let i = 0; i < trails.length - 1; i++) {
          const current = trails[i];
          const next = trails[i + 1];
          
          // Calculate fade based on age
          const age = (now - current.time) / 1000; // seconds
          const fadeTime = 1.2; // fade over 1.2 seconds
          
          if (age < fadeTime) {
            const opacity = Math.max(0, 1 - (age / fadeTime));
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.8})`;
            
            ctx.beginPath();
            ctx.moveTo(current.x, current.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
          }
        }
      }
      
      // Remove old points (older than fade time)
      trailsRef.current = trails.filter(point => (now - point.time) < 1200);
      
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Hide default cursor on body
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDrawing]);

  return (
    <>
      {/* Canvas for drawing trails */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
      
      {/* Marker cursor */}
      <div
        ref={markerRef}
        style={{
          position: 'fixed',
          width: '24px',
          height: '24px',
          backgroundImage: 'url("/images/marker.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          transition: 'none',
        }}
      />
    </>
  );
}

// Alternative simpler version that draws continuously (always drawing)
export function MarkerCursorContinuous() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const marker = markerRef.current;
    if (!canvas || !marker) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      // Update marker position
      marker.style.left = `${e.clientX}px`;
      marker.style.top = `${e.clientY}px`;

      // Always add point to trail (continuous drawing)
      trailsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now()
      });
    };

    // Animation loop
    const draw = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const now = Date.now();
      const trails = trailsRef.current;
      
      if (trails.length > 1) {
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Draw smooth curves through points
        ctx.beginPath();
        ctx.moveTo(trails[0].x, trails[0].y);
        
        for (let i = 1; i < trails.length; i++) {
          const current = trails[i];
          const age = (now - current.time) / 1000;
          const fadeTime = 1.0;
          
          if (age < fadeTime) {
            const opacity = Math.max(0, 1 - (age / fadeTime));
            
            // Create gradient effect along the line
            if (i === 1) {
              ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.7})`;
            }
            
            // Use quadratic curves for smoother lines
            if (i < trails.length - 1) {
              const next = trails[i + 1];
              const xc = (current.x + next.x) / 2;
              const yc = (current.y + next.y) / 2;
              ctx.quadraticCurveTo(current.x, current.y, xc, yc);
            } else {
              ctx.lineTo(current.x, current.y);
            }
          }
        }
        
        ctx.stroke();
      }
      
      // Remove old points
      trailsRef.current = trails.filter(point => (now - point.time) < 1000);
      
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
      
      <div
        ref={markerRef}
        style={{
          position: 'fixed',
          width: '28px',
          height: '28px',
          backgroundImage: 'url("/images/marker.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
    </>
  );
}