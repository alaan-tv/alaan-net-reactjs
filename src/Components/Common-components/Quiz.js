import React, { useState }  from 'react'
import Stepper from 'react-stepper-horizontal';
import Unique from '../../../src/Assets/quiz/LBD/q1/Unique.png'
import Cool from '../../../src/Assets/quiz/LBD/q1/Cool.png'
import Stream from '../../../src/Assets/quiz/LBD/q1/Streamlined.png'
import Regal from '../../../src/Assets/quiz/LBD/q1/Regal.png'
import LaidBack from '../../../src/Assets/quiz/LBD/q1/Laid back.png'
import Qustion2Image1 from '../../../src/Assets/quiz/LBD/q2/1.png'
import Qustion2Image2 from '../../../src/Assets/quiz/LBD/q2/2.png'
import Qustion2Image3 from '../../../src/Assets/quiz/LBD/q2/3.png'
import Qustion2Image4 from '../../../src/Assets/quiz/LBD/q2/4.png'
import Qustion3Image1 from '../../../src/Assets/quiz/LBD/q3/Bohemian.png'
import Qustion3Image2 from '../../../src/Assets/quiz/LBD/q3/Industrial.png'
import Qustion3Image3 from '../../../src/Assets/quiz/LBD/q3/Opulent.png'
import Qustion3Image4 from '../../../src/Assets/quiz/LBD/q3/Scandinavian.png'
import Qustion4Image1 from '../../../src/Assets/quiz/LBD/q4/1.png'
import Qustion4Image2 from '../../../src/Assets/quiz/LBD/q4/2.png'
import Qustion4Image3 from '../../../src/Assets/quiz/LBD/q4/3.png'
import Qustion4Image4 from '../../../src/Assets/quiz/LBD/q4/4.png'
import Qustion5Image1 from '../../../src/Assets/quiz/LBD/q5/1.png'
import Qustion5Image2 from '../../../src/Assets/quiz/LBD/q5/2.png'
import Qustion5Image3 from '../../../src/Assets/quiz/LBD/q5/3.png'
import Qustion5Image4 from '../../../src/Assets/quiz/LBD/q5/4.png'
import Qustion6Image1 from '../../../src/Assets/quiz/LBD/q6/Pastels.png'
import Qustion6Image2 from '../../../src/Assets/quiz/LBD/q6/Historical.png'
import Qustion6Image3 from '../../../src/Assets/quiz/LBD/q6/Earthy.png'
import Qustion6Image4 from '../../../src/Assets/quiz/LBD/q6/Moody.png'
import Qustion6Image5 from '../../../src/Assets/quiz/LBD/q6/Black.png'
import Qustion6Image6 from '../../../src/Assets/quiz/LBD/q6/Primary.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Quiz = ({handleClose}) => {
  

  const [currentPage, setCurrentPage] = useState(1);

  const [checkboxStates, setCheckboxStates] = useState({});
  
  const sections = [
    1,
    2,
    3,
    4,
    5,
    6, 7, 8, 9, 10
  ];
 


  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  const handleCloseModal = () => {
    // Call the closeModal function passed down from the parent
    
    handleClose();
 
  };

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxStates((prevStates) => {
      const updatedStates = { ...prevStates };
  
      // Uncheck all other checkboxes
      Object.keys(updatedStates).forEach((name) => {
        if (name !== checkboxName) {
          updatedStates[name] = false;
        }
      });
  
      // Toggle the selected checkbox
      updatedStates[checkboxName] = !prevStates[checkboxName];
  
      return updatedStates;
    });
  };
  

  const checkedCheckbox = Object.keys(checkboxStates[currentPage] || {}).find(
    (checkboxName) => checkboxStates[currentPage][checkboxName]
  );

  const getContainerClassName = (checkboxName) => {
    if (checkboxStates[checkboxName]) {
      // Return the class name based on the checkbox name
      return 'container pink';
    }
    // Default class name if checkbox is not checked
    return 'container white';
  };  return (
    <>
    
    <form className="quiz-form" onSubmit={handleSubmit}>
        <Stepper 
          steps={sections}
          activeStep={currentPage}
          activeColor="#e1e1e1"
          defaultBarColor="#df1995"
          completeColor="#df1995"
          completeBarColor="#df1995"
        />

        {currentPage === 1 && (
          <>
            <h1 className='step-title'>First things first- let’s get to know you!</h1>
            <form className='introduction-quiz-form'>
              <input type="text" placeholder='name'></input>
              <input type="email" placeholder='E-mail'></input>
              <input type="text" placeholder='phone'></input>
            </form>
            <button className="next-button" onClick={next}>Next</button>
          </>
        )}

        {currentPage === 2 && (
          <>
             <h1 className='step-title'>Now, let's discover a little bit about what
home means to you </h1>
<form className='introduction-quiz-form'>

            </form>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className='back-button' onClick={prev}>Back</button>
              <button className='next-button' onClick={next}>Next</button>
            </div>
          </>
        )}
         {currentPage === 3 && (
          <>
          <h1 className='step-title step-title-light'>How do you want your home to feel? </h1>
          <form className='introduction-quiz-form images-form'>
          <label className='quiz-label' htmlFor={"check1"}>
          <div className={getContainerClassName('checkbox1')}>
    <img src={Unique}/> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox1'] || false}
          onChange={() => handleCheckboxChange('checkbox1') } />
    <div className='option-desc'>
    <b>Unique</b>- I like having things, and I want
my guests to know that my things
have history and a story.
    </div>
</div>
</label>
<label className='quiz-label' htmlFor={"check2"}>
<div class={getContainerClassName('checkbox2')}>
    <img src={LaidBack} /> 
    <input type="checkbox" class="checkbox" id="check2" checked={checkboxStates['checkbox2'] || false}
          onChange={() => handleCheckboxChange('checkbox2') }/>
    <div className='option-desc'>
    <b>Laid back</b> - Airy & open; my home is my
haven, I need it to be comfortable &
relaxed before anything else.
    </div>
</div>
</label>
<label className='quiz-label' htmlFor={"check3"}>
<div class={getContainerClassName('checkbox3')}>
    <img src={Regal} /> 
    <input type="checkbox" class="checkbox" id="check3" checked={checkboxStates['checkbox3'] || false}
          onChange={() => handleCheckboxChange('checkbox3') }/>
    <div className='option-desc'>
    <b>Regal</b>- I love old world charm, and
I want my room to be proud,
comfortable, & impressive.
    </div>
</div>
</label>
<label className='quiz-label' htmlFor={"check4"}>
<div class={getContainerClassName('checkbox4')}>
    <img src={Cool} /> 
    <input type="checkbox" class="checkbox" id="check4" checked={checkboxStates['checkbox4'] || false}
          onChange={() => handleCheckboxChange('checkbox4') }/>
    <div className='option-desc'>
    <b>Cool</b>- A good mix of modern & retro
pieces to give my home an edge.
    </div>
</div>
</label>
<label className='quiz-label' htmlFor={"check5"}>
<div class={getContainerClassName('checkbox5')}>
    <img src={Stream} /> 
    <input type="checkbox" class="checkbox" id="check5" checked={checkboxStates['checkbox5'] || false}
          onChange={() => handleCheckboxChange('checkbox5') }/>
    <div className='option-desc'>
    <b>Streamlined</b>- Everything is exactly
where it needs to be, and does exactly
what it's supposed to do
    </div>
</div>
</label>
    
</form>
             
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className='back-button' onClick={prev}>Back</button>
              <button className='next-button' onClick={next}>Next</button>
            </div>
          </>
        )}
         {currentPage === 4 && (
            <>
            <h1 className='step-title step-title-light'>What is your relationship to stuff? </h1>
            <form className='introduction-quiz-form multi-check-text'>
            <label className='quiz-label' htmlFor={"check6"}>
            <div class={getContainerClassName('checkbox6')}>
     
      <input type="checkbox" class="checkbox" id="check6" checked={checkboxStates['checkbox6'] || false}
          onChange={() => handleCheckboxChange('checkbox6') }/>
      <div className='option-desc'>
      
I love stuff! I love collecting stuff that I'm drawn to, & I love being
surrounded by it.
      </div>
  </div>
  </label>
  <label className='quiz-label' htmlFor={"check7"}>
  <div class={getContainerClassName('checkbox7')}>
     
      <input type="checkbox" class="checkbox" id="check7" checked={checkboxStates['checkbox7'] || false}
          onChange={() => handleCheckboxChange('checkbox7') }/>
      <div className='option-desc'>
      I like *some* stuff. I'm choosy about what I allow into my home, and I
curate stuff that I think is beautiful
      </div>
  </div>
  </label>
  <label className='quiz-label' htmlFor={"check8"}>
  <div class={getContainerClassName('checkbox8')}>
      <input type="checkbox" class="checkbox" id="check8" checked={checkboxStates['checkbox8'] || false}
          onChange={() => handleCheckboxChange('checkbox8') }/>
      <div className='option-desc'>
      I try to minimise my stuff. I want my home to feel uncluttered & relaxing.
      </div>
  </div>
  </label>
      
  </form>
               
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='back-button' onClick={prev}>Back</button>
                <button className='next-button' onClick={next}>Next</button>
              </div>
            </>
        )}
         {currentPage === 5 && (
           <>
           <h1 className='step-title step-title-light'>How much colour do you like in your space? </h1>
           <form className='introduction-quiz-form images-form'>
           <label className='quiz-label' htmlFor={"check9"} style={{flex:"1", minWidth: "40%"}}>
          <div className={getContainerClassName('checkbox9')} style={{width: "100%"}}>
    <img src={Qustion2Image1 }/> 
    <input type="checkbox" class="checkbox" id="check9" checked={checkboxStates['checkbox9'] || false}
          onChange={() => handleCheckboxChange('checkbox9') } />
    <div className='option-desc'>
    None, all white only
    </div>
</div>
</label>
<label className='quiz-label' htmlFor={"check10"} style={{flex:"1", minWidth: "40%"}}>
<div class={getContainerClassName('checkbox10')} style={{width: "100%"}}>
    <img src={Qustion2Image2 } /> 
    <input type="checkbox" class="checkbox" id="check10" checked={checkboxStates['checkbox10'] || false}
          onChange={() => handleCheckboxChange('checkbox10') }/>
    <div className='option-desc'>
    I prefer mostly neutral tones

    </div>
</div>
</label>
<label className='quiz-label' htmlFor={"check11"} style={{flex:"1", minWidth: "40%"}}>
<div class={getContainerClassName('checkbox11')} style={{width: "100%"}}>
    <img src={Qustion2Image3 } /> 
    <input type="checkbox" class="checkbox" id="check11" checked={checkboxStates['checkbox11'] || false}
          onChange={() => handleCheckboxChange('checkbox11') }/>
    <div className='option-desc'>
    I'm into some pops of colour

    </div>
</div>
</label>
<label className='quiz-label' htmlFor={"check12"} style={{flex:"1", minWidth: "40%"}}>
<div class={getContainerClassName('checkbox12')} style={{width: "100%"}}>
    <img src={Qustion2Image4 } /> 
    <input type="checkbox" class="checkbox" id="check12" checked={checkboxStates['checkbox12'] || false}
          onChange={() => handleCheckboxChange('checkbox12') }/>
    <div className='option-desc'>
    Tons, I cant get enough
    </div>
</div>
</label>
    
</form>
              
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <button className='back-button' onClick={prev}>Back</button>
               <button className='next-button' onClick={next}>Next</button>
             </div>
           </>
        )}
         {currentPage === 6 && (
            <>
            <h1 className='step-title step-title-light'>Which bedroom matches your energy?
(ignoring specific furniture) </h1>
<form className='introduction-quiz-form images-form'>
<label className='quiz-label' htmlFor={"check13"} style={{flex:"1", minWidth: "40%"}}>

          <div className={getContainerClassName('checkbox13')} style={{ width: "100%"}}>
    <img src={Qustion3Image1}/> 
    <input type="checkbox" class="checkbox" id="check13" checked={checkboxStates['checkbox13'] || false}
          onChange={() => handleCheckboxChange('checkbox13') } />
    
</div>
</label>
<label className='quiz-label' htmlFor={"check14"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox14')} style={{ width: "100%"}}>
    <img src={Qustion3Image2} /> 
    <input type="checkbox" class="checkbox" id="check14" checked={checkboxStates['checkbox14'] || false}
          onChange={() => handleCheckboxChange('checkbox14') }/>
    
</div>
</label>
<label className='quiz-label' htmlFor={"check15"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox15')} style={{ width: "100%"}}>
    <img src={Qustion3Image3} /> 
    <input type="checkbox" class="checkbox" id="check15" checked={checkboxStates['checkbox15'] || false}
          onChange={() => handleCheckboxChange('checkbox15') }/>
    
</div>
</label>
<label className='quiz-label' htmlFor={"check16"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox16')} style={{ width: "100%"}}>
    <img src={Qustion3Image4} /> 
    <input type="checkbox" class="checkbox" id="check16" checked={checkboxStates['checkbox16'] || false}
          onChange={() => handleCheckboxChange('checkbox16') }/>
   
</div>
</label>

    
</form>
               
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='back-button' onClick={prev}>Back</button>
                <button className='next-button' onClick={next}>Next</button>
              </div>
            </>
        )}

{currentPage === 7 && (
            <>
            <h1 className='step-title step-title-light'>Which living room? </h1>
            <form className='introduction-quiz-form images-form'>
            <label className='quiz-label' htmlFor={"check17"} style={{flex:"1", minWidth: "40%"}}>

          <div className={getContainerClassName('checkbox17')} style={{ width: "100%"}}>
    <img src={Qustion4Image1}/> 
    <input type="checkbox" class="checkbox" id="check17" checked={checkboxStates['checkbox17'] || false}
          onChange={() => handleCheckboxChange('checkbox17') } />
    
</div>
</label>
<label className='quiz-label' htmlFor={"check18"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox18')} style={{ width: "100%"}}>
    <img src={Qustion4Image2} /> 
    <input type="checkbox" class="checkbox" id="check18" checked={checkboxStates['checkbox18'] || false}
          onChange={() => handleCheckboxChange('checkbox18') }/>
   
</div>
</label>
<label className='quiz-label' htmlFor={"check19"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox19')} style={{ width: "100%"}}>
    <img src={Qustion4Image3} /> 
    <input type="checkbox" class="checkbox" id="check19" checked={checkboxStates['checkbox19'] || false}
          onChange={() => handleCheckboxChange('checkbox19') }/>
    
</div>
</label>
<label className='quiz-label' htmlFor={"check20"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox20')} style={{ width: "100%"}}>
    <img src={Qustion4Image4} /> 
    <input type="checkbox" class="checkbox" id="check20" checked={checkboxStates['checkbox20'] || false}
          onChange={() => handleCheckboxChange('checkbox20') }/>
    
</div>
</label>
    
</form>
               
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='back-button' onClick={prev}>Back</button>
                <button className='next-button' onClick={next}>Next</button>
              </div>
            </>
        )}
         {currentPage === 8 && (
            <>
            <h1 className='step-title step-title-light'>Which office? </h1>
            <form className='introduction-quiz-form images-form'>
            <label className='quiz-label' htmlFor={"check21"} style={{flex:"1", minWidth: "40%"}}>

          <div className={getContainerClassName('checkbox21')} style={{ width: "100%"}}>
    <img src={Qustion5Image1}/> 
    <input type="checkbox" class="checkbox" id="check21" checked={checkboxStates['checkbox21'] || false}
          onChange={() => handleCheckboxChange('checkbox21') } />
   
</div>
</label>
<label className='quiz-label' htmlFor={"check22"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox22')} style={{ width: "100%"}}>
    <img src={Qustion5Image2} /> 
    <input type="checkbox" class="checkbox" id="check22" checked={checkboxStates['checkbox22'] || false}
          onChange={() => handleCheckboxChange('checkbox22') }/>
    
</div>
</label>
<label className='quiz-label' htmlFor={"check23"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox23')} style={{ width: "100%"}}>
    <img src={Qustion5Image3} /> 
    <input type="checkbox" class="checkbox" id="check23" checked={checkboxStates['checkbox23'] || false}
          onChange={() => handleCheckboxChange('checkbox23') }/>
    
</div>
</label>
<label className='quiz-label' htmlFor={"check24"} style={{flex:"1", minWidth: "40%"}}>

<div class={getContainerClassName('checkbox24')} style={{ width: "100%"}}>
    <img src={Qustion5Image4} /> 
    <input type="checkbox" class="checkbox" id="check24" checked={checkboxStates['checkbox24'] || false}
          onChange={() => handleCheckboxChange('checkbox24') }/>
    
</div>
</label>
    
</form>
               
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='back-button' onClick={prev}>Back</button>
                <button className='next-button' onClick={next}>Next</button>
              </div>
            </>
        )}
         {currentPage === 9 && (
           <>
           <h1 className='step-title step-title-light'>Which colour palette do you most like to decorate
your home with? </h1>
<form className='introduction-quiz-form images-form'>
<label className='quiz-label' htmlFor={"check25"}>
          <div className={getContainerClassName('checkbox25')}>
    <img src={Qustion6Image1}/> 
    <input type="checkbox" class="checkbox" id="check25" checked={checkboxStates['checkbox25'] || false}
          onChange={() => handleCheckboxChange('checkbox25') } />
    
</div>
</label>
<label className='quiz-label' htmlFor={"check26"}>
<div class={getContainerClassName('checkbox26')}>
    <img src={Qustion6Image2} /> 
    <input type="checkbox" class="checkbox" id="check26" checked={checkboxStates['checkbox26'] || false}
          onChange={() => handleCheckboxChange('checkbox26') }/>
    
</div>
</label>
<label className='quiz-label' htmlFor={"check27"}>
<div class={getContainerClassName('checkbox27')}>
    <img src={Qustion6Image3} /> 
    <input type="checkbox" class="checkbox" id="check27" checked={checkboxStates['checkbox27'] || false}
          onChange={() => handleCheckboxChange('checkbox27') }/>
    
</div>
</label>
<label className='quiz-label' htmlFor={"check28"}>
<div class={getContainerClassName('checkbox28')}>
    <img src={Qustion6Image4} /> 
    <input type="checkbox" class="checkbox" id="check28" checked={checkboxStates['checkbox28'] || false}
          onChange={() => handleCheckboxChange('checkbox28') }/>
    
</div>
</label>
<label className='quiz-label' htmlFor={"check29"}>
<div class={getContainerClassName('checkbox29')}>
    <img src={Qustion6Image5} /> 
    <input type="checkbox" class="checkbox" id="check29" checked={checkboxStates['checkbox29'] || false}
          onChange={() => handleCheckboxChange('checkbox29') }/>
   
</div>
</label>
<label className='quiz-label' htmlFor={"check30"}>
<div class={getContainerClassName('checkbox30')}>
    <img src={Qustion6Image6} /> 
    <input type="checkbox" class="checkbox" id="check30" checked={checkboxStates['checkbox30'] || false}
          onChange={() => handleCheckboxChange('checkbox30') }/>
   
</div>
</label>
</form>
              
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <button className='back-button' onClick={prev}>Back</button>
               <button className='next-button' onClick={next}>Next</button>
             </div>
           </>
        )}
         {currentPage === 10 && (
           <>
           <h1 className='step-title step-title-light'>Awesome! Let’s jump into the application form
& get you one page closer to your dream home!</h1>
       
              
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <button className='back-button' onClick={prev}>Back</button>
              <button type='submit' className='continue-button' onClick={handleCloseModal} ><span>Continue</span> <KeyboardDoubleArrowRightIcon /></button>
              
             </div>
            
           </>
        )}
     
         
      </form>
     
   </>
  )
}

export default Quiz