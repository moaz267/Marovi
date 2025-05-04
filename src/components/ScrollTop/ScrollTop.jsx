import React, { useState, useEffect } from 'react';
import ScrollTopIcon from '../ScrollTopSettings/ScrollTopIcon';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function checks the scroll position and shows/hides the dev
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <dev
        onClick={scrollToTop}
        style={styles.dev}
        aria-label="Scroll to top"
      >
        <span style={styles.text}>
          <ScrollTopIcon />
        </span>
      </dev>
    )
  );
};

// Inline styles for the scroll dev
const styles = {
  dev: {
    position: 'fixed',
    bottom: '30px',
    right: '40px',
    padding: '12px 20px', // Padding to make it rectangular
    fontSize: '18px', // Medium font size
    fontWeight: '500', // Slightly bold font weight
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto', // Auto width for text length
    zIndex: 9999
  }
};

// Export the component
export default ScrollTop;























