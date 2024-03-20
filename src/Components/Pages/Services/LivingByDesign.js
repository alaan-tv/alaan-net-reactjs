import React, {Fragment, useRef, useState} from 'react'
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
import LivingLogo from '../../../Assets/LBD-white2.svg'
import TickIcon from '../../Common-components/TickIcon'
import {ajax_url, formData} from "../../../custom-functions";
import Modal from '../../Common-components/Modal';
import {Feature} from "../../Common-components/Card";
import DocumentMeta from 'react-document-meta';
import Advertise from '../../Common-components/Advertise';
import BeforeLiving from '../../../Assets/before living.png';
import AfterLiving from '../../../Assets/after living.png';
import LivingIcon from '../../../Assets/living-by-design-icon-orginal.svg';
import QuizModal from '../../Common-components/QuizModal'
import FormModal from '../../Common-components/FormModal'
import Quiz from '../../Common-components/Quiz'
import FormQuiz from '../../Common-components/FormQuiz'
import Arrow from '../../../Assets/arrow.png'
const LivingByDesign = () => {
	const meta = {
		title: 'Living By Design',
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
			title: "Bespoke Consultation",
			desc: 'We prioritize understanding who you are, so we can use design to give you everything that you need.',
			plus: '+'
		},
		{
			icon: FeatureIcon2,
			title: "Tailored Shopping List",
			desc: 'We meticulously plan & select every single thing your space needs to become its best self- all you need to do is pay for them.',
			plus: '+'
		},
		{
			icon: FeatureIcon3,
			title: "Top-View Floor Plan",
			desc: 'A floor-plan of your space with all of the furniture selected, so you know exactly how to arrange everything- no experimenting required.',
			plus: '+'
		},
	];

	const howItWorkList = [
		{
			icon: Feature1,
			title: "Application & Deposit",
			desc: "Complete our style quiz, fill out our application form, & pay a 50% deposit to start your journey towards better living!            "
		},
		{
			icon: Feature2,
			title: "Consultation",
			desc: "At your selected date, a member of our team will meet you at the property for a 60 min consultation to explore your vision for the space & discover how to give you exactly what you're looking for!            "
		},
		{
			icon: Feature3,
			title: "Concept & Approval",
			desc: "We deliver a concept that matches your intended energy, personality & style- once you approve we collect the rest of our design fee & start sourcing everything you need! If you’re not 100% excited by our plan, we’re happy to make adjustments so your space feels truly yours.            "
		},
		{
			icon: Feature4,
			title: 'Delivery            ',
			desc: "Your consultant will meet you at the property to discuss the complete list of all the furniture, furnishings, decor, & fixtures, for you to purchase that'll transform your space; as well as a top-view floor plan which'll highlight how everything will fit and be arranged!"
		},
	];
	

	return (
		<div className='living-page'>
			<DocumentMeta {...meta} />
			<div className='hero-section'>
				<div className='home-container'>
					<Header/>
					<div className='home-banner-container banner-service'>
						<div className='home-text-section'>
							<h1 className='primary-heading light-heading'>
								Build the Home you’ve been waiting for with
							</h1>
							<img className='service-logo' src={LivingLogo} alt={''}/>
							<p className='primary-text light-text'>
								Rediscover Living Through the
								Stories that Make You Feel Alive.


							</p>
							<a className='service-cta primary-button living-cta' href="#contact-form">Book Now!</a>
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
					<h2 className='primary-heading'> Everything you need to transform
your space, in 3 simple steps:
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
					<h2 className='primary-heading'> Live better, faster.</h2>
					<div className='about-container'>
						<div className='trainers-container'>
							<div className='trainer-image'>
								{ /*<img src={AboutImage} alt='about-image'/> */}
								<ReactCompareSlider changePositionOnHover={true} keyboardIncrement="5"
								                    transition='.5s ease-in-out'
								                    itemOne={<ReactCompareSliderImage src={BeforeLiving}
								                                                      srcSet={BeforeLiving}
								                                                      alt="Image one"/>}
								                    itemTwo={<ReactCompareSliderImage src={AfterLiving}
								                                                      srcSet={AfterLiving}
								                                                      alt="Image two"/>}
								/>
								<div className='before-state'> Before</div>
								<div className='after-state'> After</div>
							</div>
							<div className='trainer-desc'>
								<p>Things change, people change, rooms change.</p><p> While we can’t do much about the
								first two, we can make sure your rooms only change for the better.</p> <p>There were
								reasons why you couldn’t design your space how you wanted the first time around- 
								Now there’s no reason to choose not to.
								</p>

							</div>
						</div>

					</div>
				</div>
			</div>
			<div className='features second-features'>
				<h2 className='primary-heading'> How it works </h2>
				<div className='features-container desktop-v' >
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
					<div className='left-section-container'>
						<img src={LivingIcon} alt="LivingIcon"/>
						<p className='third-heading'>
							The home you never knew you needed is a click away
						</p>
						<p className='third-heading'> Why wait any longer to live the way
							you were always meant to?</p>
						{/*modal quiz*/}
						<div className='cta-quiz'>
						<img src={Arrow} width={50} />
						<button className='take-quiz' onClick={() => setQuiz(true)}> <p>Get Started & Take The Quiz!</p> 
						</button> </div>
						<QuizModal showQuiz={quiz} handleClose={() => setQuiz(!quiz)}
						           children={<> <Quiz handleClose={handlaChangeForm}/> </>}/>
						<FormModal showForm={form} handleClose1={() => setForm(!form)}
						           children={<> <FormQuiz handleClose1={() => setForm(!form)}/> </>}/>
					</div>
				</div>
				<div className='right-section'>
					<div className='form-section' id="contact-form">
						<h4 className='form-text'> Get your free 15-minute consultation right now to start your journey towards unbelievable living!</h4>
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
									to='/lbd-terms'> Terms & Conditions</Link> </span>
							</div>
							<div className="input-wrapper">
								<input type='submit' value="Send" ref={submitBtn}/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Advertise/>

			<Footer/>

		</div>)
}

export default LivingByDesign