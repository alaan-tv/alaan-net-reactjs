import React from 'react'
import AdvertiseImage from '../../Assets/advertise-image.png'
const Advertise = () => {
  return (
    <div className='advertise-section'>
    <div className='advertise-section-container'>
      <div className='advertise-image'>
       <img src={AdvertiseImage} alt='Advertise Icon' />
      </div>
      <div className='advertise-text'>
        <h1 className='banner-heading'>Advertise With Al Aan</h1>
        <p className='banner-text'>Interested in learning more about our advertising opportunities?<br></br>
Reach out to start working with us today.</p>
      </div>
      <div className='advertise button'>
    <button className='banner-button'>Contact us now!</button>
      </div>
    </div>
  </div>
  )
}

export default Advertise