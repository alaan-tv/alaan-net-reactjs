import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Footer = () => {
  return (
   <div id="contact-us" className='footer-section'>
      <div className='footer-container'>
        <div className='information-section'>
        <div className='email'>
          <i className='info-icon'><MailOutlineIcon /></i>
          <p className='info-text'>info@alaan.tv</p>
        </div>
        <div className='phone'>
        <i className='info-icon'><LocalPhoneIcon /></i>
        <p className='info-text'>+971 442 77 888</p>
        </div>
        <div className='location'>
        <i className='info-icon'><LocationOnOutlinedIcon /></i>
        <p className='info-text'>Dubia Media City</p>
        </div>
        </div>
        <div className='menu-section'>
        <div className="footer-links-container">
        <a href="#about-us" className="link">About us</a>
       <a href="#our-brands" className="link">Our Brands</a>
        <a href="#" className="link">Our Services</a>
        <br className='break-mobile' />
        <a href="#" className="link">Our Workshops</a>
        <a href="#contact-us" className="link">Contact Us</a>
      
      </div>
        </div>
      </div>
      </div>
  )
}

export default Footer