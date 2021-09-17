import React from 'react';
import '../assets/styles/components/Header.css';
import logo from '../assets/static/logo.png';
import Search from './Search';
import menu from '../assets/static/menu.svg'
import search from '../assets/static/search.svg'
import cvAFG from '../assets/static/CV_AFG.pdf'

const Header = (props) => {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt='Logo' />
        <nav>
          {/* <Search isHome /> */}
          <div className="header__menu--search">
            <a href={cvAFG} download="cvAFG">
              <img src={search} alt="search" />
            </a>
          </div>
          <div className="header__menu">
            <div className="header__menu--profile">
                <img src={menu} alt="menu" />
            </div>
            <ul>
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
        </div>
        </nav>
    </header>
  );
};

export default Header;
