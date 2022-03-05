import React, { useEffect } from 'react';
import { Chef, Footer, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';



const App = () => {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return(
  <div>
    <Navbar />
    <SpecialMenu/>
    <Chef />
    <Header/>
    <Footer />
  </div>
  )
};

export default App;
