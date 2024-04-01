import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './workshop.css'
import Header from '../../Common-components/ArabicHeader'
import WorkshopImage from '../../../Assets/podcast-hero-image.webp'
import EventIcon from '@mui/icons-material/Event'
import video from '../../../Assets/voice-video-ver.mp4'
import TrainerImage1 from '../../../Assets/Mohammad-ali.webp'
import InstagramIcon from '@mui/icons-material/Instagram'
import TikTokIcon from '@mui/icons-material/Instagram'
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
function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ p: 3 }}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
  }
  
  CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
  }
const VoiceOver = () => {
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
		submitBtn.current.value = 'إرسال...';
		fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs, phone: phone, lp_type: 'podcast-workshop', page_url: page_url,
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
	const youWillGetList = [{desc: 'فهم مشهد العام لمجال التعليق الصوتي والاستقرار على تخصصك الفريد.'},
     {desc: 'فهم عناصر التعليق الصوتي الناجح وكيفية التحكم بها بشكل صحيح.     '},
       {desc: 'التسجيل والتعديل الصوتي باستخدام المعدات الاحترافية.       '},
        {desc: 'اكتشاف نقاط القوة والضعف في الأداء والعمل على تصحيح الأخطاء.'},
        {desc: 'معرفة كيف تجهّز الاستوديو المنزلي الاحترافي الخاص بك.'},
        {desc: 'فهم أساسيات الهندسة الصوتية لصناعة تسجيل متكامل.        '},
        {desc: 'فهم سوق العمل وكيفية الحصول على أعمال صوتية.'},
        {desc: 'الاستعداد الجيّد للتسجيل والتعامل الاحترافي داخل الاستوديو.        '},
        {desc: 'فهم كيفية بناء شبكة علاقات جيّدة مع العملاء والمنتجين والمحافظة عليها.'},
        {desc: 'فهم طرق التسويق الفعّالة للمعلّق الصوتي.'},
    ];

	const howItWorkList = [{
		subtitle: "اليوم الأول", desc: " فهم أساسيات مجال التعليق الصوتي، مع تدريبات عملية لتطوير الآداء.        "
	}, {
		subtitle: "اليوم الثاني", desc: ' تجهيز الاستوديو المنزلي الاحترافي من الألف إلى الياء، مع تدريبات تطبيقية لتطوير الآداء الصوتي.        '
	}, {subtitle: "اليوم الثالث", desc: ' تعلم أساسيات التسجيل والتعديل الصوتي  وأساسيات الهندسة الصوتية بشكل عملي وإنتاج ملف صوتي عالي الجودة.    '}, {
		subtitle: "اليوم الرابع",
		desc: '  تسجيل مشاريع التخرّج واكتساب مهارات ما بعد الإنتاج وتعلم استراتيجيات التسويق الفعّالة لاستكشاف فرص تحقيق الربح.        '
	},];


	const trainerList = [{
		image: TrainerImage1,
		name: " محمد علي",
		social: [{icon: <InstagramIcon/>, link: "https://www.instagram.com/moalivoice/"}, {
			icon: <YoutubeIcon/>, link: "https://www.youtube.com/@moalivoice"
		},
       
        {icon: <TwitterIcon/>, link: "https://www.youtube.com/@moalivoice"
		},
        {icon: <FacebookIcon/>, link: "https://www.youtube.com/@moalivoice"
		},
    ],
		desc: "مدير المنتجات الصوتية Audio Products Manager في راديو وتلفزيون الآن، يقدم بودكاست \"البودكاست المفضل\" ، مصري الجنسية، ولد في مصر ونشأ في الإمارات. محمد مهندس ومعلق ومدرب صوتي محترف، قرر بعد سنوات من العمل كمهندس برمجيات أن يترك الهندسة ويتبع شغفه في التعليق والتدريب الصوتي وصناعة المحتوى، فترك وظيفته الحكومية وانضم إلى فريق الآن في بداية عام 2022. قام بتدريب أكثر من 800 شخص من بينهم إعلاميين حاليين ، مقدمي بودكاست ومذيعين، صانعي محتوى ومعلقين صوتيين وعمل مع العديد من كبرى الشركات والعلامات التجارية و المؤسسات الحكومية و مراكز التدريب الإعلامي."
	}, ];

	return (<div style={{overflow_x: 'hidden'}} className='arabic-page voice-page'>
		<DocumentMeta {...meta} />
		<div className='home-container'>
			<Header/>
			<div className="home-banner-container">
				<div className='hero-workshop-section podcast-hero'>
					<div className='hero-text'>
						<h1 className='light-heading podcast-heading'> اكتشف القوة الحقيقية لصوتك!</h1>
						<p>طور مهاراتك في مجال التعليق الصوتي الذي سيترك بصمتك
</p>
						<p>اكتشف وطور مهاراتك الصوتية مع ورشة عمل احتراف التعليق الصوتي مع محمد علي!</p>
						<div className='workshop-date'><EventIcon/> <p> تاريخ ومواعيد الورشات القادمة:   </p></div>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={value} onChange={handleChange1} aria-label="basic tabs example">
    <Tab label="مايو" {...a11yProps(0)} />
    <Tab label="يوليو" {...a11yProps(1)} />
    <Tab label="أغسطس" {...a11yProps(2)} />
  </Tabs>
</Box>
<CustomTabPanel value={value} index={0}>
<p> الموعد الأول : 4 و 5 مايو من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
					   <p> الموعد الثاني :11 و12 مايو من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
<p> الموعد الأول : 6 و7 يوليو من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
					   <p> الموعد الثاني :13 و14  يوليو من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
</CustomTabPanel>
<CustomTabPanel value={value} index={2}>
<p> الموعد الأول : 24 و 25 أغسطس من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
					   <p> الموعد الثاني :  31 أغسطس و1 سبتمبر من الساعة 12 ظهرا الى الساعة 4 ظهرا</p>
</CustomTabPanel>
                      

						<a href='#contact-form'>
							<button className='cta-button'>احجز الآن</button>
						</a>
					</div>
					<div className='workshop-image'>
                    <div className='video-section'>
				<video style={{background: '#000'}} src={video} autoPlay muted loop controls/>
			</div>					</div>
				</div>
			</div>
			<div className='workshop-details-section'>
				<div className='workshop-intro'>
					<h2 className='third-heading'>
                    هل تعتقد بأنك تمتلك صوتاً جميلاً؟ ولكنك لست متأكداً إن كنت تصلح لتكون معلقاً صوتياً أو صانع محتوى؟ الخبر الجيد هو أن كل الأصوات جميلة وتصلح للتعليق الصوتي إذا تم تدريبها وتطويرها بشكل صحيح! لكن من أين تبدأ؟ أو كيف تصل إلى الجمهور؟ أو كيف تدخل سوق العمل وتبني مساراً مهنياً ناجحاً من خلال صوتك؟ لا تقلق، نحن هنا لمساعدتك لتضع قدمك على الطريق الصحيح!


					</h2>
					<p>لهذا السبب قمنا بتصميم ورشة عمل مكثفة لمدة 4 أيام لمساعدة محبي التعليق الصوتي في رحلة التحوّل إلى فنانين ومعلقين صوتيين ناجحين! نحن هنا لنمكنك من الحصول على المعرفة، والمهارات، والأدوات، والثقة التي تحتاجها لاكتشاف القوة الحقيقية لصوتك وكيفية استثمارها بشكل فعّال!

						
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
					مقابل 3,000 درهم فقط ، إليك ما ستتعلمه في أيام الورشة
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
								value={phone}
								country={'ae'}
								onChange={setPhone}/>
								<div className="input-wrapper ">
									<p className='question-type'> كيف تريد حضور الورشة :</p>
									<div className='question-workshop'>
									<div className='option'>
								<input name="attend" type='radio'  required value="online" onChange={handleChange}
								       checked={(inputs.terms || '') ? "checked" : ''}/>
								<span>أونلاين </span>
								</div>
								<div className='option'>
								<input name="attend" type='radio'  required value="face to face" onChange={handleChange}
								       checked={(inputs.terms || '') ? "checked" : ''}/>
								<span>حضور في المكان </span>
								</div>
								</div>
							</div>
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

export default VoiceOver
