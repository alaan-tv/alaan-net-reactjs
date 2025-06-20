import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom";

import './workshop.css'
import Header from '../../Common-components/ArabicHeader'
import WorkshopImage from '../../../Assets/podcast-image.png'
import EventIcon from '@mui/icons-material/Event'
import WorkshopFeatureImageIcon from '../../../Assets/workshop-feature-image.svg'
import TrainerImage from '../../../Assets/rania.webp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import BookingIcon from '../../../Assets/booking2.svg'
import Footer from '../../Common-components/ArabicFooter'
import Advertise from '../../Common-components/ArabicAdvertise'
import {ajax_url, formData} from "../../../custom-functions";
import {Feature} from "../../Common-components/Card";
import DocumentMeta from 'react-document-meta';

const Media = () => {
	const meta = {
		title: 'ورشات الميديا',
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
	const [inputs, setInputs] = useState({});
	const [phone, setPhone] = useState({country_name: '', number: '+971'});
	const submitBtn = useRef(null);
	const page_url = window.location.origin + window.location.pathname;

	/**
	 *
	 * @param value
	 * @param data
	 * @param event
	 * @param formattedValue
	 */
	const handleOnChange = (value, data, event, formattedValue) => {
		phone.country = data.name;
		phone.number = '+' + data.dialCode + '-' + value.slice(data.dialCode.length);
		setPhone(phone);
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
		submitBtn.current.value = 'إرسال...';
		fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs, phone: phone.number, country: phone.country, lp_type: 'media-workshop', page_url: page_url,
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data.payment_link) window.location = data.payment_link;
			}).catch(error => console.error(error));

	}
	/**
	 *
	 *  Content Object
	 *
	 */
	const youWillGetList = [
		{
			icon: WorkshopFeatureImageIcon,
			title: "التدريب المرن",
			desc: "دوراتنا التدريبية تتوافق مع نمط حياتك المهنية و الدراسية. دوراتنا الحضورية أو عبر الإنترنت مخصصة لتتلاءم مع جدولك الزمني."
		}, {
			icon: WorkshopFeatureImageIcon,
			title: "الخبرة الإعلامية",
			desc: "استفد من تجارب التغطية الميدانية و حكاياتها بينما يقودك صحفيون ذو خبرة من تلفزيون الآن في رحلتك."
		}, {
			icon: WorkshopFeatureImageIcon,
			title: "الشهادة",
			desc: "احصل على شهادة معتمدة من KDHA وهي أكثر من مجرد شهادة ورقية، إنها هويتك المهنية الجديدة."
		},

	];

	const howItWorkList = [
		{desc: " تدرب على أهمّ أسس تقديم الأخبار والبرامج التلفزيونية"},
		{desc: "ورشة عمل تدريبية اونلاين لمدة 3 أيام"},
		{desc: "شهادة معتمدة من أكاديمية الآن"},
		{desc: " ملحقات إعلامية للتدريب"},
		{desc: " فيديو مسجل للمتدرب"},
	];

	return (
		<div className='arabic-page'>
			<DocumentMeta {...meta} />
			<div className='home-container'>
				<Header/>
				<div className="home-banner-container">
					<div className='hero-workshop-section'>
						<div className='hero-text'>
							<h1 className='light-heading'>هل ترغب بتطوير مسيرتك الإعلامية وصقل موهبتك؟ </h1>
							<p>ورشة تدريب إعلامية تساعدك على صقل موهبتك وتطوير مهارتك في عالم الإعلام والميديا
								الحديثة.</p>
							<div className='workshop-date'><EventIcon/> <p>تاريخ الورشة: 4-6 ديسمبر </p></div>
							<a href='#contact-form'>
								<button className='cta-button'>احجز الآن</button>
							</a>
						</div>
						<div className='workshop-image'>
							<img src={WorkshopImage} alt='Workshop'/>
						</div>
					</div>
				</div>
				<div className='workshop-details-section media-workshop'>
					<div className='workshop-intro'>
						<h2 className='third-heading'>
							تقدم الأكاديمية نهجًا إعلاميًا متطورًا من خلال ورش عمل في مجال الإعلام، حيث يتم توفير تدريب
							نظري وعملي متكامل.
						</h2>
						<p>نحن نقدم فرصة للصحافيين والإعلاميين للاستفادة من خبراتنا المهنية التي استغرق بناؤها سنوات
							عديدة في مجال الأخبار والإعلام. تم تصميم ورش العمل بعناية فائقة من قبل خبراء في هذا المجال
							لتوفير التدريب المثلى لكافة الأشخاص الذين يسعون إلى استكشاف عالم الإعلام ودخوله. انضم إلى
							فرقنا وسوف تحظى بفرصة رائعة لتطوير مهاراتك في هذا المجال المثير وتحقيق نجاح كبير.</p>
					</div>
					<div className='workshop-features'>
						<h2 className='light-heading'>ماذا سوف تستفيد من ورشات العمل الإعلامية معنا؟</h2>
						<div className='features'>
							{youWillGetList.map((item, i) => <Feature key={i} item={item}/>)}
						</div>
					</div>
				</div>
				{/*<div className='video-section'>
					<video src={video} muted loop controls/>
				</div>*/}
				<div className='workshop-features-section'>
					<h2 className='light-heading'>
						مقابل 3,500 درهم فقط،
						سوف تحصل على التالي: </h2>
					<div className='features'>
						{howItWorkList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
				</div>
				<div className='trainers workshops-trainers'>
					<h2 className='primary-heading'> المدربين </h2>
					<p className='secondary-text'>نقدم لطلابنا مهارات متنوعة من خبراء لديهم الكثير من المعرفة التي تبحث
						عنها لتميز نفسك</p>
					<div className='trainers-container'>
						<div className='trainer-image'>
							<img src={TrainerImage} alt='trainer'/>
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
							<h2 className='secondary-heading'> احجز مقعدك الآن ! </h2>
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
									inputProps={{pattern: ".{12,25}",}}
									specialLabel="رقم الهاتف"
									placeholder="Enter phone number"  
									value={phone.number}
									country={'ae'}
									onChange={handleOnChange}/>
								<div className="input-wrapper">
									<input name="terms" type='checkbox' required value="1" onChange={handleChange}
									       checked={(inputs.terms || '') ? "checked" : ''}/>
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

		</div>
	)
}

export default Media