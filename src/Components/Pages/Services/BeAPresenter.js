import React, {useEffect, useRef, useState} from 'react'
import { Link } from "react-router-dom";

import 'react-multi-carousel/lib/styles.css';
import "./service.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import TrainerImage1 from '../../../Assets/Muna.svg'
import TrainerImage2 from '../../../Assets/Kareem.svg'
import TrainerImage3 from '../../../Assets/Rasha.svg'

import TrainerImage4 from '../../../Assets/Sajad.png'

import InstagramIcon from '@mui/icons-material/Instagram'
import YoutubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'

import Header from '../../Common-components/ArabicLightHeader'
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
import Feature6 from '../../../Assets/f6.svg'
import video from '../../../Assets/promo.mp4'
import TistiImage1 from '../../../Assets/testi-image1.svg'
import TistiImage2 from '../../../Assets/testi-image2.svg'
import TistiImage3 from '../../../Assets/testi-image3.svg'
import BookingIcon from '../../../Assets/booking2.svg'
import Avatar from '../../../Assets/avatar.svg'
import TickIcon from '../../../Assets/tick.png'
import {ajax_url, formData, getQs} from "../../../custom-functions";
import Modal from '../../Common-components/Modal';
import ArabicAdvertise from '../../Common-components/ArabicAdvertise';

const BeAPresenter = () => {
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
		fetch(ajax_url("/wp-api/v2/alaan-net/store-form-data.php"), {
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
		fetch(ajax_url("/wp-api/v2/alaan-net/store-form-data.php"), {
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
			title: "جلسة تدريبية مكثفة",
			desc: "أنت على موعد مع جلسة تدريبية وأخرى تطبيقية لمدة ساعتين أو أكثر، مع نخبة من الإعلاميين والخبراء المتمرسين في تدريب المواهب الناشئة للقيام بأفضل أداء أمام الكاميرا. "
		},
		{
			icon: Feature2,
			title: "جولة في قسم الأخبار ",
			desc: "ابدأ يومك بجولة تعريفية تتنقل خلالها بين غرف الأخبار والاستوديوهات تارة، وبين أقسام المونتاج ومواقع التواصل الاجتماعي تارة أخرى.            "
		},
		{
			icon: Feature3,
			title: "تأنّق وتألّق            ",
			desc: "أوبرا وينفري ليست أفضل منك! دع خبيرة التجميل والماكياج والمظهر الإعلامي تتولى مهمة العناية بشعرك ولبسك ووجهك لتكون متألقاً بأمثل إطلالة إعلامية لك أمام الكاميرا.            "
		},
		{
			icon: Feature4,
			title: 'جلسة تصويرية            ',
			desc: "تمتع بجلسة تصوير احترافية توثق أبرز اللحظات خلال هذا اليوم من خلال باقة من الصور الفوتوغرافية المتقنة.            "
		},
        {
			icon: Feature5,
			title: "تدريب مسجل            ",
			desc: "    سيكون تدريبك موثقاً بفيديو يتم نشره على صفحات التواصل الاجتماعي الخاصة بـ  الآن "
		},
		{
			icon: Feature6,
			title: 'فقرة تلفزيونية خاصة           ',
			desc: "سيتم تصوير حلقة خاصة بك وحدك، ليتم بثها على التلفزيون ونشرها فوراً على منصات التواصل الاجتماعي وموقعنا الإلكتروني.            "
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
						<img className='testi-image' src={item.image} alt="customer photo"/>
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
    const trainerList = [
		{
			image: TrainerImage1,
			name: " منى عواد ",
			social: [
				{icon: <InstagramIcon/>, link: "https://www.instagram.com/muna_awwad_/"},
				{icon: <TwitterIcon/>, link: "https://twitter.com/munaawwad"},
			],
			desc: "      إعلامية و مذيعة اخبار"
		},
        {
			image: TrainerImage2,
			name: "  كريم كوكب ",
			social: [
				{icon: <InstagramIcon/>, link: "https://www.instagram.com/karimkawkab/"},
				{icon: <TwitterIcon/>, link: "https://twitter.com/karimkawkabb"},
			],
			desc: "     منتج في القسم الاستقصائي "
		},
		{
			image: TrainerImage3,
			name: " رشا مقران ",
			social: [
				{icon: <InstagramIcon/>, link: "https://www.instagram.com/rachamokrane/"},
				
			],
			desc: "  مذيعة نشرات اخبارية ومنتجة أخبار            "
		},
        {
			image: TrainerImage4,
			name: " سجد الجبوري ",
			social: [
				{icon: <InstagramIcon/>, link: "https://www.instagram.com/sjdaljubory/"},
				{icon: <TwitterIcon/>, link: "https://twitter.com/sjd_aljubori"},
			],
			desc: " مذيعة أخبار ومقدمة برامج سياسية   "
		},
	];

	const Trainer = ({item}) => {
		return (
			<div className='trainers-container'>
				<div className='trainer-image'>
					<img src={item.image} alt='trainer photo'/>
					<h4>{item.name}</h4>
					{item.social && <div className='social-icon'>{item.social.map(s => <a
						href={s.link}><span>{s.icon}</span></a>)}</div>}
				</div>
				<div className='trainer-desc'>
					<p>{item.desc}</p>
				</div>
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
								يوم مع الآن يجعلك نجم الإعلام
							</h1>
							<p className='primary-text light-text'>
                            ما رأيك لو أعطيناك فرصة إعداد وتقديم فقرة إخبارية بنفسك ضمن نشرة حقيقية يراها المشاهدون من كافة أنحاء العالم؟ فرصة العمر قد لا تأتي إلا مرة واحدة في العمر! لذا، اضمن مستقبلك الإعلامي.. بيوم واحد استثنائي، مع الآن
                            </p>
							<a className='service-cta primary-button' href="#contact-form">احجز الآن</a>
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
			<div className='home-container arabic-service'>
				<div className='features'>
					<h1 className='primary-heading'> 
                    مقابل 9,500 درهم فقط ، إليك ما ستحصل عليه  في هذا اليوم

                     </h1>
					<div className='features-container'>
                    {howItWorkList.map((item) => <Feature item={item}/>)}
					</div>
				</div>
				<div className='video-section'>
					<video src="https://cdn.alaan.tv/2023/08/10/20230810-1691665028311-original.mp4" autoPlay muted loop controls/>
				</div>
				
				<div className='trainers workshops-trainers '>
					<h1 className='primary-heading'>
						المدربين
					</h1>
					<p className='secondary-text'>نقدم لطلابنا مهارات متنوعة من خبراء لديهم الكثير من المعرفة التي تبحث
						عنها لتميز نفسك</p>
					<div className='trainers-presenter'>
						{trainerList.map((item) => <Trainer item={item}/>)}
					</div>
				</div>
				
				<div className='booking workshops-booking' id="contact-form">
					<div className='left-section'>
						<div className='left-section-container'>
							<img src={BookingIcon} alt="Booking Icon"/>
							<p className='third-heading'>
								هل أنت مستعد لإظهار مهاراتك أمام الجمهور؟
							</p>
							<p className='third-heading'>
                            سجّل الآن ليرتقي مستقبلك مع
الآن مقابل 9,500 درهم							</p>
							<h1 className='secondary-heading'>
								احجز مقعدك الآن !
							</h1>
						</div>
					</div>
					<div className='right-section'>
						<div className='form-section' id="contact-form">
							<form action='' onSubmit={handleSubmit}>
								<div className="input-wrapper">
									<label for="first"> الاسم الكامل</label>
									<input type="text" name='name' value={inputs.name || ""}
									       onChange={handleChange} placeholder='أدخل اسمك الكامل ' required/>
								</div>
								<div className="input-wrapper">
									<label for="first">البريد الالكتروني</label>
									<input type="email" name='email' value={inputs.email || ""} onChange={handleChange}
									       placeholder='أدخل عنوان بريدك الالكتروني' required/>
								</div>
								<PhoneInput
                                specialLabel="رقم الهاتف"
									placeholder="Enter phone number"
									value={phone}
									country={'ae'}
									onChange={setPhone}/>
                                    <div className="input-wrapper">
									<label for="first">كود الخصم </label>
									<input type="text" name='code'  onChange={handleChange}
									       placeholder='أدخل كود الخصم ' required/>
								</div>
								<div className="input-wrapper">
									<input type='checkbox' required/>
										<span>أنا أوافق على   
                                            <Link to='/terms'> الشروط و الأحكام </Link> </span>
								</div>
								<div className="input-wrapper">
									<input type='submit' ref={submitBtn} value="متابعة"/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<ArabicAdvertise />
			</div>
            
			<Footer/>
        
			<Modal show={modal} handleClose={() => setModal(!modal)}
			       children={<> <img src={TickIcon}/> <h3>Thank you</h3><p> You will be contacted to schedule an
				       appointment.</p> </>}/>

			<Modal show={guideModal} handleClose={() => setGuideModal(!guideModal)}
			       children={<> <img src={TickIcon}/> <p>Thank you for sharing your email with us. Your requested file
				       is on its way to your inbox. Please check your email shortly.</p> </>}/>
		</div>  )
}

export default BeAPresenter