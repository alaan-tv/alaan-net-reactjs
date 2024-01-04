import React from 'react'
import './workshop.css'
import Header from '../../Common-components/ArabicHeader'
import WorkshopImage from '../../../Assets/podcast-image.png'
import EventIcon from '@mui/icons-material/Event'
import WorkshopFeatureImageIcon from '../../../Assets/workshop-feature-image.svg'
import video from '../../../Assets/promo.mp4'

const Podcast = () => {
  return (
    <div className='home-container'>
        <Header />
        <div className="home-banner-container">
            <div className='hero-workshop-section'>
                
                <div className='hero-text'>
                    <h1  className='light-heading'>هل ترغب بتطوير مسيرتك الإعلامية وصقل موهبتك؟ </h1>
                    <p>ورشة تدريب إعلامية تساعدك على صقل موهبتك وتطوير مهارتك في عالم الإعلام والميديا الحديثة.</p>
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
                    تقدم الأكاديمية نهجًا إعلاميًا متطورًا من خلال ورش عمل في مجال الإعلام، حيث يتم توفير تدريب نظري وعملي متكامل.
                    </h1>
                    <p>نحن نقدم فرصة للصحافيين والإعلاميين للاستفادة من خبراتنا المهنية التي استغرق بناؤها سنوات عديدة في مجال الأخبار والإعلام. تم تصميم ورش العمل بعناية فائقة من قبل خبراء في هذا المجال لتوفير التدريب المثلى لكافة الأشخاص الذين يسعون إلى استكشاف عالم الإعلام ودخوله. انضم إلى فرقنا وسوف تحظى بفرصة رائعة لتطوير مهاراتك في هذا المجال المثير وتحقيق نجاح كبير.</p>
                </div>
                <div className='workshop-features'>
                    <h1 className='light-heading'>ماذا سوف تستفيد من ورشات العمل الإعلامية معنا؟</h1>
                    <div className='features'>
                        <div className='feature'>
                        <img src={WorkshopFeatureImageIcon} alt="Feature Icon" className='feature-icon' />
                        <p className='feature-heading'>التدريب المرن
</p>
< p className='feature-desc third-text'> دوراتنا التدريبية تتوافق مع نمط حياتك المهنية و الدراسية. دوراتنا الحضورية أو عبر الإنترنت مخصصة لتتلاءم مع جدولك الزمني.

</p>
                        </div>
                        <div className='feature'>
                        <img src={WorkshopFeatureImageIcon} alt="Feature Icon" className='feature-icon' />
                        <p className='feature-heading'>الخبرة الإعلامية 

</p>
< p className='feature-desc third-text'> استفد من تجارب التغطية الميدانية و حكاياتها بينما يقودك صحفيون ذوو خبرة من تلفزيون الآن في رحلتك.

</p>
                        </div>
                        <div className='feature'>
                        <img src={WorkshopFeatureImageIcon} alt="Feature Icon" className='feature-icon' />
                        <p className='feature-heading'> الشهادة
</p>
< p className='feature-desc third-text'> احصل على شهادة معتمدة من KDHA وهي أكثر من مجرد شهادة ورقية؛ إنها هويتك المهنية الجديدة.
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
         مقابل 3,500 درهم فقط،
سوف تحصل على التالي:                    </h1>
<div className='features'>
    <div className='feature'>
    <p className='feature-desc third-text'> تدرب على أهمّ أسس تقديم الأخبار والبرامج التلفزيونية لكل لصحافيين المبتدئين الراغبين بتطوير مهاراتهم و لكل الباحثين عن فرص عمل جديدة في عالم الإعلام
    </p>

    </div>
    <div className='feature'>
    <p className='feature-desc third-text'> ورشة عمل تدريبية اونلاين لمدة 3 أيام
    </p>

    </div>
    <div className='feature'>
    <p className='feature-desc third-text'> شهادة معتمدة من أكاديمية الآن
    </p>

    </div>
    <div className='feature'>
    <p className='feature-desc third-text'> ملحقات إعلامية للتدريب
    </p>

    </div>
    <div className='feature'>
    <p className='feature-desc third-text'> فيديو مسجل للمتدرب
    </p>

    </div>
</div>
         </div>
</div>
  )
}

export default Podcast