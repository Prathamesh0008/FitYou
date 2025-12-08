// components/PreventZoom.jsx
"use client";

import { useEffect } from 'react';

export default function PreventZoom() {
  useEffect(() => {
    // Only prevent zoom on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (!isMobile) return; // Don't apply on desktop

    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    
    const handleTouchStart = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Ensure all inputs have 16px font size on iOS
    const checkAndSetFontSize = () => {
      if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          if (!input.style.fontSize || input.style.fontSize === '') {
            input.style.fontSize = '16px';
          }
        });
      }
    };

    // Run on mount
    checkAndSetFontSize();

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return null; // This component doesn't render anything
}