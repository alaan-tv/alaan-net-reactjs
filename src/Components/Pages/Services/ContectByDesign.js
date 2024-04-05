import React, {useRef, useState} from 'react'
import {ReactCompareSlider, ReactCompareSliderImage} from 'react-compare-slider';
import {Link} from "react-router-dom";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'; 
import 'react-multi-carousel/lib/styles.css';
import "./service.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Header from '../../Common-components/LightHeader'
import Footer from '../../Common-components/Footer'
import FeatureIcon1 from '../../../Assets/living-f1.svg'
import FeatureIcon2 from '../../../Assets/living-f2.svg'
import FeatureIcon3 from '../../../Assets/living-f3.svg'
import Feature1 from '../../../Assets/f1.svg'
import Feature2 from '../../../Assets/f2.svg'
import Feature3 from '../../../Assets/f3.svg'
import Feature4 from '../../../Assets/f4.svg'
import ContentLogo from '../../../Assets/CBD-white2.svg'
import CBDIcon from '../../../Assets/CBD-quiz-icon.svg'
import TickIcon from '../../Common-components/TickIcon'
import {ajax_url, formData} from "../../../custom-functions";
import Modal from '../../Common-components/Modal';
import {Feature} from "../../Common-components/Card";
import DocumentMeta from 'react-document-meta';
import Advertise from '../../Common-components/Advertise';
import AboutImage from '../../../Assets/CBDAbout.svg'
import Arrow from '../../../Assets/arrow.png'
import QuizModal from '../../Common-components/QuizModal'
import FormModal from '../../Common-components/FormModal'
import Quiz from '../../Common-components/Quiz'
import FormQuiz from '../../Common-components/FormQuiz'
const ContentByDesign = () => {
	const meta = {
		title: 'Content By Design',
		description: 'I am a description, and I can create multiple tags',
		meta: {
			charset: 'utf-8',
			name: {
				keywords: 'react,meta,document,html,tags'
			}
		}
	}

	/**
	 *
	 *  Send From Data
	 *
	 */
	const [form, setForm] = useState(false);

	const [inputs, setInputs] = useState({});
	const [quiz, setQuiz] = useState(false);
	const [phone, setPhone] = useState("971");
	const submitBtn = useRef(null);
	const handlaChangeForm = () => {
		setQuiz(!quiz);
		setForm(true);

	}
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
			method: 'Post', body: formData({...inputs, phone: phone, lp_type: 'living-by-design'})
		})
			.then(response => response.json())
			.then(data => {
				setInputs({});
				setPhone('971');
				if (data.id) {
					window.location='/our-services/LBD/thank-you';
				}
			}).catch(error => console.error(error));
	}




	const youWillGetList = [
		{
			icon: FeatureIcon1,
			title: "Branding & Design Consultation",
			desc: 'Our branding experts will work with you to craft an entirely unique design theme that tells your viewers everything they need to know about your channel at a single glance.        '
		},
		{
			icon: FeatureIcon2,
			title: "Comprehensive Shopping List",
			desc: 'Everything you need in a single document, plain & simple- to build a set that’s far from either.'
		},
		{
			icon: FeatureIcon3,
			title: "Organizational CG Render",
			desc: 'A CG render of your new set so you can: \r\n(A) Arrange everything \r\n(B) Fantasize about your future content more accurately.'
		},
	];

	const howItWorkList = [
		{
			icon: Feature1,
			title: "Application & Deposit",
			desc: "Complete our brand & style quiz, fill out our application form, & pay a 50% deposit to take the first step towards the best content you’ve made yet.      "
		},
		{
			icon: Feature2,
			title: "Consultation",
			desc: "At your selected date, a member of our team will visit your set for a 60 minute consultation to explore your vision for your studio, discuss the atmosphere of your channel, & discover how to give you exactly what you're looking for.            "
		},
		{
			icon: Feature3,
			title: "Concept & Approval",
			desc: "We deliver a concept that matches your intended energy, personality & style- once you approve we collect the rest of our design fee & start sourcing everything you need! If you’re not 100% excited by our plan, we’re happy to make adjustments so your space feels truly yours.            "
		},
		{
			icon: Feature4,
			title: 'Delivery',
			desc: "Your consultant will meet you at the property to discuss the complete list of all the furniture, furnishings, decor, & fixtures, for you to purchase that'll revolutionize your set; as well as a CG render which'll highlight how everything will fit and be arranged.            "
		},
	];


	return (
		<div className='content-page'>
			<DocumentMeta {...meta} />
			<div className='hero-section'>
				<div className='home-container'>
					<Header/>
					<div className='home-banner-container banner-service'>
						<div className='home-text-section'>
							<h1 className='primary-heading light-heading'>
								Build the Set you’ve been waiting for with</h1>
							<img className='service-logo' src={ContentLogo}/>
							<p className='primary-text light-text'>
								Your content, with a lot more of You in it.
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
					<h2 className='primary-heading'> We'll take your set to a whole other level, by giving you the 3 things you need to see it there:

					</h2>
					<div className='features-container desktop-v'>
						{youWillGetList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
					<CarouselProvider className='mobile-v'
     naturalSlideWidth={100}
     naturalSlideHeight={90}
     totalSlides={3}
    >

    <Slider>
	{youWillGetList.map((item, i) => <Slide index={i}><Feature key={i} item={item}/></Slide>)}
     
    </Slider>

    <DotGroup />
   </CarouselProvider>
				</div>
				<div className='about-section'>
					<h2 className='primary-heading'> Same great content, <br/> just unbelievably better packaged.</h2>
					<div className='about-container'>
						<div className='trainers-container'>
							<div className='trainer-image'>
								<img src={AboutImage} alt='about-image'/>
								

							</div>
							<div className='trainer-desc'>
								<p>
									First impressions matter. Visuals matter.</p> <p>Your set is the first thing that
								speaks for your channel before you do</p> <p> No matter how excellent your content is,
								if a viewer doesn't immediately think you're able to deliver it, they're not going to
								stick around long enough to find out.</p> <p> We don't want that to ever happen to
								you. </p> <p><b>It takes 7 seconds to make a first impression; we want to help you
								nail it in 1.</b></p>

							</div>
						</div>
					</div>
				</div>

				<div className='features second-features'>
					<h2 className='primary-heading'> How it works </h2>
					<div className='features-container desktop-v'>
						{howItWorkList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
					<CarouselProvider className='mobile-v'
     naturalSlideWidth={100}
     naturalSlideHeight={100}
     totalSlides={4}
    >

    <Slider>
	{howItWorkList.map((item, i) => <Slide index={i}><Feature key={i} item={item}/></Slide>)}
     
    </Slider>

    <DotGroup />
   </CarouselProvider>
				</div>

				<div className='booking' id="contact-form">
				<div className='left-section'>
				<img src={Arrow} width={90}  className='arrow-quiz arrow-desctop-v'/>
					<div className='left-section-container'>
						<img src={CBDIcon} alt="LivingIcon"/>
						<p className='third-heading'>
							The home you never <br/>knew you needed <br/>is a click away
						</p>
						<p className='third-heading'> Why wait any longer to live the way
						you were always meant to?</p>
						{/*modal quiz*/}
						<div className='cta-quiz'>
						
						<img src={Arrow} width={40}  className='arrow-quiz arrow-mobile-v'/><button className='take-quiz' onClick={() => setQuiz(true)}> <p>Get Started &<br className='mobile-breakline'/> Take The Quiz!</p> 
						</button> </div>
						<QuizModal showQuiz={quiz} handleClose={() => setQuiz(!quiz)}
						           children={<> <Quiz handleClose={handlaChangeForm}/> </>}/>
						<FormModal showForm={form} handleClose1={() => setForm(!form)}
						           children={<> <FormQuiz handleClose1={() => setForm(!form)}/> </>}/>
					</div>
				</div>
					<div className='right-section'>
						<div className='form-section' id="contact-form">
						<h4 className='form-text'> Get your free 15-minute consultation right now to start your journey towards unbelievably better content!</h4>

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
									inputProps={{pattern: ".{12,25}",}}
									specialLabel="PHONE NUMBER"
									placeholder="Enter phone number"
									value={phone}
									country={'ae'}
									onChange={setPhone}/>
								<div className="input-wrapper">
									<input type='checkbox' required/>
									<span id="terms-label">I agree with <Link
										to='/terms'> Terms & Conditions</Link> </span>
								</div>
								<div className="input-wrapper">
									<input type='submit' value="Send" ref={submitBtn}/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Advertise/>
			</div>
			<Footer/>

		</div>)
}

export default ContentByDesign