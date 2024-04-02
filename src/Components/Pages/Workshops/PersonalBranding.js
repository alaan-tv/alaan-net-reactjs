import React, {useRef, useState} from 'react'
import 'react-multi-carousel/lib/styles.css';
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
import TrainerImage from '../../../Assets/solang.svg'
import BookingIcon from '../../../Assets/book-icon.svg'
import {ajax_url, formData} from "../../../custom-functions";
import Advertise from '../../Common-components/Advertise';
import DocumentMeta from 'react-document-meta';
import {Feature} from "../../Common-components/Card";
import video from '../../../Assets/personal-branding.mp4'

const PersonalBranding = () => {
	const meta = {
		title: 'Personal Branding Workshop',
		description: 'I am a description, and I can create multiple tags',
		meta: {
			charset: 'utf-8',
			name: {
				keywords: 'react,meta,document,html,tags'
			}
		}
	}

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
				...inputs, phone: phone, lp_type: 'personal-branding-workshop', page_url: page_url,
			}),
		})
			.then(response => response.json())
			.then(data => {
				if (data.payment_link) window.location = data.payment_link;
			}).catch(error => console.error(error));

	}
	/**
	 * Content Object
	 */
	const youWillGetList = [
		{
			icon: FeatureIcon1,
			title: "Craft a brief",
			desc: "impactful three-minute presentation for introducing yourself professionally to potential employers or in various social settings."
		},
		{
			icon: FeatureIcon2,
			title: "Help you to",
			desc: "Identify and Articulate what differentiates you from the rest"
		},
		{
			icon: FeatureIcon3,
			title: "Learn",
			desc: "Etiquette & Protocol and how to apply the right behaviour in different situations."
		},
		{
			icon: FeatureIcon4,
			title: "Focus on your online presence and understand its impact to establish a strong online identity",
			desc: "your digital footprint."
		},
	];

	const howItWorkList = [
		{
			icon: Feature1,
			title: "Register and Pay",
			desc: "Register, make a payment to secure your appointment, and our team will promptly confirm your booking and assist with choosing a convenient date and time.            "
		},
		{
			icon: Feature2,
			title: "Duration            ",
			desc: "3-hour session online for 2 days             "
		},
		{
			icon: Feature3,
			title: "Public",
			desc: "Group workshop"
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
								Deadly Mistakes and Golden Opportunities for Your Personal Brand
							</h1>
							<p className='primary-text light-text'>
								In an era where people’s attention spans are getting shorter by the minute, the need to
								make an impression is more important than ever. And the best way to do this is by
								creating a solid and memorable brand identity.
								<br/><b>BOOK THIS SESSION TODAY TO STAND OUT FROM THE CROW</b>

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
						With ONLY AED 1895 you will get

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
				<Advertise/>
			</div>
			<Footer/>

		</div>
	)
}

export default PersonalBranding