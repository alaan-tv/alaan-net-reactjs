import React, {useEffect,useState} from 'react';
import { Link ,NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./style.css";
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import  Language  from '@mui/icons-material/LanguageRounded';
import { HiMiniBars3 } from "react-icons/hi2";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
 const Header = () => {
  
  const [openMenu, setOpenMenu] =useState(false);
  
  return (
    <nav className='mynav'>
      <div className='nav-logo-container'>
      <NavHashLink to='/'><img loading="lazy" src="https://www.alaan.net/wp-content/themes/alaan/landing-pages/alaan/images/newlogo.png" alt="logo" className="logo-img"/></NavHashLink> 
</div>
      <div className="navbar-links-container">
        <NavHashLink to='/#about-us' className='link' >About us</NavHashLink>
        <NavHashLink to='/#our-brands' className='link not-active'>Our Brands</NavHashLink>
        <NavLink to='/our-services' className='link' exact activeClassName="active" >Our Services</NavLink>
        
       
        
        <NavLink exact  to='/our-workshops' className='link' activeClassName="active" >Our Workshops</NavLink>
        <a href="#contact-us" className="link">Contact Us</a>
     <div className="divider"/>
        <a href="#" className="link right-section"><Language/></a>
      </div>
      <div className="navbar-menu-container">
        <HiMiniBars3 className='menu-icon' onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => (false)} anchor='right'>
        <Box sx={{ width: 250}}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        >
          <HighlightOffRoundedIcon className='close-menu' onClick={() => setOpenMenu(false)} />
          <List>
           
              <ListItem className='list-item'>
                <ListItemButton><NavHashLink to='/#about-us' className='link'>About us</NavHashLink></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton><NavHashLink to='/#our-brands' className='link'>Our Brands</NavHashLink></ListItemButton>
              </ListItem>
              
              <ListItem className='list-item'>
                <ListItemButton><Link to='/our-services' className='link'>Our Services</Link></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>        <Link to='/our-workshops' className='link'>Our Workshops</Link></ListItemButton>
                </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>  <a href="#contact-us" className="link">Contact Us</a></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>  <a href="#" className="link right-section"><Language/></a></ListItemButton>
              </ListItem>
          </List>

        </Box>
      </Drawer>
      
   
</nav>
  
  )
}

export default Header