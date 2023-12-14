import React from 'react'
import { Link } from "react-router-dom";
import Header from '../Common-components/Header'
import Footer from '../Common-components/Footer'
import Advertise from '../Common-components/Advertise'
import BannerBackground from '../../Assets/background.png'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import MagicTouchIcon from '../../Assets/magic-touch-icon.png'
import ServiceMoreIcon from '../../Assets/services-more-icon.png'
import OwnYourStoryIcon from '../../Assets/own-your-story-icon.png'
import BeAPresenterIcon from '../../Assets/be-a-presenter.png'
import MagicTouchStudio from './MagicTouchStudio'

const Services = () => {
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
            Our Services
            </h1>
            <p className='primary-text' >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.          </p>
          </div>
         
        </div>
        <div className='home-container'>
        <div className='home-bannerImageLeft-container' >
            <img src={BannerBackgroundLeft} alt="background" />
          </div>
           < div className='our-services2'>
           <div className='our-services-container2'>
            <div className='service-card'>
              <img src={MagicTouchIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Magic Touch Studio           </h2>
              < div className='service-desc'>
              <p className='third-text'>
              Empower candidates and employees in their quest for better career path!</p>
              <div className='sevice-more-icon'><Link to="/magic-touch-studio"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            </div>
            <div className='service-card'>
              <img src={OwnYourStoryIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Own your Story        </h2>
              < div className='service-desc'>
              <p className='third-text'>
              Engage clients with a concise promo video and expert media tips!</p>
              <div className='sevice-more-icon'><img src={ServiceMoreIcon} alt="More Icon" /></div>
              </div>
            </div>
            <div className='service-card'>
              <img src={BeAPresenterIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
              Be a Presenter         </h2>
              < div className='service-desc'>
              <p className='third-text'>
              Begin your media career journey with skilled specialized experts.</p>
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

export default Services