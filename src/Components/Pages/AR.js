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
import OurServices from '../../Assets/our-services-arabic.svg'
import OurWorkshops from '../../Assets/our-workshops-arabic.svg'

const AR = () => {
  return (
    <div>
       
        <div className='home-container'>
        <Header/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container' >
            <img src={BannerBackground} alt="background" />
          </div>
          <div id="about-us"  className='home-text-section home-text-main-section arabic-home-text-section'>
            <h1 className='primary-heading' >
            شريكك المُفضل في عالم الخدمات الرقمية الشاملة والمتطورة
            </h1>
            <p className='primary-text' >
            نحن نفخر بشكل كبير بأعمالنا التجارية الشركاتية، التي تشمل الترفيه المثير، والأخبار المفيدة، والأهم من ذلك، مجموعة من الخدمات الرقمية المصممة لتمكين الشباب.





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
            عدة أدوات مصممة لتمكين المستقبل
           </h2>
            <p className='secondary-text' >
            التزامنا واضح: توفير الأدوات والموارد التي تمكّن الشبان من العثور على وظائف، وتعزيز مساراتهم المهنية، وتحقيق طموحاتهم في منظر رقمي يتطور باستمرار.





</p>         
            </div>
          <div id="our-brands" className='our-brands'>
          <h1 className='secondary-heading' >
            قنواتنا
            </h1>
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
            <div className='our-features'>
             
              
              <div className='our-services'>
              <div className='our-services-container'>
               <Link to="/our-services"> <img src={OurServices} /></Link>
              </div>
  
              </div>
              <div className='our-workshops'>
              <div className='our-services-container'>
               <Link to="/our-workshops"> <img src={OurWorkshops} /></Link>
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