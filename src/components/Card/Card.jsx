import React, { useEffect } from 'react';

import { motion, useAnimation } from "framer-motion"

import { useInView } from 'react-intersection-observer';


import './Card.css';

const Card = ({item}) => {

    const [ref, inView] = useInView({
        threshold: 0.9
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    type: 'spring', duration: 3, bounce: 0.3
                }
            })
        }
        if (!inView) {
            animation.start({opacity:0})
        }
    }, [inView])

    return (
        <div ref={ref} className='app__card'>
            <motion.div
            animate={animation}
            transition={{type:'spring', duration: 1, bounce: 0.3}}>
                <div className='card__content'>
                    <div className='card__content-border'>
                        <h2>{item.Title}</h2>
                        <p className='p__opensans'>{item.description}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Card;
