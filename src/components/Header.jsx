import React from 'react';
import '../assets/styles/components/Header.css';
import logo from '../assets/static/logo.png';
import Search from './Search';

const Header = (props) => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Logo' />
      <div className='header__menu'>
        <nav>
          <ul>
            <li>
              <Search isHome />
            </li>
            <li>
              <a href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#certificates'>
                Certificates
              </a>
            </li>
            <li>
              <a href='#contact'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Contact at me!
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
