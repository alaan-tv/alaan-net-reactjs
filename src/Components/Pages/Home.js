import React from 'react'
import { Link ,NavLink } from "react-router-dom";
import Header from '../Common-components/Header'
import Footer from '../Common-components/Footer'
import Advertise from '../Common-components/Advertise'
import BannerBackground from '../../Assets/background.png'
import BannerImage from '../../Assets/3.webp'
import BannerImageMobile from '../../Assets/3mobile.webp'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import AlaanTvLogo from '../../Assets/alaan-tv-logo.svg'
import AkhbarAlaanLogo from '../../Assets/akhbar-aalan-logo.svg'
import AishAlaanLogo from '../../Assets/aish-alaan-logo.svg'
import TwitterIcon from '../../Assets/twitter.svg'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';
import OurServices from '../../Assets/our-services-image.svg'
import OurWorkshops from '../../Assets/our-workshop-image.svg'
import ArrowIcon from '../../Assets/E-arrow.svg'
import ArrowIconMobile from '../../Assets/e-arrow-mobile.svg'

import DocumentMeta from 'react-document-meta';


const Home = () => {
  const meta = {
    title: 'Al Aan',
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
        <Header/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container' >
            <img src={BannerBackground} alt="background" />
          </div>
          <div id="about-us"  className='home-text-section home-text-main-section'>
            <h1 className='primary-heading' >
            Your dedicated partner for comprehensive digital services
            </h1>
            <p className='primary-text' >
            We take immense pride in our corporate business, which encompasses captivating entertainment, insightful news, and most importantly, a suite of digital offerings designed to empower the youth.             </p>
          </div>
         
        </div>
        <div className='home-image-container'>
        <div className='home-bannerImageLeft-container' >
            <img src={BannerBackgroundLeft} alt="background" />
          </div>
            <picture>
     <source media='(max-width: 768px)' srcSet={BannerImageMobile} />
     <source media='(min-width: 768px)' srcSet={BannerImage} />
     <img src={BannerImage} className='banner-image' alt='hero' />
 </picture>

          </div>
          <div className='home-text-section home-text-main-section'>
            <h2 className='secondary-heading' >
            Toolkit built for empowering futures            </h2>
            <p className='secondary-text' >
            Our commitment is clear: to provide the tools and resources that enable young individuals to find jobs, enhance their careers, and achieve their aspirations in an ever-evolving digital landscape.</p>         
            </div>
          <div id="our-brands" className='our-brands'>
          <h2 className='secondary-heading' >
            Our Brands
            </h2>
             <div className='our-brands-container'>
              <div className='brand-card'>
               <img src={AlaanTvLogo} alt='Alaan Tv'/>
               <h2 className='third-heading' >
               Al Aan TV            </h2>
               <p className='third-text'>
               Al Aan TV, a satellite television channel broadcasting to the Arab world from its headquarters in Dubai. Aspiring to become the Dubai Arab Media Channel.
               </p>
               <div className='divider2'></div>
               <div className="brand-links">
<a target='_blank' rel="noreferrer" href="https://www.facebook.com/alaantv" ><FacebookRoundedIcon  className='social-icons'/></a>
<a target='_blank' rel="noreferrer"  href="https://twitter.com/alaantv"><img className="social-icons" alt="Social icons" src={TwitterIcon} /></a>
<a target='_blank' rel="noreferrer"  href="https://www.instagram.com/alaantv/"><InstagramIcon className='social-icons'/></a>
<a target='_blank' rel="noreferrer"  href="https://www.youtube.com/user/alaantube"><YoutubeIcon className='social-icons'/></a>
<a target='_blank' rel="noreferrer"  href="https://www.alaan.tv/"><LinkIcon className='social-icons link-icon' /></a>

</div>
              </div>
              <div className='brand-card'>
              <img src={AkhbarAlaanLogo} alt='Akhbar Alaan'/>
              <h2 className='third-heading' >
              Akhbar Al Aan          </h2>
              <p className='third-text'>
              A leading news platform bringing you trusted news from around the world. We believe in the power of stories to bring about change and foster a culture of optimism.               </p>
              <div className='divider2'></div>
              <div className="brand-links">
              <a target='_blank' rel="noreferrer" href="https://www.facebook.com/akhbaralaan" ><FacebookRoundedIcon  className='social-icons'/></a>
<a target='_blank' rel="noreferrer"  href="https://twitter.com/akhbar"><img className="social-icons" alt="Social icons" src={TwitterIcon} /></a>
<a target='_blank' rel="noreferrer"  href="https://www.instagram.com/akhbaralaan/"><InstagramIcon className='social-icons'/></a>
<a target='_blank' rel="noreferrer"  href="https://www.youtube.com/akhbaralaan"><YoutubeIcon className='social-icons'/></a>
<a target='_blank' rel="noreferrer"  href="https://www.akhbaralaan.net/"><LinkIcon className='social-icons link-icon' /></a>


</div>
              </div>
              <div className='brand-card'>
              <img src={AishAlaanLogo} alt='Aish Alaan Logo'/>
              <h2 className='third-heading' >
              Aish Al Aan          </h2>
              <p className='third-text'>
              An Arab platform designed to convey the voice of Arab youth, featuring daily topics across various fields, with thousands of followers and contributions.   </p>
              <div className='divider2'></div>
              <div className="brand-links">

              <a target='_blank' rel="noreferrer"  href="https://www.akhbaralaan.net/3eeshalaan-cafe/"><LinkIcon className='social-icons link-icon' /></a>

</div>
              </div>
            </div>
            </div>  
            <div className='our-features'>
              <div className='our-services'>
              <div className='our-services-container'>
               <Link to='/our-services'> <img src={OurServices} alt="" /></Link>
               <div className='features-desc'>
                <h2 className='services-heading'>Our Services</h2>
                <picture>
     <source media='(max-width: 768px)' srcSet={ArrowIconMobile} />
     <source media='(min-width: 768px)' srcSet={ArrowIcon} />
     <Link to='/our-services'><img src={ArrowIcon} className='banner-image' alt='hero' /></Link>
 </picture>
               </div>
              </div>
  
              </div>
              <div className='our-workshops'>
              <div className='our-services-container'>
               <Link to="/our-workshops"> <img src={OurWorkshops} alt="" /></Link>
               <div className='features-desc'>
                <h2 className='services-heading'>Our Workshops</h2>
                <picture>
     <source media='(max-width: 768px)' srcSet={ArrowIconMobile} />
     <source media='(min-width: 768px)' srcSet={ArrowIcon} />
     <Link to="/our-workshops"> <img src={ArrowIcon} className='banner-image' alt='hero' /> </Link>
 </picture>
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

export default Home