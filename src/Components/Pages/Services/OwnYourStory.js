import React ,{useState} from 'react'
import "./service.css"
import { useCollapse } from 'react-collapsed'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Header from '../../Common-components/LightHeader'
import Footer from '../../Common-components/Footer'
import Advertise from '../../Common-components/Advertise'
import Banner from '../../../Assets/1.jpg'
import BannerMobile from '../../../Assets/1mobile.png'
import FeatureIcon1 from '../../../Assets/feature-icon1.png'
import FeatureIcon2 from '../../../Assets/feature-icon2.png'
import FeatureIcon3 from '../../../Assets/feature-icon3.png'
import FeatureIcon4 from '../../../Assets/feature-icon4.png'
import BookingIcon from '../../../Assets/book-icon.svg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const OwnYourStory = () => {
    const [value, setValue] = useState()
    const { getCollapseProps, getToggleProps, isExpanded  } = useCollapse()



  return (
    <div>
         <div className='hero-section'>
      
      <div className='home-container'>
      <Header />
      <div className='home-banner-container banner-service'>
        
        <div className='home-text-section'>
          <h1 className='primary-heading light-heading' >
          Master Your Story: Stand Out with Our Top-Notch Content and Media Expertise
          </h1>
          <p className='primary-text light-text' >
          What do people know about you, your product or service, your success story, what sets you apart, and how you excel? Al Aan can craft and distribute compelling content, ensuring you control your narrative. Don't worry about the media; we've got you covered.  In today's digital age, with AI, social media, ratings, and reviews, it's crucial to control your story, and we empower you to do so.
        </p>
          <a className='service-cta primary-button' href="#contact-form">Contact Us!</a>
          <div className='home-image-container banner-service-image'>
      
          <picture>
   <source media='(max-width: 768px)' srcSet={BannerMobile} />
   <source media='(min-width: 768px)' srcSet={Banner} />
   <img src={Banner} className='banner-image' alt='hero' />
</picture>

        </div>
          
        </div>
       
      </div>
    </div>
    </div>
    <div className='home-container'>
        
    <div className='features'>
          < h1 className='primary-heading'>
You'll get          </h1>
          <div className='features-container'>
            <div className='feature'>
             <img src={FeatureIcon1} alt="Feature Icon" className='feature-icon' />
             <p className='feature-heading'>Custom Messaging
</p>
             < p className='feature-desc third-text'> You provide the key message, we handle the rest, ensuring your story is heard by the right audience through our extensive regional network.

</p>
            </div>
            <div className='feature'>
            <img src={FeatureIcon2} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>Comprehensive Services
</p>
             < p className='feature-desc third-text'> Benefit from professional photoshoots in our studio for all your PR needs, and receive content tailored for your digital and social platforms.

</p>            </div>
            <div className='feature'>
            <img src={FeatureIcon3} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>Image Management
</p>
             < p className='feature-desc third-text'> From hair and makeup to dress code advice, we've got you covered, ensuring you look your best on camera.

</p>            </div>
            <div className='feature'>
            <img src={FeatureIcon4} alt="Feature Icon" className='feature-icon' />
            <p className='feature-heading'>Expert Guidance
</p>
             < p className='feature-desc third-text'> Regardless of experience, our experts offer support and training to prepare you for your on-camera appearances.

</p>            </div>
          </div>
         </div>

    <div className='packages'>
    < h1 className='secondary-heading'>
        Select your package below now! </h1>

       
        <div className='packages-container'>
        <div className='package'>
                <h4 className='package-title'>Basic
</h4>
<h3 className='package-price'>AED 4,900</h3>
<div className='divider2'></div>
<div className='package-decription'>
 
<div className='desc-item'><CheckCircleIcon /><p><strong>Precision Video Shooting:</strong><p> Let our seasoned videographers capture your story with creativity and precision, turning moments into masterpieces.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Offsite Camera Man Expertise:</strong><p> skilled professionals bring the expertise to your chosen location, ensuring authenticity in every shot.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Raw Footage, Your Freedom:</strong><p> Beyond shooting, we provide you with raw footage—yours to edit, share, and shape your narrative on your terms.</p></p></div>

</div>
            </div>
            <div className='package'>
                <h4 className='package-title'>Studio
</h4>
<h3 className='package-price'>AED 12,500</h3>
<div className='divider2'></div>
<div className='package-decription'>
 
<div className='desc-item'><CheckCircleIcon /><p><strong>Pre-Interview Collaboration:</strong><p> Our team collaborates with you beforehand to fully understand and agree on the story's key points and narrative.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Full-Service Preparation:</strong><p> We provide a comprehensive readying process, including hair and makeup, a professional photoshoot, and an on-camera practice session for confidence.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Professional Production:</strong><p>A 3-minute pre-recorded story, shot in Al Aan's studios, with non-Arabic speakers accommodated through subtitles. The story airs during a prime time slot on Al Aan TV.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Extensive Distribution and Affordability:</strong><p>Your story gets published on akhbaralaan.net (10m+ monthly views) and shared on various social media, with links provided for your sharing.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Elevate Your Presence:</strong><p> For an additional AED 10,000, extend your content and feature in a dedicated Business Show. Amplify your reach and impact with this exclusive option, putting your story in the spotlight.</p></p></div>
<div className='collaps'>
      <h4> Add a campaign</h4>
      <p className='sub-title'>(Adding AED10,000 to the cost)</p>
      <button className='collaps-button' {...getToggleProps()}>
        {isExpanded ? 'Hide details' : '  Show details'}
      </button>
      <section {...getCollapseProps()}>
      <div className='package-decription'>

      <div className='desc-item'><CheckCircleIcon /><p><strong>Pre-Release Boost:</strong><p> Initiate a buzz with a campaign before your story airs.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>TV & Online Promo:</strong><p>A 30-second ad will run 60 times on Al Aan TV and be shared online, building anticipation.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Broad Exposure:</strong><p>Promo will be featured on our website and social media for extra impact.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Effective Messaging:</strong><p>Promos include key points, ensuring your message reaches viewers even if they miss the main event.</p></p></div>

</div>
      </section>
    </div>
</div>
            </div>
            <div className='package'>
                <h4 className='package-title'>Office
</h4>
<h3 className='package-price'>AED 19,500</h3>
<div className='divider2'></div>
<div className='package-decription'>
 
<div className='desc-item'><CheckCircleIcon /><p><strong>Comprehensive Production:</strong><p> Enjoy a 3-minute pre-recorded, professionally edited story, with options for Arabic subtitles, airing on Al Aan TV's prime slot and a detailed article on akhbaralaan.net (with over 10m views/month).</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>On-Site Storytelling:</strong><p> Our team can visit your office or facility to capture your story directly from the source, including beauty shots to enhance the narrative.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Wide Dissemination:</strong><p>Your story, accompanied by a professional photoshoot, will be shared across multiple social media platforms for maximum reach.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>All-Inclusive Package:</strong><p> On-site services include hair and makeup if required.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Elevate Your Presence:</strong><p> For an additional AED 10,000, extend your content and feature in a dedicated Business Show. Amplify your reach and impact with this exclusive option, putting your story in the spotlight.</p></p></div>
<div className='collaps'>
      <h4> Add a campaign</h4>
      <p className='sub-title'>(Adding AED10,000 to the cost)</p>
      <button className='collaps-button' {...getToggleProps()}>
        {isExpanded ? 'Hide details' : '  Show details'}
      </button>
      <section {...getCollapseProps()}>
      <div className='package-decription'>

      <div className='desc-item'><CheckCircleIcon /><p><strong>Pre-Release Boost:</strong><p> Initiate a buzz with a campaign before your story airs.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>TV & Online Promo:</strong><p>A 30-second ad will run 60 times on Al Aan TV and be shared online, building anticipation.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Broad Exposure:</strong><p>Promo will be featured on our website and social media for extra impact.</p></p></div>
<div className='desc-item'><CheckCircleIcon /><p><strong>Effective Messaging:</strong><p>Promos include key points, ensuring your message reaches viewers even if they miss the main event.</p></p></div>

</div>
      </section>
    </div>
</div>
            </div>
           

        </div>
    </div>
    <div className='booking' id="contact-form">
          <div className='left-section'>
          < div className='left-section-container'>
            <img src={BookingIcon} alt="Booking Icon" />
            <p className='third-heading'>
            Get Your Tailored Quote Now and Elevate Your Advertising Game with Alaan</p>
            <h1 className='secondary-heading'>
            Contact Now!
            </h1>
          </div>
          </div>
          <div className='right-section'>
           <div className='form-section' >
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
            <label for="first">Company name</label>
            <input type="text" placeholder='Enter your company profile (optional) '/>
            </div>
       {/*<div class="input-wrapper">
        <input type='checkbox' />  
<span>I agree with <a href='https://www.alaan.net/terms/'>Terms & Conditions</a> </span>
  </div>*/}
       <div class="input-wrapper">
        <input type='submit' value="Send" />
       </div>
         
           
             </form>
           </div>
          </div>
         </div>
         <Advertise />
         </div>
         <Footer />
    </div>
  )
}

export default OwnYourStory