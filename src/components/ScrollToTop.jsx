import { useEffect, useState } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [showFab, setShowFab] = useState(false);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Multiple methods to ensure it works
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    
    // Fallback for older browsers
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  };

  return showFab ? (
    <button 
      className="scroll-to-top" 
      onClick={scrollToTop} 
      aria-label="Scroll to top" 
      title="Scroll to top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  ) : null;
}
