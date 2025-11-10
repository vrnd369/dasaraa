import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Aggressive scroll to top function
    const forceScrollToTop = () => {
      // Method 1: window.scrollTo with immediate behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Method 2: Direct property setting
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
        document.documentElement.scrollLeft = 0;
      }
      
      if (document.body) {
        document.body.scrollTop = 0;
        document.body.scrollLeft = 0;
      }
      
      // Method 3: Force on window
      window.scrollY = 0;
      window.scrollX = 0;
      
      // Method 4: Force on all scrollable elements
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        if (el.scrollTop !== undefined) {
          el.scrollTop = 0;
        }
        if (el.scrollLeft !== undefined) {
          el.scrollLeft = 0;
        }
      });
    };

    // Execute multiple times to ensure it works
    forceScrollToTop();
    
    // Execute immediately after DOM update
    const immediateId = setTimeout(forceScrollToTop, 0);
    
    // Execute after a short delay
    const shortDelayId = setTimeout(forceScrollToTop, 10);
    
    // Execute after a longer delay to catch any late rendering
    const longDelayId = setTimeout(forceScrollToTop, 100);

    return () => {
      clearTimeout(immediateId);
      clearTimeout(shortDelayId);
      clearTimeout(longDelayId);
    };
  }, [location.pathname]);
};
