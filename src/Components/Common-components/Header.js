import React, {useState} from 'react'
import "./style.css";
import {Box, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material"
import Language from '@mui/icons-material/LanguageRounded';
import {HiMiniBars3} from "react-icons/hi2";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const menuOptions = [
		{text: "About us"},
		{text: "Our Brands"},
		{text: "Our Services"},
		{text: "Our Workshops"},
		{text: "Contact Us"}
	]

	return (
		<nav>
			<div className='nav-logo-container'>
				<img loading="lazy"
				     src="https://www.alaan.net/wp-content/themes/alaan/landing-pages/alaan/images/newlogo.png"
				     alt="logo" className="logo-img"/>
			</div>
			<div className="navbar-links-container">
				<a href="#about-us" className="link">About us</a>
				<a href="#our-brands" className="link">Our Brands</a>
				<a href="#" className="link">Our Services</a>
				<a href="#" className="link">Our Workshops</a>
				<a href="#contact-us" className="link">Contact Us</a>
				<a className=''>
					<div className="divider"/>
				</a>
				<a href="#" className="link right-section"><Language/></a>
			</div>
			<div className="navbar-menu-container">
				<HiMiniBars3 className='menu-icon' onClick={() => setOpenMenu(true)}/>
			</div>
			<Drawer open={openMenu} onClose={() => (false)} anchor='right'>
				<Box sx={{width: 250}}
				     role="presentation"
				     onClick={() => setOpenMenu(false)}
				     onKeyDown={() => setOpenMenu(false)}
				>
					<HighlightOffRoundedIcon className='close-menu' onClick={() => setOpenMenu(false)}/>
					<List>
						{menuOptions.map((item) => (
							<ListItem key={item.text}>
								<ListItemButton><ListItemText primary={item.text}/></ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</nav>
	)
}

export default Header