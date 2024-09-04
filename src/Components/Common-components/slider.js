import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import BeforeLiving from '../../Assets/before1.jpg';
import AfterLiving from '../../Assets/after1.jpg';
import BeforeLiving1 from '../../Assets/before2.jpg';
import AfterLiving1 from '../../Assets/after2.jpg';

const Slider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      type: 'compare',
      content: (
        <div className="compare-slider-wrapper">
          <ReactCompareSlider
            changePositionOnHover={true}
            keyboardIncrement="5"
            transition=".5s ease-in-out"
            itemOne={
              <div>
                <ReactCompareSliderImage src={BeforeLiving1} alt="Before Living Room 1" />
                <div className="badge compare-badge before">Before</div>
              </div>
            }
            itemTwo={
              <div>
                <ReactCompareSliderImage src={AfterLiving1} alt="After Living Room 1" />
                <div className="badge compare-badge after">After</div>
              </div>
            }
          />
        </div>
      ),
    },
    {
      type: 'compare',
      content: (
        <div className="compare-slider-wrapper">
          <ReactCompareSlider
            changePositionOnHover={true}
            keyboardIncrement="5"
            transition=".5s ease-in-out"
            itemOne={
              <div>
                <ReactCompareSliderImage src={BeforeLiving} alt="Before Living Room 2" />
                <div className="badge compare-badge before">Before</div>
              </div>
            }
            itemTwo={
              <div>
                <ReactCompareSliderImage src={AfterLiving} alt="After Living Room 2" />
                <div className="badge compare-badge after">After</div>
              </div>
            }
          />
        </div>
      ),
    },
   
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {/* Navigation Buttons Outside the Slider */}
      <button className="nav-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="slider">
        {slides[currentIndex].type === 'compare' ? (
          slides[currentIndex].content
        ) : (
          <>
            <img
              src={slides[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              className="slide-image"
            />
            <span className={`badge ${slides[currentIndex].badge.toLowerCase()}-badge`}>
              {slides[currentIndex].badge}
            </span>
          </>
        )}
      </div>
      <button className="nav-button next" onClick={goToNext}>
        &#10095;
      </button>
      {/* Dots for Navigation */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider1;