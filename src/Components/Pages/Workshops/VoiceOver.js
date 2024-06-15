import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Carousel from 'react-multi-carousel';

import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './workshop.css'
import  CallIcon from '../../../Assets/call-icon.png';
import  WhatsIcon from '../../../Assets/whats-icon.png';
import Header from '../../Common-components/ArabicHeader'
import EventIcon from '@mui/icons-material/Event'
import video from '../../../Assets/voice-over-video.mp4'
import TrainerImage1 from '../../../Assets/Mohammad-ali.webp'
import InstagramIcon from '@mui/icons-material/Instagram'
import YoutubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import BookingIcon from '../../../Assets/booking2.svg'
import Footer from '../../Common-components/ArabicFooter'
import Advertise from '../../Common-components/ArabicAdvertise'
import {ajax_url, formData} from "../../../custom-functions";
import {Feature, Trainer} from "../../Common-components/Card";
import DocumentMeta from 'react-document-meta';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
import { Testimonial} from "../../Common-components/Card";
import TistiImage1 from '../../../Assets/testi/5.png'
import TistiImage2 from '../../../Assets/testi/6.png'
import TistiImage3 from '../../../Assets/testi/3.png'
import TistiImage4 from '../../../Assets/testi/1.png'
import TistiImage6 from '../../../Assets/testi/2.png'
import TistiImage7 from '../../../Assets/testi/4.png'
import {responsive} from "../../../custom-functions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoModal from "../../Common-components/VideoModal";
import TickIcon from "../../Common-components/TickIcon";
import Modal from "../../Common-components/Modal";
function CustomTabPanel(props) {
	const {children, value, index, ...other} = props;
	
	return (<div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	>
		{value === index && (<Box sx={{p: 3}}>
			<Typography>{children}</Typography>
		</Box>)}
	</div>);
}

  
CustomTabPanel.propTypes = {
	children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`,
	};
}

const VoiceOver = () => {
	
	var settings = {
		autoplay: true,
		dots: true,
		infinite: true,
		speed:500,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: true,
		cssEase: "linear"
	}
	const [videoModal, setVideoModal] = useState(false);
	const [ytId, setYtId] = useState(false);


	const openVideoModel = (yt_id) => {
		setYtId(()=>yt_id);
		setVideoModal(()=>true);
	}

	const testimonialList = [
		{
			image: TistiImage1,
			name: 'فهد سال',
			desc: '“الصوتيات أساسية في السوشيال ميديا. دورة شاملة غطت التنغيم، درجات الصوت، الوقفات، والمعدات. استفدت كثيراً رغم خبرتي الطويلة في المجال. واحدة من أفضل الدورات التي أخذتها وتستحق كل درهم.”',
			youtube: <><a  onClick={() => openVideoModel('alnQOvwSTuY') }>  مشاهدة رأي  <span> فهد سال</span> بالورشة </a></>,
		}, {
			image: TistiImage2,
			name: 'محمد عبدلله',
			desc: '“وجدت تعاوناً كبيراً من أول دقيقة في الورشة. تعرفت على نقاط قوتي وضعفي الصوتية، وتعلمت الهدوء والتلقائية. أستطيع الآن بناء استوديو منزلي والتواصل مع العملاء بفعالية. المجموعة كانت متعاونة.”',
			youtube: <><a  onClick={() => openVideoModel('M1RmWn4qiS4') }>  مشاهدة رأي  <span> محمد عبدلله</span> بالورشة </a></>,
		}, {
			image: TistiImage3,
			name: ' عمرو بدوي',
			desc: '“أنصح كل الشباب المقبلين على التعليق الصوتي بهذه الورشة بقيادة الأستاذ محمد علي. استمتعنا وتعلمنا أشياء كثيرة، وستكون بداية جديدة لمن سيأتي.”',
			youtube: <><a  onClick={() => openVideoModel('M1RmWn4qiS4') }>  مشاهدة رأي  <span> عمرو بدوي</span> بالورشة </a></>,
		}, {
			image: TistiImage4,
			name: ' ريم الحاجب ',
			desc: '“شكراً جزيلاً لكم، أخذت ورشات عديدة لكن ورشة أخبار الآن كانت الأكثر إفادة وكثافة بالمعلومات، سواء كنت مبتدئاً أو لديك خبرة. استطاعوا تبسيط المعلومات وإيصالها بشكل ممتاز.”',
			youtube: <><a  onClick={() => openVideoModel('M1RmWn4qiS4') }>  مشاهدة رأي  <span>ريم الحاجب</span> بالورشة </a></>,
		}, {
			image: TistiImage6,
			name: '  طارق جودة ',
			desc: '“دورة رائعة شعرت وكأني في بيتي. استفدت كثيراً تقنياً وأداءً صوتياً. الحديث المتبادل مع المدرب أجاب عن كل استفساراتنا بعمق. المدرب محمد علي كان يعطي كل خبرته بصدق. فريق أخبار الآن كان متعاوناً.”',
			youtube: <><a  onClick={() => openVideoModel('M1RmWn4qiS4') }>   مشاهدة رأي  <span>  طارق جودة</span> بالورشة </a></>,
		},{
			image: TistiImage7,
			name: '  منى الخازن ',
			desc: '“التعليق الصوتي شغفي القديم، ورشة محمد علي دفعتني للسفر من الدوحة إلى دبي. أربعة أيام فاقت توقعاتي بالمعلومات وتحسين الأداء. كانت تجربة مليئة بالألفة والتحدي والحماس، ولم أكن بحاجة لأي ورشة سوى هذه.”',
			youtube: <><a  onClick={() => openVideoModel('NatnVeYDvX4') }>   مشاهدة رأي  <span> منى الخازن</span> بالورشة  </a></>,
		}
	];
	const options = [' يوليو : الأيام 6, 7 , 13, 14 ', ' أغسطس : الأيام 24 , 25, 32 و 1 سبتمير '];
	const defaultOption = options[0];
	const [value, setValue] = React.useState(0);

	const handleChange1 = (event, newValue) => {
		setValue(newValue);
	};
	const meta = {
		title: 'ورشات التعليق الصوتي', description: 'I am a description, and I can create multiple tags', meta: {
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
	const [inputs, setInputs] = useState({name: '', email: '', promo_code: '',attend:'',terms:''});
	const [phone, setPhone] = useState({country_name: '', number: '+971'});
	const [workshopDate, setWorkshopDate] = useState(defaultOption);
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
				...inputs,
				phone: phone.number, country: phone.country,
				lp_type: 'voice-over-workshop',
				page_url: page_url,
				ws_date: workshopDate.value ? workshopDate.value : workshopDate
			}),
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
		if (inputs.promo_code.length >= 7) {
			event.target.disabled=true;
			fetch(ajax_url("wp-api/v2/alaan-net/validate-promo-code.php"), {
				method: 'Post', body: formData({promo_code: inputs.promo_code,}),
			})
				.then(response => response.json())
				.then(data => {
					promoMsg.current.innerText = (data.status !== 'success') ? 'Invalid Promo Code' : '';
					event.target.disabled=false;
				})
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
	const youWillGetList = [{desc: 'فهم مشهد العام لمجال التعليق الصوتي والاستقرار على تخصصك الفريد.'}, {desc: 'فهم عناصر التعليق الصوتي الناجح وكيفية التحكم بها بشكل صحيح.     '}, {desc: 'التسجيل والتعديل الصوتي باستخدام المعدات الاحترافية.       '}, {desc: 'اكتشاف نقاط القوة والضعف في الأداء والعمل على تصحيح الأخطاء.'}, {desc: 'معرفة كيف تجهّز الاستوديو المنزلي الاحترافي الخاص بك.'}, {desc: 'فهم أساسيات الهندسة الصوتية لصناعة تسجيل متكامل.        '}, {desc: 'فهم سوق العمل وكيفية الحصول على أعمال صوتية.'}, {desc: 'الاستعداد الجيّد للتسجيل والتعامل الاحترافي داخل الاستوديو.        '}, {desc: 'فهم كيفية بناء شبكة علاقات جيّدة مع العملاء والمنتجين والمحافظة عليها.'}, {desc: 'فهم طرق التسويق الفعّالة للمعلّق الصوتي.'},];

	const howItWorkList = [{
		subtitle: "اليوم الأول", desc: " فهم أساسيات مجال التعليق الصوتي، مع تدريبات عملية لتطوير الآداء.        "
	}, {
		subtitle: "اليوم الثاني",
		desc: ' تجهيز الاستوديو المنزلي الاحترافي من الألف إلى الياء، مع تدريبات تطبيقية لتطوير الآداء الصوتي.        '
	}, {
		subtitle: "اليوم الثالث",
		desc: ' تعلم أساسيات التسجيل والتعديل الصوتي  وأساسيات الهندسة الصوتية بشكل عملي وإنتاج ملف صوتي عالي الجودة.    '
	}, {
		subtitle: "اليوم الرابع",
		desc: '  تسجيل مشاريع التخرّج واكتساب مهارات ما بعد الإنتاج وتعلم استراتيجيات التسويق الفعّالة لاستكشاف فرص تحقيق الربح.        '
	},];


	const trainerList = [{
		image: TrainerImage1,
		name: " محمد علي",
		social: [{icon: <InstagramIcon/>, link: "https://www.instagram.com/moalivoice/"}, {
			icon: <YoutubeIcon/>, link: "https://www.youtube.com/@moalivoice"
		},

			{
				icon: <TwitterIcon/>, link: "https://www.youtube.com/@moalivoice"
			}, {
				icon: <FacebookIcon/>, link: "https://www.youtube.com/@moalivoice"
			},],
		desc: "مدير المنتجات الصوتية Audio Products Manager في راديو وتلفزيون الآن، يقدم بودكاست \"البودكاست المفضل\" ، مصري الجنسية، ولد في مصر ونشأ في الإمارات. محمد مهندس ومعلق ومدرب صوتي محترف، قرر بعد سنوات من العمل كمهندس برمجيات أن يترك الهندسة ويتبع شغفه في التعليق والتدريب الصوتي وصناعة المحتوى، فترك وظيفته الحكومية وانضم إلى فريق الآن في بداية عام 2022. قام بتدريب أكثر من 800 شخص من بينهم إعلاميين حاليين ، مقدمي بودكاست ومذيعين، صانعي محتوى ومعلقين صوتيين وعمل مع العديد من كبرى الشركات والعلامات التجارية و المؤسسات الحكومية و مراكز التدريب الإعلامي."
	},];

	return (<div style={{overflow_x: 'hidden'}} className='arabic-page voice-page'>
		
		<DocumentMeta {...meta} />
		<div className='home-container'>
			<Header/>
			<div className="home-banner-container">
				<div className='hero-workshop-section podcast-hero'>
					<div className='hero-text'>
						<h1 className='light-heading podcast-heading'> اكتشف القوة الحقيقية لصوتك!</h1>
						<p>اكتشف وطور مهاراتك الصوتية مع ورشة عمل احتراف التعليق الصوتي مع محمد علي!</p>

						<p>مقابل 3,000 درهم فقط للورشة الحضورية في <a
							href='https://maps.app.goo.gl/6WsNgfxpMhQgJ2NL8'> مقر الآن </a><br/> أو 2,000 درهم أونلاين
							عبر تطبيق زووم
						</p>
						<div className='cta-buttons'>
						<ReactWhatsapp className='whats-button'  number="971-525-06-0035" > <img src={WhatsIcon} /> </ReactWhatsapp>
<br />
        <a  href='tel:+971 525 06 0035'><img className='whats-button' src={CallIcon} /></a>
		</div>
		
						<div className='workshop-date'><EventIcon/> <p> تاريخ ومواعيد الورشات القادمة: </p></div>
						<Box sx={{borderBottom: 1, borderColor: 'divider'}}>
							<Tabs value={value} onChange={handleChange1} aria-label="basic tabs example">
								
								<Tab label="يوليو" {...a11yProps(0)} />
								<Tab label="أغسطس" {...a11yProps(1)} />
							</Tabs>
						</Box>
						
						<CustomTabPanel value={value} index={0}>
							<p> اليوم الأول :السبت 6 يوليو من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
							<p> اليوم الثاني :الأحد 7 يوليو من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
							<p> اليوم الثالث :السبت 13 يوليو من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
							<p> اليوم الرابع :الأحد 14 يوليو من الساعة 12 ظهرا الى الساعة 4 ظهرا</p></CustomTabPanel>
						<CustomTabPanel value={value} index={1}>
							<p> اليوم الأول :السبت 24 أغسطس من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
							<p> اليوم الثاني :الأحد 25 أغسطس من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
							<p> اليوم الثالث :السبت 31 أغسطس من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
							<p> اليوم الرابع :الأحد 1 سبتمبر من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
						</CustomTabPanel>


						<a href='#contact-form'>
							<button className='cta-button'>احجز الآن</button>
						</a>
					</div>
					<div className='video-section'>
						<video style={{background: '#000'}} src={video} muted loop controls/>
					</div>
				</div>
			</div>
			<div className='workshop-details-section'>
				<div className='workshop-intro'>
					<h2 className='third-heading'>
						هل تعتقد بأنك تمتلك صوتاً جميلاً؟ ولكنك لست متأكداً إن كنت تصلح لتكون معلقاً صوتياً أو صانع
						محتوى؟ الخبر الجيد هو أن كل الأصوات جميلة وتصلح للتعليق الصوتي إذا تم تدريبها وتطويرها بشكل
						صحيح! لكن من أين تبدأ؟ أو كيف تصل إلى الجمهور؟ أو كيف تدخل سوق العمل وتبني مساراً مهنياً ناجحاً
						من خلال صوتك؟ لا تقلق، نحن هنا لمساعدتك لتضع قدمك على الطريق الصحيح!


					</h2>
					<p>لهذا السبب قمنا بتصميم ورشة عمل مكثفة لمدة 4 أيام لمساعدة محبي التعليق الصوتي في رحلة التحوّل إلى
						فنانين ومعلقين صوتيين ناجحين! نحن هنا لنمكنك من الحصول على المعرفة، والمهارات، والأدوات، والثقة
						التي تحتاجها لاكتشاف القوة الحقيقية لصوتك وكيفية استثمارها بشكل فعّال!


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
			{/*<div className='video-section'>
				<video height={480} style={{background: '#000'}} src={video} muted loop controls/>
</div>*/}
			<div className='workshop-features-section'>
				<h2 className='light-heading'>
					مقابل 3,000 درهم فقط للورشة الحضورية في مقر الآن أو 2,000 درهم أونلاين عبر تطبيق زووم ، إليك ما
					ستتعلمه في أيام الورشة
				</h2>
				<div className='features'>
					{howItWorkList.map((item, i) => <Feature key={i} item={item}/>)}
				</div>
			</div>
			<div className='trainers workshops-trainers'>
				<h2 className='primary-heading'>
					المدربون
				</h2>
				<p className='secondary-text'>نقدم لطلابنا مهارات متنوعة من خبراء لديهم الكثير من المعرفة التي تبحث
					عنها لتميز نفسك</p>
				<div className=''>
					{trainerList.map((item, i) => <Trainer key={i} item={item}/>)}
				</div>
			</div>

			<div className='testimonials'>
					<h2 className='primary-heading'> آراء متدربينا </h2>
					<div className=''>
					<Slider {...settings}>
				
    
				{testimonialList.map((item, i) =><Testimonial key={i} item={item}/>)}
				
			  
			  </Slider>
</div>
</div>
				{/*<Carousel
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={5000}
					keyBoardControl={true}
					customTransition="all .9"
					transitionDuration={2000}
					containerClass="carousel-container "
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="div1"
				>
					{testimonialList.map((item, i) => <Testimonial key={i} item={item}/>)}
				</Carousel>*/}
				
			<div className='booking workshops-booking' id="contact-form">
				<div className='left-section'>
					<div className='left-section-container'>
						<img src={BookingIcon} alt="Booking Icon"/>
						<p className='third-heading'>
							هل أنت مستعد لإطلاق العنان لإمكانيات صوتك الحقيقية؟
						</p>
						<p className='third-heading'>
							كن معنا في الورشات القادمة

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
							<div className="input-wrapper ">
								<p className='question-type'> كيف تريد حضور الورشة :</p>
								<div className='question-workshop'>
									<div className='option'>
										<label>
											<input name="attend" type='radio' required value="online"
											       onChange={handleChange}
											       checked={(inputs.attend || '') === 'online' ? "checked" : ''}/>
											<span>أونلاين </span>
										</label>
									</div>
									<div className='option'>
										<label>
											<input name="attend" type='radio' required value="face to face"
											       onChange={handleChange}
											       checked={(inputs.attend || '') === 'face to face' ? "checked" : ''}/>
											<span>حضوري في مقر الآن </span></label>
									</div>
								</div>
							</div>
							<div className="input-wrapper">
								<p className='question-type'> اختر موعد الورشة :</p>
								<Dropdown options={options} value={workshopDate} onChange={setWorkshopDate}
								          placeholder="Select an option"/>

							</div>
							{/*<div className="input-wrapper">
								<label htmlFor="first">كود الخصم </label>
								<input type="text" name='promo_code' value={inputs.promo_code || ''}
								       onChange={handleChange}
								       onInput={validatePromoCode} onKeyUp={validatePromoCode}
								       placeholder='أدخل كود الخصم '/>
								<div className="invalid-code" ref={promoMsg}></div>
							</div>*/}
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

		<VideoModal show={videoModal} handleClose={() => setVideoModal(!videoModal)} yt_id={ytId}/>

		<Footer/>
	</div>)
}

export default VoiceOver
