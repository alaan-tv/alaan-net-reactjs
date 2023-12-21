import React ,{useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./service.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Header from '../../Common-components/LightHeader'
import Footer from '../../Common-components/Footer'
import MagicStudioVideo from '../../../Assets/Video.png'
import MagicStudioVideoMobile from '../../../Assets/video-mobile.png'
import FeatureIcon1 from '../../../Assets/feature-icon1.png'
import FeatureIcon2 from '../../../Assets/feature-icon2.png'
import FeatureIcon3 from '../../../Assets/feature-icon3.png'
import FeatureIcon4 from '../../../Assets/feature-icon4.png'
import video from '../../../Assets/promo.mp4'
import TistiImage1 from '../../../Assets/testi-image1.png'
import TistiImage2 from '../../../Assets/testi-image2.png'
import TistiImage3 from '../../../Assets/testi-image3.png'
import BookingIcon from '../../../Assets/book-icon.png'
import Avatar from '../../../Assets/avatar.png'
const MagicTouchStudio = () => {
  const [value, setValue] = useState()
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    
    <div>
      
      <div className='hero-section'>
      
    <div className='home-container'>
     
    <Header />
      
        
        <div className='home-banner-container banner-service'>
        
          <div className='home-text-section'>
            <h1 className='primary-heading light-heading' >
            Transform your CV into a video masterpiece!
            </h1>
            <p className='primary-text light-text' >
            We'll turn your traditional resume into an amazing video CV, showcasing your personality, skills, and talents, making it easy for recruiters to see your true potential. Book now to elevate your job search!

          </p>
            <a className='service-cta primary-button' href="">Book Now!</a>
            <div className='home-image-container banner-service-image'>
        
            <picture>
     <source media='(max-width: 768px)' srcSet={MagicStudioVideoMobile} />
     <source media='(min-width: 768px)' srcSet={MagicStudioVideo} />
     <img src={MagicStudioVideo} alt='hero' />
 </picture>

          </div>
            
          </div>
         
        </div>
        </div>
        
        
        </div>
        <div className='home-container'>
        
         <div className='features'>
          < h1 className='primary-heading'>
          With only AED 895 you'll get
          </h1>
          <div className='features-container'>
            <div className='feature'>
             <img src={FeatureIcon1} alt="Feature Icon" className='feature-icon' />
             < p className='feature-desc third-text'> Tailored Interview Questions Highlighting Your Strengths</p>
            </div>
            <div className='feature'>
            <img src={FeatureIcon2} alt="Feature Icon" className='feature-icon' />
             < p className='feature-desc third-text'> Professional Video Shooting and great pictures for an Outstanding Presentation</p>
            </div>
            <div className='feature'>
            <img src={FeatureIcon3} alt="Feature Icon" className='feature-icon' />
             < p className='feature-desc third-text'> Expertly Produced and Edited Video CVs</p>
            </div>
            <div className='feature'>
            <img src={FeatureIcon4} alt="Feature Icon" className='feature-icon' />
             < p className='feature-desc third-text'> Optional Makeup Service for Camera-Ready Confidence</p>
            </div>
          </div>
         </div>
         <div className='video-section'>
         <video src={video} autoPlay muted loop controls/>
         </div>
         <div className='features'>
          < h1 className='primary-heading'>
          How it works
          </h1>
          <div className='features-container'>
            <div className='feature'>
             <img src={FeatureIcon1} alt="Feature Icon" className='feature-icon' />
             <p className='feature-heading'>1-Register and Pay</p>
             < p className='feature-desc third-text'> Register, make a payment to secure your appointment, and our team will promptly confirm your booking and assist with choosing a convenient date and time.</p>
            </div>
            <div className='feature'>
            <img src={FeatureIcon2} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>2-Studio Session and Questionnaire</p>
             < p className='feature-desc third-text'> Attend your studio session for a professional video shoot and questionnaire.</p>            </div>
            <div className='feature'>
            <img src={FeatureIcon3} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>3-Video Production and Editing</p>
             < p className='feature-desc third-text'> We'll expertly produce and edit your Video CV.</p>            </div>
            <div className='feature'>
            <img src={FeatureIcon4} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>4-Receive Your Ready-to-Use Video CV</p>
             < p className='feature-desc third-text'> You'll receive your polished Video CV for immediate use on platforms like LinkedIn to enhance your job prospects.</p>            </div>
          </div>
         </div>
         <div className='testimonails'>
         < h1 className='primary-heading'>
         Success seekers love Magic Touch
          </h1>
          <div className='testimonails-container'>
            <div className='testimonail'>
              <p className='testi-desc'>
              "I decided to give Magic Touch a try. They transformed my plain CV into an engaging video that truly showcased my skills."
              </p>
              <div className='divider2'></div>
              <div className='testi-info'>
                <img className='testi-image' src={TistiImage1} alt="customer photo"/>
                <div className='testi-name'>
                  <p className='name'><b>Omar Bin Ashoor</b></p>
                  <p>title</p>
                </div>
              </div>
            </div>
            <div className='testimonail'>
            <p className='testi-desc'>
            "Magic Touch proved to be a great investment. The video CV they crafted not only highlighted my qualifications but also showcased my personality."
              </p>
              <div className='divider2'></div>
              <div className='testi-info'>
                <img className='testi-image' src={TistiImage2} alt="customer photo"/>
                <div className='testi-name'>
                  <p className='name'><b>Mohannad Al Wadi</b></p>
                  <p>title</p>
                </div>
              </div>
            </div>
            <div className='testimonail'>
            <p className='testi-desc'>
            "Magic Touch proved to be a great investment. The video CV they crafted not only highlighted my qualifications but also showcased my personality."            </p>
              <div className='divider2'></div>
              <div className='testi-info'>
                <img className='testi-image' src={TistiImage3} alt="customer photo"/>
                <div className='testi-name'>
                  <p className='name'><b>Nada Ahmed</b></p>
                  <p>title</p>
                </div>
              </div>
            </div>
          </div>
         </div>
         <Carousel
         
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
   <div className='testimonail'>
              <p className='testi-desc'>
              "I decided to give Magic Touch a try. They transformed my plain CV into an engaging video that truly showcased my skills."
              </p>
              <div className='divider2'></div>
              <div className='testi-info'>
                <img className='testi-image' src={TistiImage1} alt="customer photo"/>
                <div className='testi-name'>
                  <p className='name'><b>Omar Bin Ashoor</b></p>
                  <p>title</p>
                </div>
              </div>
            </div>
            <div className='testimonail'>
            <p className='testi-desc'>
            "Magic Touch proved to be a great investment. The video CV they crafted not only highlighted my qualifications but also showcased my personality."
              </p>
              <div className='divider2'></div>
              <div className='testi-info'>
                <img className='testi-image' src={TistiImage2} alt="customer photo"/>
                <div className='testi-name'>
                  <p className='name'><b>Mohannad Al Wadi</b></p>
                  <p>title</p>
                </div>
              </div>
            </div>
            <div className='testimonail'>
            <p className='testi-desc'>
            "Magic Touch proved to be a great investment. The video CV they crafted not only highlighted my qualifications but also showcased my personality."            </p>
              <div className='divider2'></div>
              <div className='testi-info'>
                <img className='testi-image' src={TistiImage3} alt="customer photo"/>
                <div className='testi-name'>
                  <p className='name'><b>Nada Ahmed</b></p>
                  <p>title</p>
                </div>
              </div>
            </div>
</Carousel>
         <div className='booking'>
          <div className='left-section'>
          < div className='left-section-container'>
            <img src={BookingIcon} alt="Booking Icon" />
            <p className='third-heading'>
            Ready to make a lasting impression and accelerate your career with a compelling video CV?
            </p>
            <h1 className='secondary-heading'>
            Book Now!
            </h1>
          </div>
          </div>
          <div className='right-section'>
           <div className='form-section'>
            <form action=''>
            <div class="input-wrapper">
            <label for="first">FULL NAME</label>
            <input type="text" placeholder='Enter you name'/>
            </div>
            <div class="input-wrapper">
            <label for="first">EMAIL</label>
            <input type="text" placeholder='Enter you Email'/>
            </div>
            <PhoneInput
            label="PHONE NUMBER"
      placeholder="Enter phone number"
      value={value}
      country={'ae'}
      onChange={setValue}/>
       <div class="input-wrapper">
        <input type='checkbox' />  
<span>I agree with <a href='https://www.alaan.net/terms/'>Terms & Conditions</a> </span>
       </div>
       <div class="input-wrapper">
        <input type='submit' value="Pay Now!" />
       </div>
         
           
             </form>
           </div>
          </div>
         </div>
         <div className='guidebook'>
          <div className='guidebook-container'>
            <div className='desc'>
            <h1 className='secondary-heading light-heading2'>
            Get your free copy of
            </h1>
            <h1 className='secondary-heading strong-heading'>
            The Visual Resume Guidebook!            </h1>
            <p>
            Discover the secrets to crafting captivating video CVs that can change the game in your job hunt! "The Visual Resume Guidebook" is your gateway to creating resumes that resonate.
            </p>
            <div className='get-guidebook'>
             <input type='text' placeholder='Enter your email address' className='email-input' />
             <input type='submit' value="Get Free Guidebook" className='submit-button'/>
            </div>
            </div>
            <div className='avatar'>
              <img className='' src={Avatar} />
            </div>
          </div>
         </div>
       
          </div>
          
        <Footer />
    </div>
  )
}

export default MagicTouchStudio