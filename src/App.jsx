import React from 'react';
import './App.css';
import Slideshow from './components/Slideshow';
import CustomCarousel from './components/CustomCaroussel';

function App() {
  return (
    <div className="App">
      <span className="fw-bold">Candidats</span>  
      {/* Made with react slide show */}
      <div className="slider"> <Slideshow></Slideshow></div>
      <span className="fw-bold">Candidats</span>  
      {/* Made with react elastic caroussel */}
      <div className="carrousel"><CustomCarousel></CustomCarousel></div>
    </div>
  );
}

export default App;
