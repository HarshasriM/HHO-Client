import React, {useState, useEffect } from 'react';
import HeroSection from '../../components/Home/herosection';
import Testimonials from '../../components/Home/testimonals';
import Timeline from '../../components/Home/timeline';



function Home() {
  
  return (
    
    <div>
        <HeroSection />
        <Timeline />
        <Testimonials />
    </div>
  )
}

export default Home;
