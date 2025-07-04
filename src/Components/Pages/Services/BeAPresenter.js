import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom";

import 'react-multi-carousel/lib/styles.css';
import "./service.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import TrainerImage2 from '../../../Assets/Kareem.svg'
import TrainerImage3 from '../../../Assets/Rasha.svg'
import TrainerImage4 from '../../../Assets/sajad.svg'
import InstagramIcon from '@mui/icons-material/Instagram'
//import YoutubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import Header from '../../Common-components/ArabicLightHeader'
import Footer from '../../Common-components/ArabicFooter'
import Feature1 from '../../../Assets/f1.svg'
import Feature2 from '../../../Assets/f2.svg'
import Feature3 from '../../../Assets/f3.svg'
import Feature4 from '../../../Assets/f4.svg'
import Feature5 from '../../../Assets/f5.svg'
import Feature6 from '../../../Assets/f6.svg'
import BookingIcon from '../../../Assets/booking2.svg'
import {ajax_url, formData} from "../../../custom-functions";
import ArabicAdvertise from '../../Common-components/ArabicAdvertise';
import {Feature, Trainer} from "../../Common-components/Card";
import DocumentMeta from 'react-document-meta';


const BeAPresenter = () => {
	const meta = {
		title: 'Be a presenter',
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
	const [inputs, setInputs] = useState({name: '', email: '', promo_code: ''});
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
				...inputs, phone: phone.number, country: phone.country, lp_type: 'be-a-presenter', page_url: page_url,
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data.payment_link) window.location = data.payment_link;
			}).catch(error => console.error(error));
	}
	/**
	 *
	 *  Validate Promotion code
	 *
	 */
	const promoMsg = useRef(null);
	const validatePromoCode = (event) => {
		event.preventDefault();
		if (inputs.promo_code.length >= 4) {
			fetch(ajax_url("wp-api/v2/alaan-net/validate-promo-code.php"), {
				method: 'Post', body: formData({promo_code: inputs.promo_code,}),
			})
				.then(response => response.json())
				.then(data => promoMsg.current.innerText = (data.status !== 'success') ? 'Invalid Promo Code' : '')
				.catch(error => console.error(error));
		} else {
			promoMsg.current.innerText = '';
		}
	}

	/**
	 *
	 *  Content Object
	 *
	 */
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


	const trainerList = [

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


	return (
		<div className='arabic-page'>
			<DocumentMeta {...meta} />
			<div className='hero-section'>
				<div className='home-container'>
					<Header/>
					<div className='home-banner-container banner-service'>
						<div className='home-text-section'>
							<h1 className='primary-heading light-heading'>
								يوم مع الآن يجعلك نجم الإعلام
							</h1>
							<p className='primary-text light-text'>
								ما رأيك لو أعطيناك فرصة إعداد وتقديم فقرة إخبارية بنفسك ضمن نشرة حقيقية يراها المشاهدون
								من كافة أنحاء العالم؟ فرصة العمر قد لا تأتي إلا مرة واحدة في العمر!<br/> لذا، اضمن
								مستقبلك الإعلامي.. بيوم واحد استثنائي، مع الآن
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
					<h2 className='primary-heading'>
						مقابل 9,500 درهم فقط ، إليك ما ستحصل عليه في هذا اليوم
					</h2>
					<div className='features-container'>
						{howItWorkList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
				</div>
				<div className='video-section'>
					<video src="https://cdn.alaan.tv/2023/08/10/20230810-1691665028311-original.mp4" muted loop
					       controls/>
				</div>
				<div className='trainers workshops-trainers '>
					<h2 className='primary-heading'>
						المدربين
					</h2>
					<p className='secondary-text'>نقدم لطلابنا مهارات متنوعة من خبراء لديهم الكثير من المعرفة التي تبحث
						عنها لتميز نفسك</p>
					<div className='trainers-presenter'>
						{trainerList.map((item, i) => <Trainer key={i} item={item}/>)}
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
								الآن مقابل 9,500 درهم </p>
							<h2 className='secondary-heading'>
								احجز مقعدك الآن !
							</h2>
						</div>
					</div>
					<div className='right-section'>
						<div className='form-section' id="contact-form">
							<form action='' onSubmit={handleSubmit}>
								<div className="input-wrapper">
									<label for="first"> الاسم الكامل</label>
									<input type="text" name='name' value={inputs.name}
									       onChange={handleChange} placeholder='أدخل اسمك الكامل ' required/>
								</div>
								<div className="input-wrapper">
									<label for="first">البريد الالكتروني</label>
									<input type="email" name='email' value={inputs.email} onChange={handleChange}
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
									<label for="first">كود الخصم </label>
									<input type="text" name='promo_code' value={inputs.promo_code}
									       onChange={handleChange}
									       onInput={validatePromoCode} onKeyUp={validatePromoCode}
									       placeholder='أدخل كود الخصم '/>
									<div className="invalid-code" ref={promoMsg}></div>
								</div>
								<div className="input-wrapper">
									<input name="terms" type='checkbox' required value="1" onChange={handleChange}
									       checked={(inputs.terms || '') ? "checked" : ''}/>
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
				<ArabicAdvertise/>
			</div>
			<Footer/>

		</div>
	);
}

export default BeAPresenter