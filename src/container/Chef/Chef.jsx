import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from '../../components/Card/Card'

import './Chef.css';

const tuto = [
  {"Title": "fisrt step", "description": " choose a drink jiookkopu huihuib fytffufyigi"},
  {"Title": "second step", "description": " choose a drink"},
  {"Title": "third step", "description": " choose a drink"},
  {"Title": "forth step", "description": " choose a drink"},
]

const Chef = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  return (
    <div className='app__content'>
    <div className='app__tutorial'>
      { tuto.map( item => {
        return (
          <Card item={item}></Card>
        )
      })}
    </div>
  </div>
  )
};

export default Chef;
