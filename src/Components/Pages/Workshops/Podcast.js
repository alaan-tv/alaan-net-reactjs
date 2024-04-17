import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom";

import './workshop.css'
import Header from '../../Common-components/ArabicHeader'
import WorkshopImage from '../../../Assets/podcast-hero-image.webp'
import EventIcon from '@mui/icons-material/Event'
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
import {ajax_url, formData} from "../../../custom-functions";
import {Feature, Trainer} from "../../Common-components/Card";
import DocumentMeta from 'react-document-meta';

const Podcast = () => {
	const meta = {
		title: 'ورشات البودكاست', description: 'I am a description, and I can create multiple tags', meta: {
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
				...inputs, phone: phone.number, country: phone.country, lp_type: 'podcast-workshop', page_url: page_url,
			}),
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
	const youWillGetList = [{desc: 'فهم أهمية وطريقة تصميم الهوية البصرية، وتصميم غلاف البودكاست والحلقات'}, {desc: 'تحرير وتحسين جودة الصوت وتعزيز السرد القصصي من خلال التصميم الصوتي، مع تجربة عملية.'}, {desc: 'تطوير القدرة على التخطيط وكتابة وهيكلة حلقات بودكاست ممتعة.'}, {desc: 'القدرة على تسجيل الصوت، وإجراء المقابلات، وسرد المحتوى بفعالية.'}, {desc: 'القدرة على فهم مشهد العام لصناعة البودكاست والاستقرار على تخصصك الفريد.'},];

	const howItWorkList = [{
		subtitle: "اليوم الأول", desc: " فهم أساسيات البودكاست، وتحديد جمهورك المستهدف، وصياغة مفاهيم ممتعة."
	}, {
		subtitle: "اليوم الثاني", desc: ' تطوير نصوص منهجية، واحترافية السرد القصصي، وصنع حلقات ممتعة.'
	}, {subtitle: "اليوم الثالث", desc: ' تعلم التسجيل المحترف والتحرير الدقيق لإنتاج صوت عالي الجودة.'}, {
		subtitle: "اليوم الرابع",
		desc: ' اكتساب مهارات ما بعد الإنتاج وتعلم استراتيجيات إطلاق حملات فعّالة، واستكشاف فرص تحقيق الربح!'
	},];


	const trainerList = [{
		image: TrainerImage1,
		name: " محمد علي",
		social: [{icon: <InstagramIcon/>, link: "https://www.instagram.com/moalivoice/"}, {
			icon: <YoutubeIcon/>, link: "https://www.youtube.com/@moalivoice"
		},],
		desc: "مدير المنتجات الصوتية Audio Products Manager في راديو وتلفزيون الآن، يقدم بودكاست \"البودكاست المفضل\" ، مصري الجنسية، ولد في مصر ونشأ في الإمارات. محمد مهندس ومعلق ومدرب صوتي محترف، قرر بعد سنوات من العمل كمهندس برمجيات أن يترك الهندسة ويتبع شغفه في التعليق والتدريب الصوتي وصناعة المحتوى، فترك وظيفته الحكومية وانضم إلى فريق الآن في بداية عام 2022. قام بتدريب أكثر من 800 شخص من بينهم إعلاميين حاليين ، مقدمي بودكاست ومذيعين، صانعي محتوى ومعلقين صوتيين وعمل مع العديد من كبرى الشركات والعلامات التجارية و المؤسسات الحكومية و مراكز التدريب الإعلامي."
	}, {
		image: TrainerImage2,
		name: "مها فطوم",
		social: [{icon: <InstagramIcon/>, link: "https://www.instagram.com/maha.fattoum/"}, {
			icon: <TwitterIcon/>, link: "https://twitter.com/mahafattoum"
		},],
		desc: "صحفية ومقدمة برامج حاصلة على بكالوريوس في الصحافة والإعلام من جامعة دمشق انضمت لفريق العمل في تلفزيون الآن عام 2018 قدمت العديد من البرامج الإذاعية المباشرة أبرزها برنامج \"ساعة عالهوا\" كما تعد وتقدم برامج اجتماعية منها: بودكاست صارت معي - البرنامج التلفزيوني \"أنا موجود\" وشاركت في تقديم البرامج التلفزيوني المباشر \"تلي تيرابي\". لديها اهتمام بالتعرف على تجارب الناس في شتى نواحي الحياة بمختلف جنسياتهم وخلفياتهم الثقافية والاجتماعية وتقديمها كقصص إيماناً منها بأن للقصة أثراً كبيراً في تغيير طريقة تفكيرنا نحو الأفضل وجعلنا منفتحين على الآخرين وقادرين على التضامن والتعاطف معهم."
	},];

	return (<div style={{overflow_x: 'hidden'}} className='arabic-page'>
		<DocumentMeta {...meta} />
		<div className='home-container'>
			<Header/>
			<div className="home-banner-container">
				<div className='hero-workshop-section podcast-hero'>
					<div className='hero-text'>
						<h1 className='light-heading podcast-heading'>أطلق العنان لصوتك! </h1>
						<p> طور مهاراتك في مجال البودكاست الذي سيترك بصمتك</p>
						<p>اكتشف وطور وأطلق البودكاست الخاص بك مع ورش عمل بودكاست أخبار الآن!</p>
						<div className='workshop-date'><EventIcon/> <p>تاريخ الورشة: 4-7 ديسمبر </p></div>
						<a href='#contact-form'>
							<button className='cta-button'>احجز الآن</button>
						</a>
					</div>
					<div className='workshop-image'>
						<img src={WorkshopImage} alt='Workshop'/>
					</div>
				</div>
			</div>
			<div className='workshop-details-section'>
				<div className='workshop-intro'>
					<h2 className='third-heading'>
						هل تفكر في بدء بودكاست خاص بك ولكنك لست متأكداً من أين تبدأ؟ أو كيف تصل إلى جمهورك؟ أو حتى
						كيف تستطيع إنشاء محتوى يتردد صداه ويتفاعل مع المستمعين؟ لا تقلق، فلست الوحيد!
					</h2>
					<p>لهذا السبب قمنا بتصميم ورشة عمل مكثفة لمدة 4 أيام لتحويل محبي البودكاست إلى مبدعين! نحن هنا
						لنزودك بالمعرفة، والمهارات، والثقة التي تحتاجها لاكتشاف تخصصك، وصياغة محتوى رائع له، وإطلاق
						البودكاست الخاص بك بنجاح!
					</p>
				</div>
				<div className='workshop-features-section'>
					<h2 className='light-heading'>بنهاية هذه الورشة ستكون قادرًا على
					</h2>
					<div className='features features-wrap'>
						{youWillGetList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
				</div>
			</div>
			<div className='video-section'>
				<video height={480} style={{background: '#000'}} src={video} muted loop controls/>
			</div>
			<div className='workshop-features-section'>
				<h2 className='light-heading'>
					مقابل 4,000 درهم فقط ، إليك ما ستتعلمه في أيام الورشة
				</h2>
				<div className='features'>
					{howItWorkList.map((item, i) => <Feature key={i} item={item}/>)}
				</div>
			</div>
			<div className='trainers workshops-trainers'>
				<h2 className='primary-heading'>
					المدربين
				</h2>
				<p className='secondary-text'>نقدم لطلابنا مهارات متنوعة من خبراء لديهم الكثير من المعرفة التي تبحث
					عنها لتميز نفسك</p>
				<div className=''>
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
							كن معنا من 4 إلى 7 ديسمبر 2023 لمدة أربع أيام
							مقابل 4,000 درهم إماراتي فقط
						</p>
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
	</div>)
}

export default Podcast


