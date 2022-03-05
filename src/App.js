import React, { useEffect } from 'react';

import { AboutUs, Chef, FindUs, Footer, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';



const App = () => {
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
