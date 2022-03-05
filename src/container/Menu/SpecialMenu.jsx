import React from 'react';

import './SpecialMenu.css';

import Particles from "react-tsparticles";

const SpecialMenu = () => {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className='app__header'>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#DCCA87",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#545454",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    <div className='app__description'>
      <div>
        <h2>Epitech : <p>expert de l'informatique et de l'innovation</p></h2>
        <p className='p__opensans'> Avril 2017 - Septembre 2017</p>
        <p className='p__opensans'>Epitech Bachelor ( bac + 3 )</p>
        <p className='p__opensans'>Epitech Master ( bac + 5 )</p>
      </div>
      <div>
        <h2> D.U.T : <p>réseau et télécommunication</p></h2>
        <p className='p__opensans'> Avril 2017 - Septembre 2017</p>
        <p className='p__opensans'>kdzeikdze</p>
      </div>
    </div>
  </div>
  );
};

export default SpecialMenu;
