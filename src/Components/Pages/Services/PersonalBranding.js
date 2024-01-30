import React, {useEffect, useRef, useState} from 'react'
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
import TrainerImage from '../../../Assets/solang.svg'
import BookingIcon from '../../../Assets/book-icon.svg'
import Modal from "../../Common-components/Modal";
import TickIcon from "../../Common-components/TickIcon";
import {ajax_url, formData, getQs} from "../../../custom-functions";
import Advertise from '../../Common-components/Advertise';
import DocumentMeta from 'react-document-meta';
import {Feature} from "../../Common-components/Card";
import video from '../../../Assets/personal-branding.mp4'

const PersonalBranding = () => {
	const meta = {
		title: 'Personal Branding',
		description: 'I am a description, and I can create multiple tags',
		meta: {
			charset: 'utf-8',
			name: {
				keywords: 'react,meta,document,html,tags'
			}
		}
	}

	const [inputs, setInputs] = useState({});
	const [modal, setModal] = useState(false);
	const [phone, setPhone] = useState("971");
	const submitBtn = useRef(null);

	const handleChange = (event) => {
		const name = event.target.name ?? '';
		const value = event.target.value ?? '';
		setInputs(values => ({...values, [name]: value}))
	}

	useEffect(() => {
		if (getQs('status') === 'captured') {
			setModal(true);
			window.history.pushState({}, document.title, window.location.pathname);
		}
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		submitBtn.current.value = 'Sending...';
		fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs,
				phone: phone,
				lp_type: 'personal-branding',
				page_url: window.location.origin + window.location.pathname,
			})
		})
			.then(response => response.json())
			.then(data => {
				setInputs({});
				setPhone('971');
				if (data.id) {
					window.location = data.payment_link;
				}else if (data.payment=='captured') {
					setModal(true);
				}
			}).catch(error => console.error(error));

	}
	/**
	 * Content Object
	 */
	const youWillGetList = [
		{
			icon: FeatureIcon1,
			desc: "Develop a clear understanding on how your personal brand aligns with your leadership style and organizational goals."
		},
		{
			icon: FeatureIcon2,
			desc: "Communicate your personal brand effectively through various channels, including in-person interactions, presentations / public speaking and digital platforms."
		},
		{
			icon: FeatureIcon3,
			desc: "How to build a powerful LinkedIn profile that stands out in a saturated online pace"
		},
		{
			icon: FeatureIcon4,
			desc: "Build thought leadership with the top 5 trends for the last quarter of 2023"
		},
	];

	const howItWorkList = [
		{
			icon: Feature1,
			title: "Register and Pay",
			desc: "Register, make a payment to secure your appointment, and our team will promptly confirm your booking and assist with choosing a convenient date and time."
		},
		{
			icon: Feature2,
			title: "Session",
			desc: "A one-on-one session lasting 3 hours, conducted over two consecutive days"
		},
		{
			icon: Feature3,
			title: "Camera Test",
			desc: "Get a camera test afront of the camera and practice how to answer critical questions"
		},
		{
			icon: Feature4,
			title: "Presentation",
			desc: "A concluding presentation that guides you through various steps to effectively execute your personal branding journey."
		},
	];


	return (
		<div>
			<DocumentMeta {...meta} />
			<div className='hero-section'>
				<div className='home-container'>
					<Header/>
					<div className='home-banner-container banner-service'>
						<div className='home-text-section'>
							<h1 className='primary-heading light-heading'>
								Exclusive Personal Branding Workshop
								for Executives
							</h1>
							<p className='primary-text light-text'>
								Al Aan Tv, in partnership with Solange El Rassi, proudly
								presents a session on Personal Branding for Leaders:
								Unlocking your authentic executive influence, as part of our
								Personal Branding sessions
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
					<h2 className='primary-heading'>
						With ONLY AED 4,995 what to expect
					</h2>
					<div className='features-container'>
						{youWillGetList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
				</div>
				<div className='video-section'>
					<video height={480} style={{background: '#000'}} src={video} muted loop controls/>
				</div>
				<div className='trainers-services trainers'>
					<h2 className='primary-heading'> Our Expert </h2>
					<div className='trainers-container'>
						<div className='trainer-image'>
							<img src={TrainerImage} alt='trainer'/>
							<h4>Solange El Rassi</h4>
							<a href='https://www.linkedin.com/in/solangeelrassi/'><p><LinkedInIcon/></p></a>
						</div>
						<div className='trainer-desc'>
							<p>Solange El Rassi, an experienced Career Success Coach and media expert, guides executives
								in personal branding and career advancement. She emphasizes storytelling in digital
								spaces and has a 17-year background in media, including television. Involved in
								corporate social responsibility and youth empowerment, Solange holds a master's in media
								and advises top Middle Eastern brands. She is committed to creating impactful narratives
								and driving positive change.</p>

						</div>
					</div>
				</div>
				<div className='features'>
					<h2 className='primary-heading'> How it works </h2>
					<div className='features-container'>
						{howItWorkList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
				</div>

				<div className='booking clinic' id='contact-form'>
					<div className='left-section'>
						<div className='left-section-container'>
							<img src={BookingIcon} alt="Booking Icon"/>
							<p className='third-heading'>
								Unlocking your authentic executive influence
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
									<input name="terms" type='checkbox' required value="1" onChange={handleChange} checked={ (inputs.terms || '') ? "checked" : '' }  />
									<span>I agree with <Link to='/terms'> Terms & Conditions</Link> </span>
								</div>
								<div className="input-wrapper">
									<input type='submit' ref={submitBtn} value="Pay Now!"/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Advertise/>
			</div>
			<Footer/>
			<Modal show={modal} handleClose={() => setModal(!modal)}
			       children={<>  <TickIcon /> <h3>Thank you</h3><p> You will be contacted to schedule an
				       appointment.</p> </>}/>
		</div>
	)
}

export default PersonalBranding