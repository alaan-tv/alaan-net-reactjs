import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./style.css";
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import  Language  from '@mui/icons-material/LanguageRounded';
import { HiMiniBars3 } from "react-icons/hi2";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
const ArabicLightHeader = () => {
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
    <NavHashLink to='/ar'><img loading="lazy" src="https://www.alaan.net/wp-content/themes/alaan/landing-pages/magic-touch/assets/img/whitelogo.png" alt="logo" className="logo-img"/></NavHashLink>
</div>
    <div className="navbar-links-container light-header">
      <NavHashLink to='/ar/#about-us' className='link'>من نحن</NavHashLink>
      <NavHashLink to='/ar/#our-brands' className='link'>قنواتنا</NavHashLink>
      <Link to='/our-services' className='link' activeClassName="active">خدماتنا</Link>
      <Link to='/our-workshops/ar' className='link' activeClassName="active">ورشاتنا</Link>
      <a href="#contact-us" className="link">تواصل معنا</a>
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
        <li><a className='link light-link-lang' href="./"> 
English</a></li>
        <li><a className='link light-link-lang' href="./ar">العربية</a></li>
        
      </ul>
    </div>}
        </div>
      </a>
    </div>
    
    <div className="navbar-menu-container">
      <HiMiniBars3 className='menu-icon-light' onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => (false)} anchor='right'>
      <Box sx={{ width: 250}}
      role="presentation"
      onKeyDown={() => setOpenMenu(false)}
      >
        
        <button className="close-EV" onClick={() => setOpenMenu(false)}><HighlightOffRoundedIcon className='close-menu' /></button>
        <List className='arabic-menu'>
        <ListItem className='list-item'>
                <ListItemButton><NavHashLink to='/ar/#about-us' className='link'>من نحن</NavHashLink></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton><NavHashLink to='/ar/#our-brands' className='link'>قنواتنا</NavHashLink></ListItemButton>
              </ListItem>
              
              <ListItem className='list-item'>
                <ListItemButton><Link to='/our-services' className='link'>خدماتنا</Link></ListItemButton>
              </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>        <Link to='/our-workshops/ar' className='link'>ورشاتنا</Link></ListItemButton>
                </ListItem>
              <ListItem className='list-item'>
                <ListItemButton>  <a href="#contact-us" className="link">تواصل معنا</a></ListItemButton>
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
    
 
</nav>  )
}

export default ArabicLightHeader