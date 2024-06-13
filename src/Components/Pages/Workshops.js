import React from 'react'
import { Link } from "react-router-dom";
import Header from '../Common-components/Header'
import Footer from '../Common-components/Footer'
import Advertise from '../Common-components/Advertise'
import BannerBackground from '../../Assets/background.png'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import ServiceMoreIcon from '../../Assets/services-more-icon.svg'
import PodcastIcon from '../../Assets/podcast-icon.svg'
import PodcastIcon2 from '../../Assets/podcast-icon2.svg'
import MediaWorkshopIcon from '../../Assets/media-workshop-icon.svg'
import PersonalBrandingIcon from '../../Assets/Perspnal-branding-icon.svg'

import DocumentMeta from 'react-document-meta';

const Workshops = () => {
  
  const meta = {
    title: 'Our Workshops',
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
            Our Workshops
                        </h1>
            <p className='primary-text' >
            We are excited to offer an array of workshops designed to enhance your media skills and expand your creative horizons.
        </p>
          </div>
         
        </div>
        <div className=''>
        <div className='home-bannerImageLeft-container' >
            <img src={BannerBackgroundLeft} alt="background" />
          </div>
           <div className='our-services2'>
           <div className='our-services-container2 workshops-services'>
            {/*<div className='service-card'>
              <img src={MagicTouchClinicIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Magic Touch Clinic           </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo</p>
              <div className='sevice-more-icon'><img src={ServiceMoreIcon} alt="More Icon" /></div>
              </div>
            </div>*/}
            {/*<div className='service-card'>
              <img src={PodcastIcon2} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Podcast Workshop      </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Our Podcast Workshop offers essential skills for successful podcasting, from creating your concept to production and distribution.
</p>
              <div className='sevice-more-icon'><Link to="/our-workshops/podcast"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
          </div>*/}
            {/*<div className='service-card'>
              <img src={MediaWorkshopIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Media Workshop         </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Our Media Workshop is tailored to enhance your media presence and develop your skills as a presenter.
</p>
              <div className='sevice-more-icon'><Link to="/our-workshops/media"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            </div>*/}
            {/*<div className='service-card'>
              <img src={PersonalBrandingIcon} alt='Personal Branding Icon'/>
              <h2 className='third-heading' >
              Personal Branding Workshop
        </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Deadly Mistakes and Golden Opportunities for Your Personal Brand
</p>
              <div className='sevice-more-icon'><Link to="/our-workshops/personal-branding"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            </div>*/}
            <div className='service-card'>
              <img src={PodcastIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Voice Over Workshop      </h2>
              <div className='service-desc'>
              <p className='third-text'>
              Unlock the Power of Your Voice: Join our Voice Over Workshop!
</p>
              <div className='sevice-more-icon'><Link to="/our-workshops/voice-over"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
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

export default Workshops