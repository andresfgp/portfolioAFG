import React from 'react';
import '../assets/styles/components/Hero.css';
import foto from '../assets/static/foto.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__text'>
        <h1 className='hero__text-name'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hi, I'm
          <strong>
            {' '}
            Andrés García
          </strong>
          <span>&#160;</span>
        </h1>
        <h1 className='hero__text-front'>
          Frontend Developer,
          <span>&#160;</span>
        </h1>
        <h1 className='hero__text-ing'>
          Electronic and Electrical Engineer!
          <span>&#160;</span>
        </h1>
      </div>
      <figure className='hero__figure'>
        <img src={foto} alt='Foto' />
      </figure>
    </div>
  );
};
export default Hero;
