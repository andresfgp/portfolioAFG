import React from 'react';
import '../assets/styles/components/Header.css';
import logo from '../assets/static/logo.png';
// import Search from './Search';
import {ReactComponent as Menu} from '../assets/static/menu.svg';
import {ReactComponent as Download} from '../assets/static/download.svg'
import cvAFG from '../assets/static/CV_AFG.pdf'

const Header = (props) => {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt='Logo' />
        <nav>
          {/* <Search isHome /> */}
          <div className="header__menu--download">
            <a href={cvAFG} download="cvAFG">
              <Download className="header__menu--downloadImg"/>
            </a>
          </div>
          <div className="header__menu">
            <div className="header__menu--profile">
                <Menu className="header__menu--profileImg"/>
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
