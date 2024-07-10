import React from 'react';
import './Hero.css';
import vscode from '../../assets/vscode.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <br />
      <img className='vscode' src={vscode} alt="" />
      <h1>Hello! I'm Mehran,<br /> a Web developer</h1>
      <h2>Simplicity is <br /> the ultimate sophistication...</h2>
      <div className='social-icons'>
      <hr />
        <a href='https://www.linkedin.com/in/mehrandev' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a href='https://instagram.com/mehrvn.dev' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
        <a href='https://github.com/Mehrvn-Dev' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a href='https://t.me/mehran_dev' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTelegram} size='2x' />
        </a>
        <hr />
      </div>
    </div>
  );
}

export default Hero;
