import { useState, useEffect } from 'react';

export function useMarkerCursor() {
  const [isEnabled, setIsEnabled] = useState(() => {
    const saved = localStorage.getItem('marker-cursor-enabled');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('marker-cursor-enabled', isEnabled.toString());
    
    // Add/remove body class to control CSS cursor behavior
    if (isEnabled) {
      document.body.classList.add('marker-cursor-enabled');
    } else {
      document.body.classList.remove('marker-cursor-enabled');
    }
  }, [isEnabled]);

  const toggleMarkerCursor = () => setIsEnabled(!isEnabled);

  return {
    isEnabled,
    toggleMarkerCursor,
    setIsEnabled
  };
}