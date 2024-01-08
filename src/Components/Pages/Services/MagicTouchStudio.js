import React, {useEffect, useRef, useState} from 'react'
import Carousel from 'react-multi-carousel';
import { Link } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import "./service.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Header from '../../Common-components/LightHeader'
import Footer from '../../Common-components/Footer'
import FeatureIcon1 from '../../../Assets/feature-icon1.svg'
import FeatureIcon2 from '../../../Assets/feature-icon2.svg'
import FeatureIcon3 from '../../../Assets/feature-icon3.svg'
import FeatureIcon4 from '../../../Assets/feature-icon4.svg'
import Feature1 from '../../../Assets/f1.svg'
import Feature2 from '../../../Assets/f2.svg'
import Feature3 from '../../../Assets/f3.svg'
import Feature4 from '../../../Assets/f4.svg'
import video from '../../../Assets/promo.mp4'
import TistiImage1 from '../../../Assets/testi-image1.svg'
import TistiImage2 from '../../../Assets/testi-image2.svg'
import TistiImage3 from '../../../Assets/testi-image3.svg'
import BookingIcon from '../../../Assets/book-icon.svg'
import Avatar from '../../../Assets/avatar.svg'
import TickIcon from '../../../Assets/tick.png'
import {ajax_url, formData, getQs} from "../../../custom-functions";
import Modal from '../../Common-components/Modal';

const MagicTouchStudio = () => {

	/**
	 *
	 *  Send From Data
	 *
	 */
	const [inputs, setInputs] = useState({});
	const [modal, setModal] = useState(false);
	const [phone, setPhone] = useState("971");
	const submitBtn = useRef(null);

	useEffect(() => {
		if (getQs('status') == 'captured') {
			setModal(true);
			window.history.pushState({}, document.title, window.location.pathname);
		}
	}, []);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}))
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		submitBtn.current.value = 'Sending...';
		fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs,
				phone: phone,
				lp_type: 'studio',
				title: 'Magic Touch Studio - Service',
				email_subject: 'Magic Touch Studio',
				page_url: window.location.origin+window.location.pathname,
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data.id) {
					setInputs({});
					setPhone('971');
					window.location = data.payment_link;
				}
			}).catch(error => console.error(error));
	}
	/**
	 *
	 *  Send Guidebook Email
	 *
	 */
	const [guideEmail, setGuideEmail] = useState('');
	const submitGuidBtn = useRef();
	const [guideModal, setGuideModal] = useState(false);
	const sendGuideBook = (event) => {
		event.preventDefault();
		submitGuidBtn.current.value = 'Please wait...';
		fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs, email: guideEmail, lp_type: 'guidebook', title: 'Guidebook', email_subject: 'Guidebook',
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data.id) {
					setGuideEmail('');
					setGuideModal(true);
				}
			}).catch(error => console.error(error));
	}


	const responsive = {
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 3,
			slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};
	const youWillGetList = [
		{icon: FeatureIcon1, desc: 'Tailored Interview Questions Highlighting Your Strengths'},
		{icon: FeatureIcon2, desc: 'Professional Video Shooting and great pictures for an Outstanding Presentation'},
		{icon: FeatureIcon3, desc: 'Expertly Produced and Edited Video CVs'},
		{icon: FeatureIcon4, desc: 'Optional Makeup Service for Camera-Ready Confidence'},
	];

	const howItWorkList = [
		{
			icon: Feature1,
			title: "Register and Pay",
			desc: "Register, make a payment to secure your appointment, and our team will promptly confirm your booking and assist with choosing a convenient date and time."
		},
		{
			icon: Feature2,
			title: "Studio Session and Questionnaire",
			desc: "Attend your studio session for a professional video shoot and questionnaire."
		},
		{
			icon: Feature3,
			title: "Video Production and Editing",
			desc: "We'll expertly produce and edit your Video CV."
		},
		{
			icon: Feature4,
			title: 'Receive Your Ready-to-Use Video CV',
			desc: "You'll receive your polished Video CV for immediate use on platforms like LinkedIn to enhance your job prospects."
		},
	];

	const testimonialList = [
		{
			image: TistiImage1,
			title: '',
			name: 'Omar Bin Ashoor',
			desc: '"I decided to give Magic Touch a try. They transformed my plain CV into an engaging video that truly showcased my skills."'
		},{
			image: TistiImage2,
			title: '',
			name: 'Mohannad Al Wadi',
			desc: '"Magic Touch proved to be a great investment. The video CV they crafted not only highlighted my qualifications but also showcased my personality."'
		},{
			image: TistiImage3,
			title: '',
			name: 'Nada Ahmed',
			desc: '"Choosing Magic touch studio was a game-changer for me. The personalized touch they brought to my video CV exceeded my expectations."'
		},

	];

	const Testimonial = ({item})=>{
		return (
			<>
				<div className='testimonail'>
					<p className='testi-desc'>{item.desc}</p>
					<div className='divider2'></div>
					<div className='testi-info'>
						<img className='testi-image' src={item.image} alt="customer"/>
						<div className='testi-name'>
							<p className='name'><b>{item.name}</b></p>
							<p>{item.title}</p>
						</div>
					</div>
				</div>
			</>
		);
	}

	const Feature = ({item}) => {
		return (
			<div className='feature'>
				<img src={item.icon} alt="Feature Icon" className='feature-icon'/>
				{item.title && <p className='feature-heading'>{item.title}</p>}
				{item.desc && <p className='feature-desc third-text'>{item.desc}</p>}
			</div>
		);
	}

	return (

		<div>
			<div className='hero-section'>
				<div className='home-container'>
					<Header/>
					<div className='home-banner-container banner-service'>
						<div className='home-text-section'>
							<h1 className='primary-heading light-heading'>
								Transform your CV into a video masterpiece!
							</h1>
							<p className='primary-text light-text'>
								We'll turn your traditional resume into an amazing video CV, showcasing your
								personality, skills, and talents, making it easy for recruiters to see your true
								potential. Book now to elevate your job search!
							</p>
							<a className='service-cta primary-button' href="#contact-form">Book Now!</a>
							{/*<div className='home-image-container banner-service-image'>
            <picture>
     <source media='(max-width: 768px)' srcSet={MagicStudioVideoMobile} />
     <source media='(min-width: 768px)' srcSet={MagicStudioVideo} />
     <img src={MagicStudioVideo} className='banner-image' alt='hero' />
 </picture>
          </div>*/}
						</div>
					</div>
				</div>

			</div>
			<div className='home-container'>
				<div className='features'>
					<h1 className='primary-heading'> With only AED 895 you'll get </h1>
					<div className='features-container'>
						{youWillGetList.map((item) => <Feature item={item}/>)}
					</div>
				</div>
				<div className='video-section'>
					<video src={video} autoPlay muted loop controls/>
				</div>
				<div className='features'>
					<h1 className='primary-heading'> How it works </h1>
					<div className='features-container'>
						{howItWorkList.map((item) => <Feature item={item}/>)}
					</div>
				</div>
				<div className='testimonials'>
					<h1 className='primary-heading'> Success seekers love Magic Touch </h1>
					<div className='testimonials-container'>
						{testimonialList.map((item) => <Testimonial item={item}/>)}
					</div>
				</div>
				<Carousel
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					{testimonialList.map((item) => <Testimonial item={item}/>)}
				</Carousel>
				<div className='booking' id="contact-form">
					<div className='left-section'>
						<div className='left-section-container'>
							<img src={BookingIcon} alt="Booking Icon"/>
							<p className='third-heading'>
								Ready to make a lasting impression and accelerate your career with a compelling video
								CV?
							</p>
							<h1 className='secondary-heading'> Book Now! </h1>
						</div>
					</div>
					<div className='right-section'>
						<div className='form-section' id="contact-form">
							<form action='' onSubmit={handleSubmit}>
								<div className="input-wrapper">
									<label for="first">FULL NAME</label>
									<input type="text" name='name' value={inputs.name || ""}
									       onChange={handleChange} placeholder='Enter you name' required/>
								</div>
								<div className="input-wrapper">
									<label for="first">EMAIL</label>
									<input type="email" name='email' value={inputs.email || ""} onChange={handleChange}
									       placeholder='Enter you Email' required/>
								</div>
								<PhoneInput
									label="PHONE NUMBER"
									placeholder="Enter phone number"
									value={phone}
									country={'ae'}
									onChange={setPhone} required/>
								<div className="input-wrapper">
									<input type='checkbox' required/>
									<span id="terms-label">I agree with <Link to='/terms'> Terms & Conditions</Link> </span>
								</div>
								<div className="input-wrapper">
									<input type='submit' value="Pay Now!" ref={submitBtn}/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='guidebook'>
					<div className='guidebook-container'>
						<div className='desc'>
							<h1 className='secondary-heading light-heading2'>
								Get your free copy of
							</h1>
							<h1 className='secondary-heading strong-heading'>
								The Visual Resume Guidebook! </h1>
							<p>
								Discover the secrets to crafting captivating video CVs that can change the game in your
								job hunt! "The Visual Resume Guidebook" is your gateway to creating resumes that
								resonate.
							</p>
							<div className='get-guidebook'>
								<form onSubmit={sendGuideBook}>
									<input type='email' placeholder='Enter your email address' className='email-input'
									       value={guideEmail}
									       onChange={(e) => setGuideEmail(e.target.value)} required/>
									<input type='submit' value="Get Free Guidebook" className='submit-button'
									       ref={submitGuidBtn}/>
								</form>
							</div>
						</div>
						<div className='avatar'>
							<img className='' src={Avatar}/>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
			<Modal show={modal} handleClose={() => setModal(!modal)}
			       children={<> <img src={TickIcon}/> <h3>Thank you</h3><p> You will be contacted to schedule an
				       appointment.</p> </>}/>

			<Modal show={guideModal} handleClose={() => setGuideModal(!guideModal)}
			       children={<> <img src={TickIcon}/> <p>Thank you for sharing your email with us. Your requested file
				       is on its way to your inbox. Please check your email shortly.</p> </>}/>
		</div>
	)
}

export default MagicTouchStudio