import React, {useEffect, useRef, useState} from 'react'
import './workshop.css'
import Header from '../../Common-components/ArabicHeader'
import WorkshopImage from '../../../Assets/podcast-image.png'
import EventIcon from '@mui/icons-material/Event'
import WorkshopFeatureImageIcon from '../../../Assets/workshop-feature-image.svg'
import video from '../../../Assets/promo.mp4'
import TrainerImage from '../../../Assets/rania.webp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import BookingIcon from '../../../Assets/booking2.svg'
import Footer from '../../Common-components/ArabicFooter'
import Advertise from '../../Common-components/ArabicAdvertise'
import {ajax_url, formData, getQs} from "../../../custom-functions";
import TickIcon from "../../../Assets/tick.png";
import Modal from "../../Common-components/Modal";

const Media = () => {
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
				lp_type: 'media-workshop',
				title: 'Media Workshop - Service',
				email_subject: 'Media Workshop',
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
		{
			icon: WorkshopFeatureImageIcon,
			title:"التدريب المرن",
			desc: "دوراتنا التدريبية تتوافق مع نمط حياتك المهنية و الدراسية. دوراتنا الحضورية أو عبر الإنترنت مخصصة لتتلاءم مع جدولك الزمني."
		},{
			icon: WorkshopFeatureImageIcon,
			title:"الخبرة الإعلامية",
			desc: "استفد من تجارب التغطية الميدانية و حكاياتها بينما يقودك صحفيون ذوو خبرة من تلفزيون الآن في رحلتك."
		},{
			icon: WorkshopFeatureImageIcon,
			title:"الشهادة",
			desc: "احصل على شهادة معتمدة من KDHA وهي أكثر من مجرد شهادة ورقية؛ إنها هويتك المهنية الجديدة."
		},

	];

	const howItWorkList = [
		{desc: " تدرب على أهمّ أسس تقديم الأخبار والبرامج التلفزيونية"},
		{desc: "ورشة عمل تدريبية اونلاين لمدة 3 أيام"},
		{desc: "شهادة معتمدة من أكاديمية الآن"},
		{desc: " ملحقات إعلامية للتدريب"},
		{desc: " فيديو مسجل للمتدرب"},

	];

	const Feature = ({item}) => {
		return (
			<div className='feature'>
				{item.icon && <img src={item.icon} alt="Feature Icon" className='feature-icon'/>}
				{item.title && <p className='feature-heading'>{item.title}</p>}
				{item.desc &&
					<p className='feature-desc third-text'> {item.subtitle && <b>{item.subtitle}</b>} {item.desc}</p>}
			</div>
		);
	}

	return (
		<div>
			<div className='home-container'>
				<Header/>
				<div className="home-banner-container">
					<div className='hero-workshop-section'>
						<div className='hero-text'>
							<h1 className='light-heading'>هل ترغب بتطوير مسيرتك الإعلامية وصقل موهبتك؟ </h1>
							<p>ورشة تدريب إعلامية تساعدك على صقل موهبتك وتطوير مهارتك في عالم الإعلام والميديا
								الحديثة.</p>
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
							تقدم الأكاديمية نهجًا إعلاميًا متطورًا من خلال ورش عمل في مجال الإعلام، حيث يتم توفير تدريب
							نظري وعملي متكامل.
						</h1>
						<p>نحن نقدم فرصة للصحافيين والإعلاميين للاستفادة من خبراتنا المهنية التي استغرق بناؤها سنوات
							عديدة في مجال الأخبار والإعلام. تم تصميم ورش العمل بعناية فائقة من قبل خبراء في هذا المجال
							لتوفير التدريب المثلى لكافة الأشخاص الذين يسعون إلى استكشاف عالم الإعلام ودخوله. انضم إلى
							فرقنا وسوف تحظى بفرصة رائعة لتطوير مهاراتك في هذا المجال المثير وتحقيق نجاح كبير.</p>
					</div>
					<div className='workshop-features'>
						<h1 className='light-heading'>ماذا سوف تستفيد من ورشات العمل الإعلامية معنا؟</h1>
						<div className='features'>
							{youWillGetList.map((item) => <Feature item={item}/>)}
						</div>
					</div>
				</div>
				<div className='video-section'>
					<video src={video} autoPlay muted loop controls/>
				</div>
				<div className='workshop-features-section'>§
					<h1 className='light-heading'>
						مقابل 3,500 درهم فقط،
						سوف تحصل على التالي: </h1>
					<div className='features'>
						{howItWorkList.map((item) => <Feature item={item}/>)}
					</div>
				</div>
				<div className='trainers workshops-trainers'>
					<h1 className='primary-heading'> المدربين </h1>
					<p className='secondary-text'>نقدم لطلابنا مهارات متنوعة من خبراء لديهم الكثير من المعرفة التي تبحث
						عنها لتميز نفسك</p>
					<div className='trainers-container'>
						<div className='trainer-image'>
							<img src={TrainerImage} alt='trainer photo'/>
							<h4>رانيا صياح</h4>
							<a href='https://www.linkedin.com/in/christine-maurice-seif'><p><LinkedInIcon/></p></a>
						</div>
						<div className='trainer-desc'>
							<p>صحافية ومذيعة أخبار ومقدمة برامج سياسية وحوارية. انضمت إلى تلفزيون الآن في العام 2014
								كمديرة أخبار وتتولى حاليا إدارة البرامج في تلفزيون الآن و أكاديمية التدريب الإعلامي.
								عملت لعدة سنوات على تدريب العاملين في غرف الأخبار من محررين ومذيعين. عملت في عدة محطات
								تلفزيونية لبنانية و عربية كمراسلة ميدانية ومديرة تحرير ومسؤولة قسم التحقيقات.</p>
						</div>
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
							<h1 className='secondary-heading'> احجز مقعدك الآن ! </h1>
						</div>
					</div>
					<div className='right-section'>
						<div className='form-section' id="contact-form">
							<form action='' onSubmit={handleSubmit}>
								<div className="input-wrapper">
									<label for="first"> الاسم الكامل</label>
									<input type="text" name='name' value={inputs.name || ""}
									       onChange={handleChange} placeholder='Enter you name' required/>
								</div>
								<div className="input-wrapper">
									<label for="first">البريد الالكتروني</label>
									<input type="email" name='email' value={inputs.email || ""} onChange={handleChange}
									       placeholder='Enter you Email' required/>
								</div>
								<PhoneInput
									special-label="رقم الهاتف"
									placeholder="Enter phone number"
									value={phone}
									country={'ae'}
									onChange={setPhone}/>
								<div className="input-wrapper">
									<input type='checkbox' required/>
										<span>أنا أوافق على <a href='https://www.alaan.net/terms/'>الشروط و الأحكام</a> </span>
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
			       children={<> <img src={TickIcon}/> <h3>شكرا لك</h3><p>سوف يتم التواصل معك لتحديد الموعد</p> </>}/>
		</div>
	)
}

export default Media