import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles'; // Asegúrate de que esta ruta es correcta
import { me } from "../assets";
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar el tamaño inicial de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Ejecutar una vez al montar el componente
    window.addEventListener('resize', handleResize); // Escuchar cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Limpiar el event listener al desmontar
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          // Configuración para particles.js
          "particles": {
            "number": {
              "value": 50,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle"
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            }
          },
          "retina_detect": true
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div id="particles-js" className="absolute inset-0 w-full h-full -z-10"></div>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#915eff]">Geoffrey Pasaje </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> I'm Software & Industrial engineering <br className='sm:block hidden' /> student at 
          <span className="text-[#915eff]"> Icesi University in Cali,</span> 
          <br className='sm:block hidden' /> Colombia. I am passionate about learning <br className='sm:block hidden' /> new things and pushing my limits. </p>
          <div className="mt-5">
            <img src={me} alt="Profile" className="rounded-full w-64 h-64 object-cover relative left-25" />
          </div>
        </div>
      </div>

      {!isMobile && <ComputersCanvas />}

      <div className='absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: 'loop'
              }}
              className='w-3 h-3 bg-secondary rounded-full mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
