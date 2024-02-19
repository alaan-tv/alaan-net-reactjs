import React, {useRef, useState} from 'react'
import 'react-multi-carousel/lib/styles.css';
import "./service.css"
import {Link} from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
import Feature5 from '../../../Assets/f5.svg'
import TrainerImage from '../../../Assets/christin4.webp'
import BookingIcon from '../../../Assets/book-icon.svg'
import Avatar from '../../../Assets/avatar.svg'
import Modal from "../../Common-components/Modal";
import TickIcon from "../../Common-components/TickIcon";
import {ajax_url, formData} from "../../../custom-functions";
import {Feature} from "../../Common-components/Card";
import DocumentMeta from 'react-document-meta';

const ProfessionalCoaching = () => {
	const meta = {
		title: 'Professional Coaching', description: 'I am a description, and I can create multiple tags', meta: {
			charset: 'utf-8', name: {
				keywords: 'react,meta,document,html,tags'
			}
		}
	}

	/**
	 *
	 *  Send From Data
	 *
	 */
	const [inputs, setInputs] = useState({});
	const [phone, setPhone] = useState("971");
	const submitBtn = useRef(null);
	const page_url = window.location.origin + window.location.pathname;

	/**
	 * Get & set input field values
	 * @param e
	 */
	const handleChange = (e) => setInputs(v => ({...v, [e.target.name ?? '']: e.target.value ?? ''}));

	/**
	 * send data to store on server
	 * @param event
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		submitBtn.current.value = 'Sending...';
		fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs, phone: phone, lp_type: 'personal-coaching', page_url: page_url,
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data.payment_link) window.location = data.payment_link;
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

	/**
	 * send data to server to send email
	 * @param event
	 */
	const sendGuideBook = (event) => {
		event.preventDefault();
		submitGuidBtn.current.value = 'Please wait...';
		fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({...inputs, email: guideEmail, lp_type: 'guidebook'}),
		})
			.then(response => response.json())
			.then(data => {
				if (data.id) {
					setGuideEmail('');
					setGuideModal(true);
				}
			}).catch(error => console.error(error));
	}

	/**
	 *
	 * Content Object
	 */
	const youWillGetList = [{
		icon: FeatureIcon1,

		desc: "6 Coaching sessions online/face-to-face            "
	}, {
		icon: FeatureIcon2,
		desc: "Discovery session to design alliance, discover values, life purpose and the leader within and much more.            "
	}, {
		icon: FeatureIcon3,
		desc: "Discover your main 5 strengths according to Clifton Strengthsfinder to reach your fulfilling career and life purpose."
	}, {
		icon: FeatureIcon4, desc: "Challenging homeworks to reach your professional and personal goals."
	}, {
		icon: FeatureIcon4, desc: "Coaching for Career transition, Leadership and Personal growth."
	},];

	const howItWorkList = [{
		icon: Feature1,
		title: "Register and Pay",
		desc: "Register, make a payment to secure your appointment, and our team will promptly confirm your booking and assist with choosing a convenient date and time."
	}, {
		icon: Feature2, title: "Sessions", desc: "Six one to one sessions. Each session is 60 minutes.             "
	}, 
	
	 {
		icon: Feature3,
		title: "Assessment/Homeworks",
		desc: "you will go through the Clifton Strengthsfinder assessment. Accountable to complete homeworks given by the Coach."
	}, {
		icon: Feature5,
		title: "Additional Coaching Sessions",
		desc: "Possibility of adding extra two to four coaching sessions on a discounted rate            "
	},];


	return (<div>
		<DocumentMeta {...meta} />
		<div className='hero-section'>
			<div className='home-container'>
				<Header/>
				<div className='home-banner-container banner-service'>
					<div className='home-text-section'>
						<h1 className='primary-heading light-heading'>
							Discover and align your life purpose with career goals. </h1>
						<p className='primary-text light-text'>
							Al Aan TV in partnership with Christine Seif proudly presents Co-active Coaching as part
							of its purpose to nurture and develop People. A transformational journey to discover
							your life purpose and align it with your professional aspirations.
						</p>
						<p className='light-text before-cta'>From purpose to profession: your path to fulfillment</p>
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
				<h2 className='primary-heading'>
					With ONLY AED 3,500 what to expect
				</h2>
				<div className='features-container'>
					{youWillGetList.map((item) => <Feature item={item}/>)}
				</div>
			</div>
			<div className='trainers-services trainers'>
				<h2 className='primary-heading'> Our Expert </h2>
				<div className='trainers-container'>
					<div className='trainer-image'>
						<img src={TrainerImage} alt='trainer'/>
						<h4>Christine Maurice</h4>
						<a href='https://www.linkedin.com/in/christine-maurice-seif'><p><LinkedInIcon/></p></a>
					</div>
					<div className='trainer-desc'>
						<p>Christine is a seasoned People and Culture leader with a proven track record of 12 years
							in talent acquisition, leadership coaching, and stakeholder support. Her expertise goes
							beyond Human Resources. Passionate about bridging the career gap, She hosts the "Career
							Fit with Christine" podcast, empowering individuals to find their dream job.</p>
						<p>Her strengths are fostering inclusion, developing talent, generating creative ideas, and
							spreading positivity. Christine holds a BSc in Engineering, a post-graduate executive
							management diploma, and a certified human resources professional from HRCI. She is in
							the process of becoming a Certified Co-Active Professional Coach.
						</p>
					</div>
				</div>
			</div>
			<div className='features'>
				<h2 className='primary-heading'> How it works </h2>
				<div className='features-container'>
					{howItWorkList.map((item) => <Feature item={item}/>)}
				</div>
			</div>
			<div className='booking clinic' id='contact-form'>
				<div className='left-section'>
					<div className='left-section-container'>
						<img src={BookingIcon} alt="Booking Icon"/>
						<p className='third-heading'>
						The Coach's mission is to support the Coachee with their own goals by self-discovering and reaching for solutions and answers from within as People are naturally Creative, Resourceful and Whole.
						</p>
						<h2 className='secondary-heading'> Book Now! </h2>
					</div>
				</div>
				<div className='right-section'>
					<div className='form-section' id='contact-form'>
						<form action='' onSubmit={handleSubmit} encType="multipart/form-data">
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
								inputProps={{pattern: ".{12,25}",}}
								specialLabel="PHONE NUMBER"
								placeholder="Enter phone number"
								value={phone}
								country={'ae'}
								onChange={setPhone}/>


							<div className="input-wrapper">
								<input name="terms" type='checkbox' required value="1" onChange={handleChange}
								       checked={(inputs.terms || '') ? "checked" : ''}/>
								<span>I agree with <Link to='/terms'> Terms & Conditions</Link> </span>
							</div>
							<div className="input-wrapper">
								<input type='submit' ref={submitBtn} value="Pay Now!"/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='guidebook'>
				<div className='guidebook-container'>
					<div className='desc'>
						<h2 className='secondary-heading light-heading2'> Get your free copy of </h2>
						<h2 className='secondary-heading strong-heading'> The Visual Resume Guidebook! </h2>
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
						<img className='' src={Avatar} alt=""/>
					</div>
				</div>
			</div>
		</div>
		<Footer/>

		<Modal show={guideModal} handleClose={() => setGuideModal(!guideModal)}
		       children={<>  <TickIcon/> <p>Thank you for sharing your email with us. Your requested file
			       is on its way to your inbox. Please check your email shortly.</p> </>}/>
	</div>)
}

export default ProfessionalCoaching