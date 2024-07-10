import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className='footer'>
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
      <p>© All rights of this site belong to Mehran Taghiabadi</p>



    </div>
  )
}

export default Footer