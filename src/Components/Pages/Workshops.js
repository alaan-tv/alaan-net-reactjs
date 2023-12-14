import React from 'react'
import Header from '../Common-components/Header'
import Footer from '../Common-components/Footer'
import Advertise from '../Common-components/Advertise'
import BannerBackground from '../../Assets/background.png'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import MagicTouchClinicIcon from '../../Assets/magic-touch-clinic.png'
import ServiceMoreIcon from '../../Assets/services-more-icon.png'
import PodcastIcon from '../../Assets/podcast-icon.png'
import MediaWorkshopIcon from '../../Assets/media-workshop-icon.png'
const Workshops = () => {
  return (
    <div>
    <div className='home-container'>
        <Header />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container' >
            <img src={BannerBackground} alt="background" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading' >
            Our Workshops
                        </h1>
            <p className='primary-text' >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.         </p>
          </div>
         
        </div>
        <div className='home-container'>
        <div className='home-bannerImageLeft-container' >
            <img src={BannerBackgroundLeft} alt="background" />
          </div>
           < div className='our-services2'>
           <div className='our-services-container2'>
            <div className='service-card'>
              <img src={MagicTouchClinicIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Magic Touch Clinic           </h2>
              < div className='service-desc'>
              <p className='third-text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo</p>
              <div className='sevice-more-icon'><img src={ServiceMoreIcon} alt="More Icon" /></div>
              </div>
            </div>
            <div className='service-card'>
              <img src={PodcastIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Podcast Workshop      </h2>
              < div className='service-desc'>
              <p className='third-text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo</p>
              <div className='sevice-more-icon'><img src={ServiceMoreIcon} alt="More Icon" /></div>
              </div>
            </div>
            <div className='service-card'>
              <img src={MediaWorkshopIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Media Workshop         </h2>
              < div className='service-desc'>
              <p className='third-text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo</p>
              <div className='sevice-more-icon'><img src={ServiceMoreIcon} alt="More Icon" /></div>
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