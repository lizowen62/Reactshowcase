import React from 'react';

import { FiFacebook, FiTwitter, FiInstragram } from 'react-icons/fi'

import {FooterOverlay} from '../../components'

import images from '../../constants/images'

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay></FooterOverlay>
    <div className='app__footer-links'>
      <div className='app__footer-contact'>
        <p className='p__opensans'>Français</p>
        <p className='p__opensans'> avenue du 4 septembre</p>
        <p className='p__opensans'> + 06 35 12 77 56 </p>
        <p className='p__opensans'> gabriel.motta51@gmail.com</p>
        <p className='p__opensans'> 26 ans</p>
        <p className='p__opensans'></p>
      </div>
      <div className='app__footer-logo'>
        <img src={images.gericht}></img>
        <p className='p__opensans'>"A arrior is never left alone"</p>
      </div>
    </div>
    <div className='app__footer-work'>
        <p><FiFacebook></FiFacebook></p>
        <p><FiTwitter></FiTwitter></p>
    </div>
    <div className='app__footer-copyright'>
      <p className="p__opensans"> { new Date().getFullYear() } © tous doit réserver </p>
    </div>
  </div>
);

export default Footer;
