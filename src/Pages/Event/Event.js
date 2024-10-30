import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from '../../components/Event/Slider';
import PastEvents from '../../components/Event/past_events';
import { AccordionEl } from '../../components/Event/accordion'; // Adjust the path as necessary


function App() {
  return (
    <>
        <Slider />
        <PastEvents />
        {/* <AccordionEl /> */}
    </>
    
  );
}

export default App;
