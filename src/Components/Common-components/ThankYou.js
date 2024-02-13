import React from 'react'
import TickIcon from './TickIcon'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Advertise from './Advertise'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import BannerBackground from '../../Assets/background.png'


const ThankYou = () => {
  return (
    <div>
         <div className='home-container'>
         <Header />
         <div className='home-bannerImage-container' >
            <img src={BannerBackground} alt="background" />
          </div>
    
        <div className='thankyou-page'>
        <TickIcon />
        <div className='home-bannerImageLeft-container' >
            <img src={BannerBackgroundLeft} alt="background" />
          </div>
        <h1> Thank You!</h1>
        <h3> Our team will contact you soon</h3>
        
        <Link to="/" >Go to Home page </Link>
        </div>
        
        <Advertise />
        </div>
        <Footer />
    </div>
  )
}

export default ThankYou