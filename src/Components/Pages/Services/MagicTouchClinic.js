import React, {useEffect, useRef, useState} from 'react'
import 'react-multi-carousel/lib/styles.css';
import "./service.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Header from '../../Common-components/LightHeader'
import Footer from '../../Common-components/Footer'
import FeatureIcon1 from '../../../Assets/feature-icon1.svg'
import FeatureIcon2 from '../../../Assets/feature-icon2.svg'
import FeatureIcon3 from '../../../Assets/feature-icon3.svg'
import FeatureIcon4 from '../../../Assets/feature-icon4.svg'
import TrainerImage from '../../../Assets/christin.webp'
import BookingIcon from '../../../Assets/book-icon.svg'
import Avatar from '../../../Assets/avatar.svg'
import Modal from "../../Common-components/Modal";
import TickIcon from "../../../Assets/tick.png";
import {ajax_url, formData, getQs} from "../../../custom-functions";

const MagicTouchClinic = () => {
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

	useEffect(() => {
		if (getQs('status') == 'captured') {
			setModal(true);
		}
	}, []);

	/**
	 *
	 *  Send From Data
	 *
	 */
	const [inputs, setInputs] = useState({});
	const [modal, setModal] = useState(false);
	const [phone, setPhone] = useState("971");
	const submitBtn = useRef(null);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		submitBtn.current.value = 'Sending...';
		fetch(ajax_url("/wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs,
				phone: phone,
				lp_type: 'clinic',
				title: 'Magic Touch Clinic - Service',
				subject: 'Magic Touch Clinic',
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
		fetch(ajax_url("/wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs, email: guideEmail, lp_type: 'guidebook', title: 'Guidebook', subject: 'Guidebook',
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




	const youWillGetList = [
		{
			icon: FeatureIcon1,
			title: 'Personal Career Boost',
			desc: 'RGet a 30-minute one on one session with our expert to supercharge your career.'
		},
		{
			icon: FeatureIcon2,
			title: 'Complete Review',
			desc: 'We\'ll make sure your digital presence such as (LinkedIn Profile) are excellent.'
		},
		{icon: FeatureIcon3, title: 'Pro Advice', desc: 'Benefit from our experts\' recommendations and tips.'},
		{
			icon: FeatureIcon4,
			title: 'Guidance Just for You',
			desc: 'We\'ll give you personalized advice for your career.'
		},
	];

	const howItWorkList = [
		{
			icon: FeatureIcon1,
			title: '1-Register and Pay',
			desc: 'Begin by registering and making the payment of AED 1,200.'
		},
		{icon: FeatureIcon2, title: '2-Submission', desc: 'Provide your CVs and LinkedIn profile.'},
		{icon: FeatureIcon3, title: '3-In-Depth Analysis', desc: 'Our experts find errors and inconsistencies.'},
		{
			icon: FeatureIcon4,
			title: '4-Clear Feedback',
			desc: 'Receive actionable advice and issue alerts.'
		}, {
			icon: FeatureIcon1,
			title: '5-Expert Consultation',
			desc: 'Our expert will contact you to book a 30-minute session to Implement recommended changes for a standout profile.'
		},
	];

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
								Transform Your Online Image with Magic Touch Clinic
							</h1>
							<p className='primary-text light-text'>
								Get Hired Faster by Showcasing Your Best Self!
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
					<h1 className='primary-heading'>
						With only AED 1,200 You'll Get
					</h1>
					<div className='features-container'>
						{youWillGetList.map((item) => <Feature item={item}/>)}
					</div>
				</div>
				<div className='trainers'>
					<h1 className='primary-heading'> Our Expert </h1>
					<div className='trainers-container'>
						<div className='trainer-image'>
							<img src={TrainerImage} alt='trainer photo'/>
							<h4>Christine Maurice</h4>
							<a href='https://www.linkedin.com/in/christine-maurice-seif'><p><LinkedInIcon/></p></a>
						</div>
						<div className='trainer-desc'>
							<p>Introducing Christine, an HR pro with 12+ years in talent acquisition and coaching. She's
								transformed careers across industries from automotive to healthcare. Christine excels at
								identifying and hiring top talent, elevating organizations.</p>
							<p>With deep industry insight, she knows what makes a standout CV and digital presence.
								Connect with her to make an unforgettable impression. Unlock your potential and your
								dream
								career with Christine!</p>
						</div>
					</div>
				</div>
				<div className='features'>
					<h1 className='primary-heading'> How it works </h1>
					<div className='features-container'>
						{howItWorkList.map((item) => <Feature item={item}/>)}
					</div>
				</div>

				<div className='booking clinic' id='contact-form'>
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
						<div className='form-section' id='contact-form'>
							<form action='' onSubmit={handleSubmit} enctype="multipart/form-data">
								<div className="input-wrapper">
									<label for="first">FULL NAME</label>
									<input type="text" name='name' value={inputs.name || ""}
									       onChange={handleChange} placeholder='Enter you name' required />
								</div>
								<div className="input-wrapper">
									<label for="first">EMAIL</label>
									<input type="email" name='email' value={inputs.email || ""} onChange={handleChange}
									       placeholder='Enter you Email' required />
								</div>
								<PhoneInput
									label="PHONE NUMBER"
									placeholder="Enter phone number"
									value={phone}
									country={'ae'}
									onChange={setPhone}/>
								<div className="input-wrapper">
									<label for="first">LINKEDIN PROFILE</label>
									<input type="text" name="linked_in" value={inputs.linked_in || ""} onChange={handleChange} placeholder='Enter you linkedin profile'/>
								</div>
								<div className="input-wrapper">
									<label for="first">UPLOUD CV</label>
									<input type="file" placeholder='Uploud your CV'/>
								</div>
								<div className="input-wrapper">
									<label><input type='checkbox' required/>
									<span>I agree with <a
										href='https://www.alaan.net/terms/'>Terms & Conditions</a> </span></label>
								</div>
								<div className="input-wrapper">
									<input type='submit' value="Pay Now!"/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='guidebook'>
					<div className='guidebook-container'>
						<div className='desc'>
							<h1 className='secondary-heading light-heading2'> Get your free copy of </h1>
							<h1 className='secondary-heading strong-heading'> The Visual Resume Guidebook! </h1>
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

export default MagicTouchClinic