import React, {useEffect, useRef, useState} from 'react'
import { Link } from "react-router-dom";

import './workshop.css'
import Header from '../../Common-components/ArabicHeader'
import WorkshopImage from '../../../Assets/podcast-hero-image.webp'
import EventIcon from '@mui/icons-material/Event'
import WorkshopFeatureImageIcon from '../../../Assets/workshop-feature-image.svg'
import video from '../../../Assets/podcast-video.mp4'
import TrainerImage1 from '../../../Assets/Mohammad-ali.webp'
import TrainerImage2 from '../../../Assets/maha.webp'
import InstagramIcon from '@mui/icons-material/Instagram'
import YoutubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'


import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import BookingIcon from '../../../Assets/booking2.svg'
import Footer from '../../Common-components/ArabicFooter'
import Advertise from '../../Common-components/ArabicAdvertise'
import {ajax_url, formData, getQs} from "../../../custom-functions";
import TickIcon from "../../../Assets/tick.png";
import Modal from "../../Common-components/Modal";


const Podcast = () => {
	const [value, setValue] = useState();


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
		fetch(ajax_url("/wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs,
				phone: phone,
				lp_type: 'podcast-workshop',
				title: 'Podcast Workshop - Service',
				email_subject: 'Podcast Workshop',
				page_url: window.location.origin + window.location.pathname,
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data.id) {
					setInputs({});
					window.location = data.payment_link;
				}
			}).catch(error => console.error(error));

	}


	const youWillGetList = [
		{desc: 'فهم أهمية وطريقة تصميم الهوية البصرية، وتصميم غلاف البودكاست والحلقات'},
		{desc: 'تحرير وتحسين جودة الصوت وتعزيز السرد القصصي من خلال التصميم الصوتي، مع تجربة عملية.'},
		{desc: 'تطوير القدرة على التخطيط وكتابة وهيكلة حلقات بودكاست ممتعة.'},
		{desc: 'القدرة على تسجيل الصوت، وإجراء المقابلات، وسرد المحتوى بفعالية.'},
		{desc: 'القدرة على فهم مشهد العام لصناعة البودكاست والاستقرار على تخصصك الفريد.'},
	];

	const howItWorkList = [
		{subtitle: "اليوم الأول", desc: " فهم أساسيات البودكاست، وتحديد جمهورك المستهدف، وصياغة مفاهيم ممتعة."},
		{subtitle: "اليوم الثاني", desc: ' تطوير نصوص منهجية، واحترافية السرد القصصي، وصنع حلقات ممتعة.'},
		{subtitle: "اليوم الثالث", desc: ' تعلم التسجيل المحترف والتحرير الدقيق لإنتاج صوت عالي الجودة.'},
		{
			subtitle: "اليوم الرابع",
			desc: ' اكتساب مهارات ما بعد الإنتاج وتعلم استراتيجيات إطلاق حملات فعّالة، واستكشاف فرص تحقيق الربح!'
		},
	];

	const Feature = ({item}) => {
		return (
			<div className='feature'>
				{item.icon && <img src={item.icon} alt="Feature Icon" className='feature-icon'/>}
				{item.title && <p className='feature-heading'>{item.title}</p>}
				{item.desc &&
					<p className='feature-desc third-text'> {item.subtitle && <b>{item.subtitle}:</b>} {item.desc}</p>}
			</div>
		);
	}

	const trainerList = [
		{
			image: TrainerImage1,
			name: " محمد علي",
			social: [
				{icon: <InstagramIcon/>, link: "https://www.instagram.com/moalivoice/"},
				{icon: <YoutubeIcon/>, link: "https://www.youtube.com/@moalivoice"},
			],
			desc: "مدير المنتجات الصوتية Audio Products Manager في راديو وتلفزيون الآن، يقدم بودكاست \"البودكاست المفضل\" ، مصري الجنسية، ولد في مصر ونشأ في الإمارات. محمد مهندس ومعلق ومدرب صوتي محترف، قرر بعد سنوات من العمل كمهندس برمجيات أن يترك الهندسة ويتبع شغفه في التعليق والتدريب الصوتي وصناعة المحتوى، فترك وظيفته الحكومية وانضم إلى فريق الآن في بداية عام 2022. قام بتدريب أكثر من 800 شخص من بينهم إعلاميين حاليين ، مقدمي بودكاست ومذيعين، صانعي محتوى ومعلقين صوتيين وعمل مع العديد من كبرى الشركات والعلامات التجارية و المؤسسات الحكومية و مراكز التدريب الإعلامي."
		},
		{
			image: TrainerImage2,
			name: "مها فطوم",
			social: [
				{icon: <InstagramIcon/>, link: "https://www.instagram.com/maha.fattoum/"},
				{icon: <TwitterIcon/>, link: "https://twitter.com/mahafattoum"},
			],
			desc: "صحفية ومقدمة برامج حاصلة على بكالوريوس في الصحافة والإعلام من جامعة دمشق انضمت لفريق العمل في تلفزيون الآن عام 2018 قدمت العديد من البرامج الإذاعية المباشرة أبرزها برنامج \"ساعة عالهوا\" كما تعد وتقدم برامج اجتماعية منها: بودكاست صارت معي - البرنامج التلفزيوني \"أنا موجود\" وشاركت في تقديم البرامج التلفزيوني المباشر \"تلي تيرابي. لديها اهتمام بالتعرف على تجارب الناس في شتى نواحي الحياة بمختلف جنسياتهم وخلفياتهم الثقافية والاجتماعية وتقديمها كقصص إيماناً منها بأن للقصة أثراً كبيراً في تغيير طريقة تفكيرنا نحو الأفضل وجعلنا منفتحين على الآخرين وقادرين على التضامن والتعاطف معهم."
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
			<div className='home-container'>
				<Header/>
				<div className="home-banner-container">
					<div className='hero-workshop-section podcast-hero'>
						<div className='hero-text'>
							<h1 className='light-heading podcast-heading'>أطلق العنان لصوتك! </h1>
							<p> طور مهاراتك في مجال البودكاست الذي سيترك بصمتك</p>
							<p>اكتشف وطور وأطلق البودكاست الخاص بك مع ورش عمل بودكاست أخبار الآن!</p>
							<div className='workshop-date'><EventIcon/> <p>تاريخ الورشة: 4-6 ديسمبر </p></div>
							<button className='cta-button'>احجز الآن</button>
						</div>
						<div className='workshop-image'>
							<img src={WorkshopImage}/>
						</div>
					</div>
				</div>
				<div className='workshop-details-section'>
					<div className='workshop-intro'>
						<h1 className='third-heading'>
							هل تفكر في بدء بودكاست خاص بك ولكنك لست متأكداً من أين تبدأ؟ أو كيف تصل إلى جمهورك؟ أو حتى
							كيف تستطيع إنشاء محتوى يتردد صداه ويتفاعل مع المستمعين؟ لا تقلق، فلست الوحيد!
						</h1>
						<p>لهذا السبب قمنا بتصميم ورشة عمل مكثفة لمدة 4 أيام لتحويل محبي البودكاست إلى مبدعين! نحن هنا
							لنزودك بالمعرفة، والمهارات، والثقة التي تحتاجها لاكتشاف تخصصك، وصياغة محتوى رائع له، وإطلاق
							البودكاست الخاص بك بنجاح!
						</p>
					</div>
					<div className='workshop-features-section'>
						<h1 className='light-heading'>بنهاية هذه الورشة ستكون قادرًا على
						</h1>
						<div className='features features-wrap'>
							{youWillGetList.map((item) => <Feature item={item}/>)}
						</div>
					</div>
				</div>
				<div className='video-section'>
					<video height={480} style={{background: '#000'}} src={video} muted loop controls/>
				</div>
				<div className='workshop-features-section'>
					<h1 className='light-heading'>
						مقابل 4,000 درهم فقط ، إليك ما ستتعلمه في أيام الورشة
					</h1>
					<div className='features'>
						{howItWorkList.map((item) => <Feature item={item}/>)}
					</div>
				</div>
				<div className='trainers workshops-trainers'>
					<h1 className='primary-heading'>
						المدربين
					</h1>
					<p className='secondary-text'>نقدم لطلابنا مهارات متنوعة من خبراء لديهم الكثير من المعرفة التي تبحث
						عنها لتميز نفسك</p>
					<div className=''>
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
								كن معنا من 4 إلى 6 ديسمبر 2023 لمدة ثلاث أيام
								(4 ساعات في اليوم) مقابل 3,500 درهم إماراتي فقط
							</p>
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
									       onChange={handleChange} placeholder='أدخل اسمك الكامل' required/>
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
									<input type='checkbox' required/>
									<span>أنا أوافق على   <Link to='/terms'> الشروط و الأحكام </Link> </span>
								</div>
								<div className="input-wrapper">
									<input type='submit' ref={submitBtn} value="متابعة"/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Advertise/>
			</div>
			<Footer/>
			<Modal show={modal} handleClose={() => setModal(!modal)}
			       children={<> <img src={TickIcon}/> <h3>شكرا لك</h3><p> سوف يتم التواصل معك لتحديد الموعد</p> </>}/>
		</div>
	)
}

export default Podcast


