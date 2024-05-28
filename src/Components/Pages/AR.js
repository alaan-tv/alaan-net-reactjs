import React from 'react'
import { Link ,NavLink } from "react-router-dom";

import Header from '../Common-components/ArabicHeader'
import Footer from '../Common-components/ArabicFooter'
import Advertise from '../Common-components/ArabicAdvertise'
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

const AR = () => {
  const meta = {
    title: 'الآن',
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
          <div id="about-us"  className='home-text-section home-text-main-section arabic-home-text-section'>
            <h1 className='primary-heading' >
            خيارك الأفضل في عالم الخدمات الإعلانية و الورشات التدريبية  الشاملة و المتطورة
            </h1>
            <p className='primary-text' >
            في عالمنا المليء بالتنوع، نتميز بتقديم باقة استثنائية من البرامج الترفيهية والأخبارية، بالإضافة إلى حلولنا المُبتكرة، المصممة بعناية لتوفير إلهام للشباب وتعزيز قدراتهم

</p>
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
            منتجات متنوعة مصممة لك 
           </h2>
            <p className='secondary-text' >
             نحن هنا لنوفر للشباب الأدوات والموارد الضرورية التي تمكّنهم من اكتشاف فرص العمل، تطوير مسارهم المهني، وتحقيق تطلعاتهم في عالم رقمي يتغير بسرعة





</p>         
            </div>
          <div id="our-brands" className='our-brands'>
          <h2 className='secondary-heading' >
            قنواتنا
            </h2>
             <div className='our-brands-container arabic-brands'>
              <div className='brand-card'>
               <img src={AlaanTvLogo} alt='Alaan Tv'/>
               <h2 className='third-heading' >
               تلفزيون الآن          </h2>
               <p className='third-text'>
               قناة تلفزيونية تبث للوطن العربي من دبي. تتطلع لتكون قناة "دبي للإعلام العربي" وتلبي احتياجات جمهورها من خلال الديناميكية والشمولية والابتكار.


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
               أخبار الآن</h2>
              <p className='third-text'>
              منصة إخبارية رائدة تقدم لك أخبارًا موثوقة من جميع أنحاء العالم وقصص وتقارير حصرية تجسّد اهتمامات الشباب العربي. لأن القصّة ملك الجميع                </p>
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
              عيش الآن         </h2>
              <p className='third-text'>
              منصة عبر الإنترنت تتيح المجال أمام زوارها مساحة حرة لطرح وتبادل الأسئلة والأجوبة / المناقشات الاجتماعية بمواضيع متنوعة تركز على قضايا الشباب العربي.                 </p>
              <div className='divider2'></div>
              <div className="brand-links">

              <a target='_blank' rel="noreferrer"  href="https://www.akhbaralaan.net/3eeshalaan-cafe/"><LinkIcon className='social-icons link-icon' /></a>

</div>
              </div>
            </div>
            </div>  
            <div className='our-features home-arabic-features'>
             
              
              <div className='our-services'>
              <div className='our-services-container'>
               <Link to="/our-products"> <img src={OurServices} /></Link>
               <div className='features-desc'>
                <h2 className='services-heading'>خدماتنا</h2>
                <picture>
     <source media='(max-width: 768px)' srcSet={ArrowIconMobile} />
     <source media='(min-width: 768px)' srcSet={ArrowIcon} />
     <Link to='/our-products'><img src={ArrowIcon} className='banner-image' alt='hero' /></Link>
 </picture>
               </div>
              </div>
  
              </div>
              <div className='our-workshops'>
              <div className='our-services-container'>
               <Link to="/our-workshops/ar"> <img src={OurWorkshops} /></Link>
               <div className='features-desc'>
                <h2 className='services-heading'>ورشاتنا التدريبية</h2>
                <picture>
     <source media='(max-width: 768px)' srcSet={ArrowIconMobile} />
     <source media='(min-width: 768px)' srcSet={ArrowIcon} />
     <Link to='/our-workshops/ar'><img src={ArrowIcon} className='banner-image' alt='hero' /></Link>
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

export default AR