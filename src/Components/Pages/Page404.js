import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Common-components/Header'
import Footer from '../Common-components/Footer'
import Advertise from '../Common-components/Advertise'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import BannerBackground from '../../Assets/background.png'

const Page404 = () => {
	return (
		<div>
			<div className='home-container'>
				<Header/>
				<div className='home-bannerImage-container'>
					<img src={BannerBackground} alt="background"/>
				</div>
				<div className='thankyou-page'>
					<div className='home-bannerImageLeft-container'>
						<img src={BannerBackgroundLeft} alt="background"/>
					</div>
					<h1>The requested page does not exist</h1>
					<Link to="/">Go to Home page </Link>
				</div>
				<Advertise/>
			</div>
			<Footer/>
		</div>
	)
}

export default Page404