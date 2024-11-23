import React, { useEffect, useState } from 'react';
import bg1 from './img/bg1.png';
import bg2 from './img/bg2.png';
import bg3 from './img/bg3.png';
import logo from './img/logo.png';
import profilelogo from './img/profilelogo.png';
import belllogo from './img/belllogo.png';
import './LandingPage.css';

export const LandingPage = () => {
  const [isZoomedBg1, setIsZoomedBg1] = useState(false);
  const [isZoomedBg2, setIsZoomedBg2] = useState(false);
  const [isBg3Active, setIsBg3Active] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const zoomBg1Timer = setTimeout(() => {
      setIsZoomedBg1(true);
    }, 1000);

    
    const zoomBg2Timer = setTimeout(() => {
      setIsZoomedBg2(true);
    }, 1000);

    
    const bg3Timer = setTimeout(() => {
      setIsBg3Active(true);
    }, 1000);

    // Show other content after all effects
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => {
      clearTimeout(zoomBg1Timer);
      clearTimeout(zoomBg2Timer);
      clearTimeout(bg3Timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div>
      {/* bg1 with zoom effect */}
      <div className={`bg1 ${isZoomedBg1 ? 'zoom' : ''}`}>
        <img src={bg1} alt="Background 1" />
      </div>

      {/* bg2 with zoom effect */}
      <div className={`bg2 ${isZoomedBg2 ? 'active' : ''}`}>
        <img src={bg2} alt="Background 2" />
      </div>

      {/* bg3 with fade and zoom */}
      <div className={`bg3 ${isBg3Active ? 'active' : ''}`}>
        <img src={bg3} alt="Background 3" />
      </div>

      {/* Additional content */}
      {showContent && (
        <>
          <img className="logo" src={logo} alt="Logo" />
          <img className="profilelogo" src={profilelogo} alt="Profile Logo" />
          <img className="belllogo" src={belllogo} alt="Bell Logo" />
        </>
      )}
    </div>
  );
};
