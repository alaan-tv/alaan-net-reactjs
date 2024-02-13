import React, {useEffect} from 'react'
import TickIcon from './TickIcon'
import {Link, useParams} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Advertise from './Advertise'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import BannerBackground from '../../Assets/background.png'
import {getQs} from "../../custom-functions";

const ThankYou = () => {
	const params = useParams();

	const get_msg = () => {
		if (['podcast', 'media', 'be-a-presenter'].includes(params.child)) {
			return {title: 'شكرا لك', content: 'سوف يتم التواصل معك لتحديد الموعد'};
		} else {
			return {title: 'Thank You', content: 'You will be contacted to schedule an appointment.'};
		}
	};

	useEffect(() => {
		let captured = getQs('status') === 'captured';
		if (params.child === 'magic-touch-studio'  && captured) {
			window.gtag('event', 'conversion', {
				'send_to': 'AW-10776634183/rgJWCK71n5AZEMfG2ZIo',
				'transaction_id': ''
			});
			window.history.pushState({}, document.title, window.location.pathname);
		}
	}, []);

	return (
		<div>
			<div className='home-container'>
				<Header/>
				<div className='home-bannerImage-container'>
					<img src={BannerBackground} alt="background"/>
				</div>
				<div className='thankyou-page'>
					<TickIcon/>
					<div className='home-bannerImageLeft-container'>
						<img src={BannerBackgroundLeft} alt="background"/>
					</div>
					<h1> {get_msg().title}!</h1>
					<h3> {get_msg().content}</h3>
					<Link to="/">Go to Home page </Link>
				</div>
				<Advertise/>
			</div>
			<Footer/>
		</div>
	)
}

export default ThankYou