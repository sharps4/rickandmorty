import React from 'react';
import { Router, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={Logo}/>
      </Link>
    </header>
  );
}

export default Header;