import React, { useEffect, useRef } from 'react';
import './WelcomeSection.css'; // Import your CSS file for styling

const WelcomeSection = () => {
  const welcomeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const currentRef = welcomeRef.current; // Store the current value of welcomeRef.current
  
    observer.observe(currentRef);
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={welcomeRef} className="welcome-section">
      <div className="welcome-overlay"></div> {/* Overlay div for image */}
      <div className="welcome-content">
        <h1 className="welcome-heading">Hey, I'm Urooj</h1>
        <p className="welcome-text">a Frontend and Wordpress Developer.</p>
      </div>
    </section>
  );
};

export default WelcomeSection;
