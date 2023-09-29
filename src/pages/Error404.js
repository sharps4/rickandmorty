import React from 'react';
import { Router, Link } from 'react-router-dom';
import Background from '../assets/background.png';
import Logo from '../assets/logo.png';
import Jerry from '../assets/jerry.png';
import Jerry2 from '../assets/jerry2.png';

function Error404() {
  return (
    <>
      <img className='background' src={Background}/>
      <main className='error-container'>
        <p className='error-text'>ERREUR 404</p>
        <div className='error-main'>
          <img src={Jerry}/>
          <button><Link to='/'>Revenir sur le site</Link></button>
          <img src={Jerry2}/>
        </div>
      </main>
    </>
  );
}

export default Error404;