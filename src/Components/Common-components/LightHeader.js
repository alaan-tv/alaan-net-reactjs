import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./style.css";
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import  Language  from '@mui/icons-material/LanguageRounded';
import { HiMiniBars3 } from "react-icons/hi2";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
const LightHeader = () => {
  const [openMenu, setOpenMenu] =useState(false);
  const menuOptions =[
    {text: "About us", href: "#about-us" , icon: ""},
    {text: "Our Brands", href: "#our-brands" , icon: ""},
    {text: "Our Services", href: "#" , icon: ""},
    {text: "Our Workshops", href: "#", icon: ""},
    {text: "Contact Us" , href: "#contact-us" , icon: ""},
    {text: "" , href: "#our-brands", icon: <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LanguageRoundedIcon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>}
  ]


  return (
    <nav>
    <div className='nav-logo-container'>
      <img loading="lazy" src="https://www.alaan.net/wp-content/themes/alaan/landing-pages/magic-touch/assets/img/whitelogo.png" alt="logo" className="logo-img"/>
</div>
    <div className="navbar-links-container light-header">
      <NavHashLink to='/#about-us' className='link'>About us</NavHashLink>
      <NavHashLink to='/#our-brands' className='link'>Our Brands</NavHashLink>
      <Link to='/our-services' className='link'>Our Services</Link>
      <Link to='/our-workshops' className='link'>Our Workshops</Link>
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
          {menuOptions.map((item) => (
            <ListItem key={item.text} className='list-item'>
              <ListItemButton><a className='menu-mobile-item link' href={item.href} >{item.icon}<ListItemText primary={item.text} /></a></ListItemButton>
            </ListItem>
          ))}
        </List>

      </Box>
    </Drawer>
    
 
</nav>

  )
}

export default LightHeader