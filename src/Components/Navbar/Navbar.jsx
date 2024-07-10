import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar">
      <img className='logo' src={logo} alt="Logo" />
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li><AnchorLink className='anchor-link' href="#home">Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#aboutme">About Me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#resume">Resume</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#work">Portfolio</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#contact">Contact</AnchorLink></li>
      </ul>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={closeMenu}>
          &times;
        </div>
        <ul className="side-menu-list">
          <li><AnchorLink className='anchor-link' href="#home">Home</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href="#aboutme">About Me</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href="#resume">Resume</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href="#work">Portfolio</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href="#contact">Contact</AnchorLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
