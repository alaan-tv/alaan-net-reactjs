import React ,{useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./service.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Header from '../../Common-components/LightHeader'
import Footer from '../../Common-components/Footer'
import MagicStudioVideo from '../../../Assets/4.jpg'
import MagicStudioVideoMobile from '../../../Assets/4mobile.png'
import FeatureIcon1 from '../../../Assets/feature-icon1.svg'
import FeatureIcon2 from '../../../Assets/feature-icon2.svg'
import FeatureIcon3 from '../../../Assets/feature-icon3.svg'
import FeatureIcon4 from '../../../Assets/feature-icon4.svg'
import TrainerImage from '../../../Assets/christin.webp'
import TistiImage1 from '../../../Assets/testi-image1.svg'
import TistiImage2 from '../../../Assets/testi-image2.png'
import TistiImage3 from '../../../Assets/testi-image3.png'
import BookingIcon from '../../../Assets/book-icon.svg'
import Avatar from '../../../Assets/avatar.svg'
const MagicTouchClinic = () => {
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
            Transform Your Online Image with Magic Touch Clinic
            </h1>
            <p className='primary-text light-text' >
            Get Hired Faster by Showcasing Your Best Self!
          </p>
            <a className='service-cta primary-button' href="#contact-form">Book Now!</a>
            <div className='home-image-container banner-service-image'>
        
            <picture>
     <source media='(max-width: 768px)' srcSet={MagicStudioVideoMobile} />
     <source media='(min-width: 768px)' srcSet={MagicStudioVideo} />
     <img src={MagicStudioVideo} className='banner-image' alt='hero' />
 </picture>

          </div>
            
          </div>
         
        </div>
        </div>
        
        
        </div>
        <div className='home-container'>
        
         <div className='features'>
          < h1 className='primary-heading'>
          With only AED 1,200 You'll Get
          </h1>
          <div className='features-container'>
            <div className='feature'>
             <img src={FeatureIcon1} alt="Feature Icon" className='feature-icon' />
             <p className='feature-heading'>Personal Career Boost</p>
             < p className='feature-desc third-text'> RGet a 30-minute one on one session with our expert to supercharge your career.</p>
            </div>
            <div className='feature'>
            <img src={FeatureIcon2} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>Complete Review
</p>
             < p className='feature-desc third-text'> We'll make sure your digital presence such as (LinkedIn Profile) are excellent.

</p>            </div>
            <div className='feature'>
            <img src={FeatureIcon3} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>Pro Advice
</p>
             < p className='feature-desc third-text'> Benefit from our experts' recommendations and tips.

</p>            </div>
            <div className='feature'>
            <img src={FeatureIcon4} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>Guidance Just for You
</p>
             < p className='feature-desc third-text'> We'll give you personalized advice for your career.

</p>            </div>
          </div>
         </div>
         <div className='trainers'>
         <h1 className='primary-heading'>
        Our Expert 
                 </h1>
                 <div className='trainers-container'>
                    <div className='trainer-image'>
                      <img src={TrainerImage} alt='trainer photo'/>
                      <h4>Christine Maurice</h4>
                      <a href='https://www.linkedin.com/in/christine-maurice-seif' ><p><LinkedInIcon /></p></a>
                    </div>
                    <div className='trainer-desc'>
                        <p>Introducing Christine, an HR pro with 12+ years in talent acquisition and coaching. She's
							transformed careers across industries from automotive to healthcare. Christine excels at
							identifying and hiring top talent, elevating organizations.</p>
                            <p>With deep industry insight, she knows what makes a standout CV and digital presence.
							Connect with her to make an unforgettable impression. Unlock your potential and your dream
							career with Christine!</p>
                    </div>
                 </div>
         </div>
         <div className='features'>
          < h1 className='primary-heading'>
          How it works
          </h1>
          <div className='features-container'>
            <div className='feature'>
             <img src={FeatureIcon1} alt="Feature Icon" className='feature-icon' />
             <p className='feature-heading'>1-Register and Pay</p>
             < p className='feature-desc third-text'> Begin by registering and making the payment of AED 1,200.

</p>
            </div>
            <div className='feature'>
            <img src={FeatureIcon2} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>2-Submission
</p>
             < p className='feature-desc third-text'> Provide your CVs and LinkedIn profile.

</p>            </div>
            <div className='feature'>
            <img src={FeatureIcon3} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>3-In-Depth Analysis</p>
             < p className='feature-desc third-text'> Our experts find errors and inconsistencies.

</p>            </div>
            <div className='feature'>
            <img src={FeatureIcon4} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>4-Clear Feedback</p>
             < p className='feature-desc third-text'> Receive actionable advice and issue alerts.

</p>            </div>
<div className='feature'>
            <img src={FeatureIcon1} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>5-Expert Consultation</p>
             < p className='feature-desc third-text'> Our expert will contact you to book a 30-minute session to Implement recommended changes for a standout profile.



</p>            </div>
          </div>
         </div>
         
         <div className='booking clinic' id='contact-form'>
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
           <div className='form-section' id='contact-form'>
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
            <label for="first">LINKEDIN PROFILE</label>
            <input type="text" placeholder='Enter you linkedin profile'/>
            </div>
            <div class="input-wrapper">
            <label for="first">UPLOUD CV</label>
            <input type="file" placeholder='Uploud your CV'/>
            </div>
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

export default MagicTouchClinic