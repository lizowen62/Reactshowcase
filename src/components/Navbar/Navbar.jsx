import React from 'react';


import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo'></img>
    </div>
    <ul className='app__navbar-links'>
      <li className='app__opensans'><a href="#">Home</a></li>
      <li className='app__opensans'><a href="#">Home</a></li>
      <li className='app__opensans'><a href="#">Home</a></li>
      <li className='app__opensans'><a href="#">Home</a></li>
      <li className='app__opensans'><a href="#">Home</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='app__opensans'>sign</a>
      <div></div>
      <a href="#sign" className='app__opensans'>login</a>
    </div>
    <div className='app__navbar-small'>
      
    </div>
  </nav>
);

export default Navbar;
