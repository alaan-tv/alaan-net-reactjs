import React, {useEffect} from 'react'
import TickIcon from '../Common-components/TickIcon'
import {Link, useParams} from 'react-router-dom'
import Header from '../Common-components/Header'
import Footer from '../Common-components/Footer'
import Advertise from '../Common-components/Advertise'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import BannerBackground from '../../Assets/background.png'

const ThankYou = () => {
	const params = useParams();

	const get_msg = () => {
		if (['podcast', 'media', 'be-a-presenter', 'voice-over'].includes(params.child)) {
			return {title: 'شكرا لك', content: 'سوف يتم التواصل معك من قبل فريق أخبار الآن قريبا لتحديد الموعد'};
		} else if (params.child === 'LBD' && +localStorage.getItem('LBD_Quiz')) {
			return {
				title: 'Thank You',
				content: <>We can't wait to get started!<br/> You’ll receive an email shortly with a link for a 50% down
					payment-once it’s paid,
					your consultant will contact you to confirm your appointment date & you’ll be on your way to your
					dream home!</>
			};
		} else if (params.child === 'CBD' && +localStorage.getItem('CBD_Quiz')) {
			return {
				title: 'Thank You',
				content: <>Your content is this 👌 close to the best it's ever been!<br/> You’ll receive an email shortly
					with a link for a 50% down payment- once it’s paid,
					your consultant will contact you to confirm your appointment date & you’ll be on your way to your
					dream set!”
				</>
			};
		} else if (params.child === 'LBD' || params.child === 'CBD') {
			return {
				title: 'Thank You',
				content: <>We’ve received your inquiry, and we’ll get back to you soon!</>
			}
		} else {
			return {title: 'Thank You', content: 'You will be contacted to schedule an appointment.'};
		}
	};

	useEffect(() => {
		const conversionID = {
			'magic-touch-studio': 'AW-10776634183/rgJWCK71n5AZEMfG2ZIo',
			'magic-touch-clinic': 'AW-10776634183/n7d3CKGM4pMZEMfG2ZIo',
			'be-a-presenter': 'AW-10776634183/v72CCLeT4pMZEMfG2ZIo',
			'personal-branding': 'AW-10776634183/w1dDCOjh3JMZEMfG2ZIo',
			'LBD': 'AW-10776634183/2MofCNvNrJ0ZEMfG2ZIo',
			'voice-over': 'AW-10776634183/HsvYCN-Q2aMZEMfG2ZIo',
		};
		window.gtag('event', 'conversion', {'send_to': conversionID[params.child], 'transaction_id': ''});
	}, [params.child]);

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