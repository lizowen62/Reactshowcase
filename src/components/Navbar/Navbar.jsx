import React from 'react';


import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo'></img>
    </div>
    <ul className='app__navbar-links'>
      <li className='app__opensans'><a href="#">Etudes</a></li>
      <li className='app__opensans'><a href="#">Projets</a></li>
      <li className='app__opensans'><a href="#">Travaux</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='app__opensans'>Me Contacter</a>
    </div>
    <div className='app__navbar-small'>
      
    </div>
  </nav>
);

export default Navbar;
