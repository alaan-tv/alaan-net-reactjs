import React, {useEffect,useState} from 'react';
import { Link ,NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./style.css";
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import  Language  from '@mui/icons-material/LanguageRounded';
import { HiMiniBars3 } from "react-icons/hi2";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import LogoImg from '../../Assets/newlogo.png';

 const ArabicHeader = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
  const [openMenu, setOpenMenu] =useState(false);
  
  return (
    <nav className='mynav arabic-nav'>
      <div className='nav-logo-container'>
      <NavHashLink to='/ar'><img loading="lazy" src={LogoImg} alt="logo" className="logo-img"/></NavHashLink>
</div>
      <div className="navbar-links-container">
        <NavHashLink to='/ar/#about-us' className='link' >من نحن</NavHashLink>
        <NavHashLink to='/ar/#our-brands' className='link not-active'>قنواتنا</NavHashLink>
        <NavLink to='/our-services' className='link' exact activeClassName="active" >خدماتنا</NavLink>
        
       
        
        <NavLink exact  to='/our-workshops/ar' className='link' activeClassName="active" >ورشاتنا</NavLink>
        <a href="#contact-us" className="link"> تواصل معنا </a>
     <div className="divider"/>
     <div className="link right-section">
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         <Language/>
          {/* <DropdownMenu /> */}
          {isDropdownVisible && <div className="dropdown-menu">
      <ul>
        <li><li><a href="/"> 
English</a></li></li>
        <li><a href="/ar">العربية</a></li>
        
      </ul>
    </div>}
        </div>
      
         </div>
      </div>
      <div className="navbar-menu-container">
        <HiMiniBars3 className='menu-icon' onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => (false)} anchor='right'>
        <Box sx={{ width: 250}}
        role="presentation"
        onKeyDown={() => setOpenMenu(false)}
        >
          <button className="close-AV" onClick={() => setOpenMenu(false)}><HighlightOffRoundedIcon className='close-menu'  /></button>
          <List className='arabic-menu'>
           
              <ListItem className='list-item'>
                <ListItemButton><NavHashLink to='/ar/#about-us' className='link'>من نحن</NavHashLink></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton><NavHashLink to='/ar/#our-brands' className='link'>قنواتنا </NavHashLink></ListItemButton>
              </ListItem>
              
              <ListItem className='list-item'>
                <ListItemButton><Link to='/our-services' className='link'>خدماتنا</Link></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>        <Link to='/our-workshops/ar' className='link'>ورشاتنا</Link></ListItemButton>
                </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>  <a href="#contact-us" className="link"> تواصل معنا</a></ListItemButton>
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

export default ArabicHeader