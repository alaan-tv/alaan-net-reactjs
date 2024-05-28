import React from 'react'
import { Link } from "react-router-dom";

import Header from '../Common-components/ArabicHeader'
import Footer from '../Common-components/ArabicFooter'
import Advertise from '../Common-components/ArabicAdvertise'
import BannerBackground from '../../Assets/background.png'
import BannerBackgroundLeft from '../../Assets/backgrount-left.png'
import ServiceMoreIcon from '../../Assets/services-more-icon.svg'
import PodcastIcon from '../../Assets/podcast-icon.svg'
import PodcastIcon2 from '../../Assets/podcast-icon2.svg'
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
            يسعدنا أن نقدم مجموعة متنوعة من الورش التدريبية المصممة خصيصًا لتطوير مهاراتكم الإعلامية وتوسيع آفاقكم الإبداعية.





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
ورشات البودكاست
                   </h2>
              <div className='service-desc'>
              <p className='third-text'>
              ورشة عمل البودكاست لدينا تقدم المهارات الأساسية لإنتاج بودكاست ناجح، بدءًا من تطوير فكرتك الخاصة وصولاً إلى الإنتاج والتوزيع
               </p>
              
            </div>
            <div className='sevice-more-icon'><Link to="/our-workshops/podcast"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>*/}
            {/*<div className='service-card'>
              <img src={MediaWorkshopIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
ورشات الميديا
                     </h2>
              <div className='service-desc'>
              <p className='third-text'>
              ورشة عملنا الإعلامية مصممة خصيصاً لتعزيز حضوركم الإعلامي وتطوير مهاراتكم كمقدمي برامج إخبارية أو ترفيهية





</p>
              
            </div>
            <div className='sevice-more-icon'><Link to="/our-workshops/media"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
              </div>*/}
              <div className='service-card'>
              <img src={PodcastIcon} alt='magic touch icon'/>
              <h2 className='third-heading' >
ورشات التعليق الصوتي
                   </h2>
              <div className='service-desc'>
              <p className='third-text'>
              طور مهاراتك في مجال التعليق الصوتي الذي سيترك بصمتك

اكتشف وطور مهاراتك الصوتية مع ورشة عمل احتراف التعليق الصوتي مع محمد علي!               </p>
              
            </div>
            <div className='sevice-more-icon'><Link to="/our-workshops/voice-over"><img src={ServiceMoreIcon} alt="More Icon" /></Link></div>
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