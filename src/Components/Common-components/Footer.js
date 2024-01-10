import React from 'react'
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Footer = () => {
  return (
   <div id="contact-us" className='footer-section'>
      <div className='footer-container'>
        <div className='information-section'>
        <a href="mailto:info@alaan.tv" ><div className='email'>
          <i className='info-icon'><MailOutlineIcon /></i>
          <p className='info-text'>info@alaan.tv</p>
        </div>
        </a>
        <div className='phone'>
        <i className='info-icon'><LocalPhoneIcon /></i>
        <a href='tel:+971 442 77 888'><p className='info-text'>+971 442 77 888</p></a>
        </div>
        <div className='location'>
        <i className='info-icon'><LocationOnOutlinedIcon /></i>
        <a href='https://maps.app.goo.gl/6WsNgfxpMhQgJ2NL8'><p className='info-text'>Dubia Media City</p></a>
        </div>
        </div>
        <div className='menu-section'>
        <div className="footer-links-container">
        <NavHashLink to='/#about-us' className='link not-active'>About us</NavHashLink>
        <NavHashLink to='/#our-brands' className='link not-active'>Our Brands</NavHashLink>
        <Link to='/our-services' className='link'>Our Services</Link>

        <br className='break-mobile' />
        <Link to='/our-workshops' className='link'>Our Workshops</Link>
        <a href="#contact-us" className="link">Contact Us</a>

        
      
      </div>
        </div>
      </div>
      </div>
  )
}

export default Footer