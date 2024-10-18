import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'react-dropdown/style.css';
import './workshop.css'
import CallIcon from '../../../Assets/call-icon.png';
import WhatsIcon from '../../../Assets/whats-icon.png';
import Header from '../../Common-components/ArabicHeader'
import EventIcon from '@mui/icons-material/Event';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import BookingIcon from '../../../Assets/booking2.svg'
import Footer from '../../Common-components/ArabicFooter'
import Advertise from '../../Common-components/ArabicAdvertise'
import {ajax_url, formData} from "../../../custom-functions";
import {Feature, Testimonial} from "../../Common-components/Card";
import DocumentMeta from 'react-document-meta';
import ReactWhatsapp from 'react-whatsapp';
import TistiImage1 from '../../../Assets/trainers/1.png'
import TistiImage2 from '../../../Assets/trainers/2.png'
import TistiImage3 from '../../../Assets/trainers/3.png'
import TistiImage4 from '../../../Assets/trainers/4.png'
import TistiImage5 from '../../../Assets/trainers/5.png'
import TistiImage6 from '../../../Assets/trainers/6.png'
import TistiImage7 from '../../../Assets/trainers/7.png'
import TistiImage8 from '../../../Assets/trainers/8.png'
import TistiImage9 from '../../../Assets/trainers/9.png'
import TistiImage10 from '../../../Assets/trainers/10.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoModal from "../../Common-components/VideoModal";

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

const JobProgram = () => {

	var settings = {
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 500,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: true,
		cssEase: "linear"
	}
	const [videoModal, setVideoModal] = useState(false);
	const [ytId, setYtId] = useState(false);

	const testimonialList = [
		{
			image: TistiImage1,
			name: ' أروى القيوضي',
			desc: ' كتابة أول نص وتصوير أول فيديو والتعلم من خبرات كافة أعضاء الفريق، هي تجربة مميزة من جميع النواحي،و فرصة لاكتساب مهارات جديدة وتطوير القدرات الإعلامية بشكل عملي وفعال.',
		}, {
			image: TistiImage2,
			name: 'باسم جميل',
			desc: '“ تجربتي في اخبار الان عطتني فرصة اني اصقل مهاراتي واكتشف ذاتي، وساعدتني اني اوقف قدام الكاميرا بكل ثقة.”',
		}, {
			image: TistiImage3,
			name: ' ايمان المطيري',
			desc: '“أود أن أوجه شكري وتقديري لاخبار الآن على فرصة التدريب الرائعة التي قدموها لي. لقد تعلمت الكثير من المهارات مثل كتابة النص والتصوير، مما ساهم في تطوير مهاراتي و زاد ثقتي بنفسي”',
		}, {
			image: TistiImage4,
			name: ' جوري خزعل ',
			desc: '		“تجربتي بالان كانت حلوة، تعلمت فيها كيفية صناعة المحتوى من خلال كتابة النص و الوقوف أمام الكاميرا و غيرها .”'
		},
		{
			image: TistiImage5,
			name: ' مظفر اسماعيل ',
			desc: '“تجربتي مع العمل كصانع محتوى طورك جانب التخطيط و التواصل المستمر لتحقيق محتوى ممتع وجذاب وطور مهارات عديدة ومنها توسع معرفتي بما يحدث في العالم يوميا”',
		}, {
			image: TistiImage6,
			name: ' سارة خالد ',
			desc: '“تجربتي في اخبار الآن مميزة جدا لأنني تعلمت كيفية كتابة الآخبار وتحويل خبر يحمل الكثير من التفاصيل إلى قصة اخبارية قصيرة لنشرها على مواقع التواصل الاجتماعي.”',
		}, {
			image: TistiImage7,
			name: ' أميرة الخطيب ',
			desc: '“لطالما كانت الكتابة هي شغفي، وفي قناة الآن، استطعت أن أوظِّف ذلك بما هو مفيد من كتابة المحتوى وحتى التقارير الصحفية”',
		}, {
			image: TistiImage8,
			name: ' ناصر عيسى ',
			desc: '“التجربة جدا ممتازة مع أخبار الآن، القائمين عليه ساهموا باكتشاف وتطوير قدراتي بالكتابة والتحرير”',
		}
		, {
			image: TistiImage10,
			name: ' جميل بدر',
			desc: '“من مهندس كيماء حيوية إلى مقدم محتوى، سعيد أن أول تجربة كانت مع أخبار الآن تعلمت فيها التعامل مع الكاميرا أمام الجميع و أعطتني فرصة كتابة نصوص كنت جدا شغوف فيها منذ الصغر.”',
		}, {
			image: TistiImage9,
			name: ' عبدالحكيم حسين ',
			desc: '“اختصاصي هو التسويق والسيارات، تجربتي مع أخبار الآن ساعدتني على اكتشاف شغفي بالإعلام، وكانت فرصة رائعة لتعلم مهارات جديدة في بيئة داعمة.”',
		}
	];

	const meta = {
		title: 'برنامج التدريب الاعلامي', description: 'I am a description, and I can create multiple tags', meta: {
			charset: 'utf-8', name: {
				keywords: 'react,meta,document,html,tags'
			}
		}
	}

	/**
	 *
	 * Send From Data
	 *
	 */
	const [inputs, setInputs] = useState({name: '', email: '',dob:'', nationality: '', residence: '', education: '',study: '',joining: '',commuting:'', terms: ''});
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
		console.log({
			...inputs,
			phone: phone.number,
			country: phone.country,
			lp_type: 'job-program-workshop',
			page_url: page_url,
		});

		fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {
			method: 'Post', body: formData({
				...inputs,
				phone: phone.number,
				country: phone.country,
				lp_type: 'job-program-workshop',
				page_url: page_url,
			}),
		})
			.then(response => response.json())
			.then(data => {
				setInputs({});
				setPhone('971');
				if (data.id) {
					window.location = '/our-workshops/media-training-program/thank-you';
				}
			}).catch(error => console.error(error));

	}


	/**
	 *
	 * Content Object
	 *
	 */
	const youWillGetList = [{desc: 'تطوير القدرة على تحديد الأفكار القصصية المثيرة وتحويلها إلى محتوى إعلامي فعال'}, {desc: 'فهم كيفية جمع وتحليل المعلومات من مصادر موثوقة ومباشرة لبناء تقارير دقيقة '}, {desc: 'تحسين مهارات صياغة المقالات والتقارير بطريقة جذابة وواضحة'}, {desc: 'تطوير القدرة على جمع البيانات وتوثيق المعلومات بشكل مباشر من قلب الحدث'}, {desc: 'تعلم تقنيات إجراء مقابلات ناجحة تساهم في إثراء المحتوى الصحفي'}, {desc: 'فهم خطوات إنتاج الفيديوهات الإعلامية من مرحلة التصوير إلى مرحلة التحرير '}, {desc: ' تعلم كيفية التحدث بوضوح وثقة أمام الكاميرا لعرض الأخبار والمحتوى'}, {desc: 'امتلاك المتدربون محفظة أعمال تحتوي على قصصهم المكتوبة والمحتويات التي أنجزوها '}, {desc: ' تعلم مهارات التحقيق والبحث العميق في المواضيع الصحفية لكشف الحقائق'}, {desc: ' تطوير استراتيجيات مبتكرة للوصول إلى الجمهور وجذب الانتباه عبر منصات التواصل الاجتماعي'},];

	const howItWorkList = [{
		subtitle: " الشهر الأول: التعريف بمهارات الصحافة الأساسية ",
		desc: " تعرف على أساسيات الصحافة وأهميتها، واكتشف أنواعها المختلفة مثل الأخبار، التقارير، والتحقيقات. تعلم المبادئ الأخلاقية والمسؤوليات التي يجب على الصحفيين الالتزام بها. ستتعرف أيضًا على الصحافة الاستقصائية وما يميزها، وكيفية كتابة تقرير استقصائي متكامل. ستتعلم مهارات جمع الأخبار واكتشاف القصص باستخدام أدوات مثل الإنترنت، الأرشيفات، والمقابلات، بالإضافة إلى كيفية تحليل البيانات للعثور على قصص جديدة. كما ستتعرف على كيفية العثور على المصادر وتقييم مصداقيتها وبناء شبكة من المصادر الموثوقة. في النهاية، ستشارك في ورشة عمل لاكتشاف قدراتك الشخصية وتطويرها، بإشراف مدرب متخصص. "
	}, {
		subtitle: "الشهر الثاني: الكتابة - الكتابة واستخدام وسائل التواصل الاجتماعي ",
		desc: ' ستتعلم كيفية كتابة تقارير استقصائية بفعالية، مع التركيز على اختيار العناوين الجذابة وكتابة المقدمات المشوقة، بالإضافة إلى استخدام لغة واضحة ودقيقة. كما ستكتسب مهارات استخدام وسائل التواصل الاجتماعي للعثور على الأخبار والمصادر، مع فهم الأخلاقيات اللازمة وتطوير محتوى جذاب على هذه المنصات. ستتعرف أيضًا على تقنيات إجراء مختلف أنواع المقابلات، سواء كانت شخصية، عبر الهاتف، أو البريد الإلكتروني، مع التدريب على طرح الأسئلة المناسبة وإدارة المواقف الصعبة. بالنسبة للصحفيين الاستقصائيين، ستتعلم كيفية استخدام أدوات التواصل الاجتماعي في البحث والتحقق من المعلومات. في النهاية، ستشارك في ورشة عمل لتطوير الشخصية الإعلامية بإشراف مدرب مختص. '
	}, {
		subtitle: " الشهر الثالث: العرض",
		desc: ' كيفية نشر المحتوى بصورته النهائية عبر صفحات أخبار الآن على كافة منصات التواصل الاجتماعي (انستغرام- فيسبوك- تويتر -تيكتوك) و سيتيح لك التدريب مشاركة الفيديوهات على حساباتك الخاصة لتكون على اتصال مباشر مع الجمهور لتتمكن من بناء قاعدة جماهيرية.'
	},];


	return (<div style={{overflow_x: 'hidden'}} className='arabic-page voice-page'>

		<DocumentMeta {...meta} />
		<div id='job-prgoram-page' className='home-container'>
			<Header/>
			<div className="home-banner-container job-program-hero">
				<div className='hero-workshop-section podcast-hero'>
					<div className='hero-text'>
						<h1 className='training-heading podcast-heading'> برنامج التدريب الإعلامي المتكامل</h1>
						<p>

							سرد القصص هو سلاحك الأقوى في الإعلام. مع تدريبنا العملي بقيادة خبراء، ستتعلم كيف تحوّل القصص
							إلى روايات مؤثرة وجذابة. خلال أشهر قليلة، ستتألق أمام الكاميرا، وتزداد ثقتك مع كل قصة
							تشاركها ويستمتع بها جمهورك.
						</p>
						<div className='cta-buttons'>
							<ReactWhatsapp className='whats-button' number="971-525-06-0035"> <img src={WhatsIcon} alt=''/>
							</ReactWhatsapp>
							<br/>
							<a href='tel:+971 525 06 0035'><img className='whats-button' src={CallIcon} alt=''/></a>
						</div>
						<div className='training-details'>
							<div className='workshop-date'><EventIcon/> <p> مدة البرنامج التدريبي : 3 أشهر </p></div>
							<div className='workshop-date'><EmojiPeopleIcon/> <p> الحضور : 3 مرات في الأسبوع/4 ساعات
								يوميا (مرن)</p></div>
							<div className='workshop-date'><ListAltIcon/> <p>الخطة التدريبية :</p></div>
							<div className='workshop-date'><p> الشهر الأول : التعريف بمهارات الصحافة الأساسية <span
								className='price-month'> (التكلفة : 5000 درهم اماراتي)</span></p></div>

							<div className='workshop-date'><p> الشهر الثاني : الكتابة و استخدام وسائل التواصل
								الاجتماعي <span className='price-month'> (التكلفة : 5000 درهم اماراتي)</span></p></div>
							<div className='workshop-date'><p> الشهر الثالث : العرض <span className='price-month'> (التكلفة : 5000 درهم اماراتي)</span>
							</p></div>

						</div>
						<a href='#contact-form'>
							<button className='cta-button'>احجز الآن</button>
						</a>
					</div>
					<div className='video-section'>
						<video style={{background: '#000'}}
						       src='https://cdn.alaan.tv/2024/10/14/20241014-1728906333981-original.mp4' muted loop
						       controls/>
					</div>
				</div>
			</div>
			<div className='workshop-details-section'>
				<div className='workshop-intro'>
					<h2 className='third-heading'>
						هل تعلم أن سرد القصص هو قوتك العظمى في عالم الإعلام؟ بينما يمكنك إتقان المهارات التقنية مع مرور
						الوقت، نحن هنا لنساعدك في العثور على قصص مؤثرة وسردها بطريقة جذابة! كيف تبدأ في اكتشاف القصص
						المدهشة من مصادرها الأصلية؟ كيف تقوم بتطوير شخصيتك الفريدة أمام الكاميرا وتصل إلى جمهورك؟ لا
						تقلق، فنحن هنا لدعمك في هذه الرحلة!

						لذلك، نقدم لك برنامجًا تدريبيًا عمليًا بقيادة كبار المحررين لمساعدتك على تحويل القصص المثيرة إلى
						روايات مشوقة. في غضون أشهر قليلة، ستتألق تحت الأضواء، وسترى كيف تعزز كل قصة مهاراتك وثقتك بنفسك.

					</h2>

				</div>
				<div className='workshop-features-section'>
					<h2 className='light-heading'>بنهاية هذا التدريب ستكون قادرًا على
					</h2>
					<div className='features features-wrap'>
						{youWillGetList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
				</div>
			</div>

			<div className='program-process'>
				<div className='workshop-features-section'>
					<h2 className='light-heading'>
						مقابل 15,000 درهم لمدة ثلاثة أشهر , كل شهر 5,000 درهم إليك الخطة التدريبية:
					</h2>
					<div className='features training-features'>
						{howItWorkList.map((item, i) => <Feature key={i} item={item}/>)}
					</div>
				</div>
			</div>

			<div className='testimonials'>
				<h2 className='primary-heading'> آراء متدربينا </h2>
				<div className=''>
					<Slider {...settings}>


						{testimonialList.map((item, i) => <Testimonial key={i} item={item}/>)}


					</Slider>
				</div>
			</div>


			<div className='booking workshops-booking' id="contact-form">
				<div className='left-section'>
					<div className='left-section-container'>
						<img src={BookingIcon} alt="Booking Icon"/>
						<p className='third-heading'>
							هل أنت مستعد لتحويل قصتك الى نجاح اعلامي؟
						</p>
						<p className='third-heading'>
							كن معنا في البرنامج التدريبي

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
								<label> الاسم الكامل</label>
								<input type="text" name='name' value={inputs.name || ""}
								       onChange={handleChange} placeholder='أدخل اسمك الكامل' required/>
							</div>
							<div className="input-wrapper">
								<label>البريد الالكتروني</label>
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
								<label> الجنسية</label>
								<input type="text" name='nationality' value={inputs.nationality || ""}
								       onChange={handleChange}
								       placeholder='أدخل جنسيتك ' required/>
							</div>
							<div className="input-wrapper">
								<label> مكان الاقامة</label>
								<input type="text" name='residence' value={inputs.residence || ""}
								       onChange={handleChange}
								       placeholder='أدخل مكان اقامتك الحالي ' required/>
							</div>
							<div className="input-wrapper">
								<label> تاريخ ميلادك</label>
								<input type="date" name='dob' value={inputs.dob || ""} onChange={handleChange}
								       placeholder='' required/>
							</div>

							<div className="input-wrapper">
								<label> الحالة الدراسية</label>
								<input type="text" name='education' value={inputs.education || ""}
								       onChange={handleChange}
								       placeholder='' required/>
							</div>
							<div className="input-wrapper">
								<label> مجال الدراسة </label>
								<input type="text" name='study' value={inputs.study || ""}
								       onChange={handleChange}
								       placeholder='' required/>
							</div>

							<div className="input-wrapper">
								<label className='long-label'> متى يمكنك الانضمام الى البرنامج؟</label>
								<input type="text" name='joining' value={inputs.joining || ""}
								       onChange={handleChange}
								       placeholder='' required/>
							</div>
							<div className="input-wrapper">
								<label className='longest-label'> هل أنت مرتاح مع الحضور في مقر القناة في دبي 3 مرات
									أسبوعيا؟ </label>
								<input type="text" name='commuting' value={inputs.commuting || ""}
								       onChange={handleChange}
								       placeholder='' required/>
							</div>



							<div className="input-wrapper">
								<input name="terms" type='checkbox' required value="1" onChange={handleChange}
								       checked={(inputs.terms || '') ? "checked" : ''}/>
								<span>أنا أوافق على <Link to='/terms'> الشروط و الأحكام </Link> </span>
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

export default JobProgram
