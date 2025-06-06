import React from 'react';
import HeroSection from '../Hero/HeroSection';
import AboutMeMain from '../About/AboutMeMain';

function Main() {
  return (
    <div style={{ backgroundColor: '#0f0f0f', overflowX: 'hidden' }}>
      <HeroSection />
      <AboutMeMain />
    </div>
  );
}

export default Main;
