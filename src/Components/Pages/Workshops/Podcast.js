import React, {useState} from 'react'
import './workshop.css'
import Header from '../../Common-components/ArabicHeader'
import WorkshopImage from '../../../Assets/podcast-hero-image.webp'
import EventIcon from '@mui/icons-material/Event'
import WorkshopFeatureImageIcon from '../../../Assets/workshop-feature-image.svg'
import video from '../../../Assets/promo.mp4'
import TrainerImage from '../../../Assets/Mohammad-ali.webp'
import TrainerImage2 from '../../../Assets/maha.webp'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YoutubeIcon from '@mui/icons-material/YouTube'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import BookingIcon from '../../../Assets/booking2.svg'
import Footer from '../../Common-components/ArabicFooter'
import Advertise from '../../Common-components/ArabicAdvertise'


const Podcast = () => {
    const [value, setValue] = useState()
    return (
      <div>
      <div className='home-container'>
          <Header />
          <div className="home-banner-container">
              <div className='hero-workshop-section podcast-hero'>
                  
                  <div className='hero-text'>
                      <h1  className='light-heading podcast-heading'>أطلق العنان لصوتك!   </h1>
                      <p> طور مهاراتك في مجال البودكاست الذي سيترك بصمتك</p>
                      <p>اكتشف وطور وأطلق البودكاست الخاص بك مع ورش عمل بودكاست أخبار الآن!</p>
                      <div className='workshop-date'><EventIcon /> <p>تاريخ الورشة: 4-6 ديسمبر </p></div>
                      <button className='cta-button' >احجز الآن</button>
                  </div>
                  <div className='workshop-image'>
                      <img src={WorkshopImage} />
                  </div>
              </div>
             
          </div>
          <div className='workshop-details-section'>
                  <div className='workshop-intro'>
                      <h1 className='third-heading'>
                      هل تفكر في بدء بودكاست خاص بك ولكنك لست متأكداً من أين تبدأ؟ أو كيف تصل إلى جمهورك؟ أو حتى كيف تستطيع إنشاء محتوى يتردد صداه ويتفاعل مع المستمعين؟ لا تقلق، فلست الوحيد!

</h1>
                      <p>لهذا السبب قمنا بتصميم ورشة عمل مكثفة لمدة 4 أيام لتحويل محبي البودكاست إلى مبدعين! نحن هنا لنزودك بالمعرفة، والمهارات، والثقة التي تحتاجها لاكتشاف تخصصك، وصياغة محتوى رائع له، وإطلاق البودكاست الخاص بك بنجاح!

</p>
                  </div>
                  <div className='workshop-features'>
                      <h1 className='light-heading'>بنهاية هذه الورشة ستكون قادرًا على
</h1>
                      <div className='features features-wrap'>
                          <div className='feature'>
                          <img src={WorkshopFeatureImageIcon} alt="Feature Icon" className='feature-icon' />
                          
  < p className='feature-desc third-text'> فهم أهمية وطريقة تصميم الهوية البصرية، وتصميم غلاف البودكاست والحلقات
 
  
  </p>
                          </div>
                          <div className='feature'>
                          <img src={WorkshopFeatureImageIcon} alt="Feature Icon" className='feature-icon' />
                          
  < p className='feature-desc third-text'> تحرير وتحسين جودة الصوت وتعزيز السرد القصصي من خلال التصميم الصوتي، مع تجربة عملية.

  
  </p>
                          </div>
                          <div className='feature'>
                          <img src={WorkshopFeatureImageIcon} alt="Feature Icon" className='feature-icon' />
 
  < p className='feature-desc third-text'> تطوير القدرة على التخطيط وكتابة وهيكلة حلقات بودكاست ممتعة.

  </p>
                          </div>
                          <div className='feature'>
                          <img src={WorkshopFeatureImageIcon} alt="Feature Icon" className='feature-icon' />
 
  < p className='feature-desc third-text'> القدرة على تسجيل الصوت، وإجراء المقابلات، وسرد المحتوى بفعالية.


  </p>
                          </div>
                          <div className='feature'>
                          <img src={WorkshopFeatureImageIcon} alt="Feature Icon" className='feature-icon' />
 
  < p className='feature-desc third-text'> القدرة على فهم مشهد العام لصناعة البودكاست والاستقرار على تخصصك الفريد.

  </p>
                          </div>
                      </div>
                  </div>


                
              </div>
              <div className='video-section'>
           <video src={video} autoPlay muted loop controls/>
           </div>
           <div className='workshop-features-section'>
           <h1 className='light-heading'>
    
           مقابل 4,000 درهم فقط ، إليك ما ستتعلمه في أيام الورشة
                    </h1>
  <div className='features'>
      <div className='feature'>
      <p className='feature-desc third-text'> <b> اليوم الأول: </b>
فهم أساسيات البودكاست، وتحديد جمهورك المستهدف، وصياغة مفاهيم ممتعة.
      </p>
  
      </div>
      <div className='feature'>
      <p className='feature-desc third-text'> <b> اليوم الثاني: </b>
تطوير نصوص منهجية، واحترافية السرد القصصي، وصنع حلقات ممتعة.
      </p>
  
      </div>
    
      <div className='feature'>
      <p className='feature-desc third-text'> <b> اليوم الثالث: </b>
تعلم التسجيل المحترف والتحرير الدقيق لإنتاج صوت عالي الجودة.
      </p>
  
      </div>
      <div className='feature'>
      <p className='feature-desc third-text'> <b> اليوم الرابع: </b>
اكتساب مهارات ما بعد الإنتاج وتعلم استراتيجيات إطلاق حملات فعّالة، واستكشاف فرص تحقيق الربح!
      </p>
  
      </div>
  </div>
           </div>
           <div className='trainers workshops-trainers'>
           <h1 className='primary-heading'>
          المدربين
                   </h1>
                   <p className='secondary-text'>نقدم لطلابنا مهارات متنوعة من خبراء لديهم الكثير من المعرفة التي تبحث عنها لتميز نفسك</p>
                   <div className='trainers-podcasts'>
                   <div className='trainers-container'>
                      <div className='trainer-image'>
                        <img src={TrainerImage} alt='trainer photo'/>
                        <h4> محمد علي</h4>
                        <div className='social-icon'><a href='https://www.instagram.com/moalivoice/' ><span><InstagramIcon /></span></a> <a href='https://www.youtube.com/@moalivoice' ><span><YoutubeIcon /></span></a> </div>
                      </div>
                      <div className='trainer-desc'>
<p>
مدير المنتجات الصوتية Audio Products Manager في راديو وتلفزيون الآن، يقدم بودكاست "البودكاست المفضل" ، مصري الجنسية، ولد في مصر ونشأ في الإمارات. محمد مهندس ومعلق ومدرب صوتي محترف، قرر بعد سنوات من العمل كمهندس برمجيات أن يترك الهندسة ويتبع شغفه في التعليق والتدريب الصوتي وصناعة المحتوى، فترك وظيفته الحكومية وانضم إلى فريق الآن في بداية عام 2022. قام بتدريب أكثر من 800 شخص من بينهم إعلاميين حاليين ، مقدمي بودكاست ومذيعين، صانعي محتوى ومعلقين صوتيين وعمل مع العديد من كبرى الشركات والعلامات التجارية و المؤسسات الحكومية و مراكز التدريب الإعلامي.
    </p>                  
        </div>
                   </div>
                   <div className='trainers-container'>
                      <div className='trainer-image'>
                        <img src={TrainerImage2} alt='trainer photo'/>
                        <h4> مها فطوم</h4>
                        <div className='social-icon'> <a href='https://www.instagram.com/maha.fattoum/' ><span><InstagramIcon /></span></a> <a href='https://twitter.com/mahafattoum' ><span><TwitterIcon /></span></a> </div>
                      </div>
                      <div className='trainer-desc'>
                          <p>صحفية ومقدمة برامج حاصلة على بكالوريوس في الصحافة والإعلام من جامعة دمشق انضمت لفريق العمل في تلفزيون الآن عام 2018 قدمت العديد من البرامج الإذاعية المباشرة أبرزها برنامج "ساعة عالهوا" كما تعد وتقدم برامج اجتماعية منها: بودكاست صارت معي - البرنامج التلفزيوني "أنا موجود" وشاركت في تقديم البرامج التلفزيوني المباشر "تلي تيرابي. لديها اهتمام بالتعرف على تجارب الناس في شتى نواحي الحياة بمختلف جنسياتهم وخلفياتهم الثقافية والاجتماعية وتقديمها كقصص إيماناً منها بأن للقصة أثراً كبيراً في تغيير طريقة تفكيرنا نحو الأفضل وجعلنا منفتحين على الآخرين وقادرين على التضامن والتعاطف معهم. </p>
                      </div>
                   </div>
                   </div>
                   
           </div>
           <div className='booking workshops-booking' id="contact-form">
            <div className='left-section'>
            < div className='left-section-container'>
              <img src={BookingIcon} alt="Booking Icon" />
              <p className='third-heading'>
              هل أنت مستعد لإظهار مهاراتك أمام الجمهور؟ 
              </p>
              <p className='third-heading'>
              كن معنا من 4 إلى 6 ديسمبر 2023 لمدة ثلاث أيام
  (4 ساعات في اليوم) مقابل 3,500 درهم إماراتي فقط   
              </p>
              <h1 className='secondary-heading'>
              احجز مقعدك الآن !
              </h1>
            </div>
            </div>
            <div className='right-section'>
             <div className='form-section' id="contact-form">
              <form action=''>
              <div class="input-wrapper">
              <label for="first"> الاسم الكامل</label>
              <input type="text" placeholder='Enter you name'/>
              </div>
              <div class="input-wrapper">
              <label for="first">البريد الالكتروني</label>
              <input type="text" placeholder='Enter you Email'/>
              </div>
              <PhoneInput
              special-label="رقم الهاتف"
        placeholder="Enter phone number"
        value={value}
        country={'ae'}
        onChange={setValue}/>
         <div class="input-wrapper">
          <input type='checkbox' />  
  <span>أنا أوافق على <a href='https://www.alaan.net/terms/'>الشروط و الأحكام</a> </span>
         </div>
         <div class="input-wrapper">
          <input type='submit' value="متابعة" />
         </div>
           
             
               </form>
             </div>
            </div>
           </div>
           <Advertise /> 
  </div>
  
  <Footer />
  
  </div>
    )
}

export default Podcast


