import React from 'react'
import { Link } from "react-router-dom";

import Header from '../Common-components/ArabicHeader'
import Footer from '../Common-components/ArabicFooter'
import Advertise from '../Common-components/ArabicAdvertise'
import BannerBackground from '../../Assets/background.png'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import ServiceMoreIcon from '../../Assets/services-more-icon.svg'
import PodcastIcon from '../../Assets/podcast-icon.svg'
import MediaWorkshopIcon from '../../Assets/media-workshop-icon.svg'
import DocumentMeta from 'react-document-meta';


const WorkshopsArabic = () => {
  const meta = {
    title: 'ورشاتنا التدريبية',
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
    <div className='home-container workshops-arabic'>
    <Header />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container' >
            <img src={BannerBackground} alt="background" />
          </div>
          <div className='home-text-main-section'>
            <h1 className='primary-heading' >
                ورشاتنا التدريبية
                        </h1>
            <p className='primary-text' >
            نحن متحمسون لتقديم مجموعة من ورش العمل المصممة لتعزيز مهاراتك في مجال الإعلام وتوسيع آفاق إبداعك.





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
            <div className='service-card'>
              <img src={PodcastIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
ورشات البودكاست
                   </h2>
              <div className='service-desc'>
              <p className='third-text'>
               تقدم المهارات الأساسية للبودكاست الناجح، ابتداءً من صياغة فكرتك إلى الإنتاج والتوزيع.</p>
              
            </div>
            <div className='sevice-more-icon'><Link to="/our-workshops/podcast"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            <div className='service-card'>
              <img src={MediaWorkshopIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
ورشات الميديا
                     </h2>
              <div className='service-desc'>
              <p className='third-text'>
              ورشة العمل الخاصة بوسائل الإعلام لدينا مصممة لتعزيز وجودك في وسائل الإعلام وتطوير مهاراتك كمقدم.





</p>
              
            </div>
            <div className='sevice-more-icon'><Link to="/our-workshops/media"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>
            </div>
          
           </div>

          </div>
        <Advertise />
        </div>
        <Footer />
    </div>  )
}

export default WorkshopsArabic