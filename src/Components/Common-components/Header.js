import React, {useEffect,useState} from 'react';

import { Link ,NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./style.css";
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import  Language  from '@mui/icons-material/LanguageRounded';
import { HiMiniBars3 } from "react-icons/hi2";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import USFlag from '../../Assets/us.png';
import LogoImg from '../../Assets/newlogo.png';


 const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const [openMenu, setOpenMenu] =useState(false);
  
  return (
    <nav className='mynav'>
      <div className='nav-logo-container'>
      <NavHashLink to='/'><img loading="lazy" src={LogoImg} alt="logo" className="logo-img"/></NavHashLink>
</div>
      <div className="navbar-links-container">
        <NavHashLink to='/#about-us' className='link not-active' >About us</NavHashLink>
        <NavHashLink to='/#our-brands' className='link not-active'>Our Brands</NavHashLink>
        <NavLink to='/our-products' className='link' exact activeClassName="active" >Our Products</NavLink>
        
       
        
        <NavLink exact  to='/our-workshops' className='link' activeClassName="active" >Our Workshops</NavLink>
        <a href="#contact-us" className="link">Contact Us</a>
     <div className="divider"/>
        <a href="#" className="link right-section">
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         <Language/>
          {/* <DropdownMenu /> */}
          {isDropdownVisible && <div className="dropdown-menu">
      <ul>
        <li><a href="./"> 
English</a></li>
        <li><a href="./ar">العربية</a></li>
        
      </ul>
    </div>}
        </div>
      
         </a>
      </div>
      <div className="navbar-menu-container">
        <HiMiniBars3 className='menu-icon' onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => (false)} anchor='right'>
        <Box sx={{ width: 250}}
        role="presentation"
        
        onKeyDown={() => setOpenMenu(false)}
        >
          <button className="close-EV" onClick={() => setOpenMenu(false)}><HighlightOffRoundedIcon className='close-menu'  /></button>
          <List>
           
              <ListItem className='list-item'>
                <ListItemButton><NavHashLink to='/#about-us' className='link not-active'>About us</NavHashLink></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton><NavHashLink to='/#our-brands' className='link not-active'>Our Brands</NavHashLink></ListItemButton>
              </ListItem>
              
              <ListItem className='list-item'>
                <ListItemButton><Link to='/our-products' className='link'>Our Products</Link></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>        <Link to='/our-workshops' className='link'>Our Workshops</Link></ListItemButton>
                </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>  <a href="#contact-us" className="link">Contact Us</a></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>  <a href="#" className="link right-section"> <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         <Language/>
          {/* <DropdownMenu /> */}
          {isDropdownVisible && <div className="dropdown-menu">
      <ul>
        <li><a className='link' href="/"> 
English</a></li>
        <li><a className='link' href="/ar">العربية</a></li>
        
      </ul>
    </div>}
        </div></a></ListItemButton>
              </ListItem>
          </List>

        </Box>
      </Drawer>
      
   
</nav>
  
  )
}

export default Header