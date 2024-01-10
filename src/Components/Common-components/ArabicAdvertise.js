import React from 'react'

import AdvertiseImage from '../../Assets/advertise-image.png'
const ArabicAdvertise = () => {
  return (
    <div className='advertise-section arabic-advertise'>
    <div className='advertise-section-container'>
      <div className='advertise-image arabic-advertise-image'>
       <img src={AdvertiseImage} alt='Advertise Icon' />
      </div>
      <div className='advertise-text arabic-advertise-text'>
        <h1 className='banner-heading'>أعلن مع الآن</h1>
        <p className='banner-text'>مهتم بمعرفة المزيد حول فرص الإعلان لدينا؟





<br></br>
تواصل معنا للبدء بإعلانك اليوم.</p>
      </div>
      <div className='advertise button'>
      <a href="mailto:omar.othman@alaan.tv"><button className='banner-button'> تواصل معنا الآن!</button></a>
      </div>
    </div>
  </div>
  )
}

export default ArabicAdvertise