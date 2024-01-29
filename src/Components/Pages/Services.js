import React from 'react'
import { Link } from "react-router-dom";
import Header from '../Common-components/Header'
import Footer from '../Common-components/Footer'
import Advertise from '../Common-components/Advertise'
import BannerBackground from '../../Assets/background.png'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import MagicTouchIcon from '../../Assets/magic-touch-icon.svg'
import ServiceMoreIcon from '../../Assets/services-more-icon.svg'
import OwnYourStoryIcon from '../../Assets/own-your-story-icon.svg'
import BeAPresenterIcon from '../../Assets/be-a-presenter.png'
import MagicTouchClinicIcon from '../../Assets/magic-touch-clinic.svg'
import PersonalBrandingIcon from '../../Assets/Perspnal-branding-icon.svg'
import LivingIcon from '../../Assets/living-by-design-icon.svg'
import ContentIcon from '../../Assets/content-logo.svg'
import DocumentMeta from 'react-document-meta';



const Services = () => {
  const meta = {
    title: 'Our Services',
    description: 'I am a description, and I can create multiple tags',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  }
  return (
    <div>
       <DocumentMeta {...meta} />
    <div className='home-container'>
    <Header />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container' >
            <img src={BannerBackground} alt="background" />
          </div>
          <div className='home-text-main-section'>
            <h1 className='primary-heading' >
            Our Services
            </h1>
            <p className='primary-text' >
            We offer a variety of services designed to showcase your best self and ensure your story is heard loud and clear.
 </p>
          </div>
         
        </div>
        <div className=''>
        <div className='home-bannerImageLeft-container' >
            <img src={BannerBackgroundLeft} alt="background" />
          </div>
           <div className='our-services2'>
           <div className='our-services-container2'>
            <div className='service-card'>
              <img className='service-card-icon' src={MagicTouchIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Magic Touch Studio           </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Convert your resume into a video CV to showcase your skills and personality, making job hunting more effective.
</p>
             
            </div>
            <div className='sevice-more-icon'><Link to="/our-services/magic-touch-studio"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            <div className='service-card'>
              <img className='service-card-icon' src={MagicTouchClinicIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Magic Touch Clinic           </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Enhance Your Digital Persona at Magic Touch Clinic and Accelerate Your Job Search by Highlighting Your Greatest Qualities!
</p>
             
            </div>
            <div className='sevice-more-icon'><Link to="/our-services/magic-touch-clinic"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            <div className='service-card'>
              <img className='service-card-icon' src={OwnYourStoryIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Own your Story        </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Al Aan shapes your story and manages your media presence, ensuring you stand out and control your narrative in the digital age.
</p>
              
            </div>
            <div className='sevice-more-icon'><Link to="/our-services/own-your-story"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
              
            <div className='service-card'>
              <img src={BeAPresenterIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Be a Presenter         </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Begin your media career journey with skilled specialized experts.</p>
              <div className='sevice-more-icon'><Link to="/our-services/be-a-presenter"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            </div>
            <div className='service-card'>
              <img src={PersonalBrandingIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Personal Branding        </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Unlocking your authentic executive influence</p>
              <div className='sevice-more-icon'><Link to="/our-services/personal-branding"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            </div>
            <div className='service-card'>
              <img src={LivingIcon} alt='Living by design icon'/>
              <h2 className='third-heading' >
              Living By Design         </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Begin your media career journey with skilled specialized experts.</p>
              <div className='sevice-more-icon'><Link to="/our-services/living-by-design"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            </div>
            <div className='service-card'>
              <img src={ContentIcon} alt='Living by design icon'/>
              <h2 className='third-heading' >
              Content By Design         </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Your content, with a lot more of You in it.</p>
              <div className='sevice-more-icon'><Link to="/our-services/content-by-design"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            </div>
            </div>
          
           </div>

          </div>
        <Advertise />
        </div>
        <Footer />
    </div>
  )
}

export default Services