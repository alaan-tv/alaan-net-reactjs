import React, { useState }  from 'react'
import Stepper from 'react-stepper-horizontal';
import Unique from '../../../src/Assets/quiz/LBD/q1/Unique.webp'
import Cool from '../../../src/Assets/quiz/LBD/q1/Cool.webp'
import Stream from '../../../src/Assets/quiz/LBD/q1/Streamlined.webp'
import Regal from '../../../src/Assets/quiz/LBD/q1/Regal.webp'
import LaidBack from '../../../src/Assets/quiz/LBD/q1/Laid-back.webp'
import Qustion2Image1 from '../../../src/Assets/quiz/LBD/q2/1.webp'
import Qustion2Image2 from '../../../src/Assets/quiz/LBD/q2/2.webp'
import Qustion2Image3 from '../../../src/Assets/quiz/LBD/q2/3.webp'
import Qustion2Image4 from '../../../src/Assets/quiz/LBD/q2/4.webp'
import Qustion3Image1 from '../../../src/Assets/quiz/LBD/q3/Bohemian.webp'
import Qustion3Image2 from '../../../src/Assets/quiz/LBD/q3/Industrial.webp'
import Qustion3Image3 from '../../../src/Assets/quiz/LBD/q3/Opulent.webp'
import Qustion3Image4 from '../../../src/Assets/quiz/LBD/q3/Scandinavian.webp'
import Qustion4Image1 from '../../../src/Assets/quiz/LBD/q4/1.webp'
import Qustion4Image2 from '../../../src/Assets/quiz/LBD/q4/2.webp'
import Qustion4Image3 from '../../../src/Assets/quiz/LBD/q4/3.webp'
import Qustion4Image4 from '../../../src/Assets/quiz/LBD/q4/4.webp'
import Qustion5Image1 from '../../../src/Assets/quiz/LBD/q5/1.webp'
import Qustion5Image2 from '../../../src/Assets/quiz/LBD/q5/2.webp'
import Qustion5Image3 from '../../../src/Assets/quiz/LBD/q5/3.webp'
import Qustion5Image4 from '../../../src/Assets/quiz/LBD/q5/4.webp'
import Qustion6Image1 from '../../../src/Assets/quiz/LBD/q6/Pastels.webp'
import Qustion6Image2 from '../../../src/Assets/quiz/LBD/q6/Historical.webp'
import Qustion6Image3 from '../../../src/Assets/quiz/LBD/q6/Earthy.webp'
import Qustion6Image4 from '../../../src/Assets/quiz/LBD/q6/Moody.webp'
import Qustion6Image5 from '../../../src/Assets/quiz/LBD/q6/black.webp'
import Qustion6Image6 from '../../../src/Assets/quiz/LBD/q6/Primary.webp'
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
<div class={getContainerClassName('checkbox2')}>
    <img src={LaidBack} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox2'] || false}
          onChange={() => handleCheckboxChange('checkbox2') }/>
    <div className='option-desc'>
    <b>Laid back</b> - Airy & open; my home is my
haven, I need it to be comfortable &
relaxed before anything else.
    </div>
</div>
<div class={getContainerClassName('checkbox3')}>
    <img src={Regal} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox3'] || false}
          onChange={() => handleCheckboxChange('checkbox3') }/>
    <div className='option-desc'>
    <b>Regal</b>- I love old world charm, and
I want my room to be proud,
comfortable, & impressive.
    </div>
</div>
<div class={getContainerClassName('checkbox4')}>
    <img src={Cool} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox4'] || false}
          onChange={() => handleCheckboxChange('checkbox4') }/>
    <div className='option-desc'>
    <b>Cool</b>- A good mix of modern & retro
pieces to give my home an edge.
    </div>
</div>
<div class={getContainerClassName('checkbox5')}>
    <img src={Stream} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox5'] || false}
          onChange={() => handleCheckboxChange('checkbox5') }/>
    <div className='option-desc'>
    <b>Streamlined</b>- Everything is exactly
where it needs to be, and does exactly
what it's supposed to do
    </div>
</div>
    
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
            <div class={getContainerClassName('checkbox6')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox6'] || false}
          onChange={() => handleCheckboxChange('checkbox6') }/>
      <div className='option-desc'>
      
I love stuff! I love collecting stuff that I'm drawn to, & I love being
surrounded by it.
      </div>
  </div>
  <div class={getContainerClassName('checkbox7')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox7'] || false}
          onChange={() => handleCheckboxChange('checkbox7') }/>
      <div className='option-desc'>
      I like *some* stuff. I'm choosy about what I allow into my home, and I
curate stuff that I think is beautiful
      </div>
  </div>
  <div class={getContainerClassName('checkbox8')}>
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox8'] || false}
          onChange={() => handleCheckboxChange('checkbox8') }/>
      <div className='option-desc'>
      I try to minimise my stuff. I want my home to feel uncluttered & relaxing.
      </div>
  </div>
  
      
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
          <div className={getContainerClassName('checkbox9')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion2Image1 }/> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox9'] || false}
          onChange={() => handleCheckboxChange('checkbox9') } />
    <div className='option-desc'>
    None, all white only
    </div>
</div>
<div class={getContainerClassName('checkbox10')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion2Image2 } /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox10'] || false}
          onChange={() => handleCheckboxChange('checkbox10') }/>
    <div className='option-desc'>
    I prefer mostly neutral tones

    </div>
</div>
<div class={getContainerClassName('checkbox11')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion2Image3 } /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox11'] || false}
          onChange={() => handleCheckboxChange('checkbox11') }/>
    <div className='option-desc'>
    I'm into some pops of colour

    </div>
</div>
<div class={getContainerClassName('checkbox12')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion2Image4 } /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox12'] || false}
          onChange={() => handleCheckboxChange('checkbox12') }/>
    <div className='option-desc'>
    Tons, I cant get enough
    </div>
</div>

    
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
          <div className={getContainerClassName('checkbox13')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion3Image1}/> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox13'] || false}
          onChange={() => handleCheckboxChange('checkbox13') } />
    <div className='option-desc'>
    Scandinavian
    </div>
</div>
<div class={getContainerClassName('checkbox14')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion3Image2} /> 
    <input type="checkbox" class="checkbox" id="check14" checked={checkboxStates['checkbox14'] || false}
          onChange={() => handleCheckboxChange('checkbox14') }/>
    <div className='option-desc'>
    Urban industrial
    </div>
</div>
<div class={getContainerClassName('checkbox15')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion3Image3} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox15'] || false}
          onChange={() => handleCheckboxChange('checkbox15') }/>
    <div className='option-desc'>
    Bohemian
    </div>
</div>
<div class={getContainerClassName('checkbox16')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion3Image4} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox16'] || false}
          onChange={() => handleCheckboxChange('checkbox16') }/>
   <div className='option-desc'>
   Opulent

    </div>
</div>

    
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
          <div className={getContainerClassName('checkbox17')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion4Image1}/> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox17'] || false}
          onChange={() => handleCheckboxChange('checkbox17') } />
    <div className='option-desc'>
    modern rustic

    </div>
</div>
<div class={getContainerClassName('checkbox18')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion4Image2} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox18'] || false}
          onChange={() => handleCheckboxChange('checkbox18') }/>
    <div className='option-desc'>
    art deco


    </div>
</div>
<div class={getContainerClassName('checkbox19')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion4Image3} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox19'] || false}
          onChange={() => handleCheckboxChange('checkbox19') }/>
    <div className='option-desc'>
    brutalist industrial minimalism

    </div>
</div>
<div class={getContainerClassName('checkbox20')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion4Image4} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox20'] || false}
          onChange={() => handleCheckboxChange('checkbox20') }/>
    <div className='option-desc'>
    eclectic industrial restorational



    </div>
</div>

    
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
          <div className={getContainerClassName('checkbox21')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion5Image1}/> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox21'] || false}
          onChange={() => handleCheckboxChange('checkbox21') } />
    <div className='option-desc'>
    executive sophistication
    </div>
</div>
<div class={getContainerClassName('checkbox22')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion5Image2} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox22'] || false}
          onChange={() => handleCheckboxChange('checkbox22') }/>
    <div className='option-desc'>
    bohemian
    </div>
</div>
<div class={getContainerClassName('checkbox23')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion5Image3} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox23'] || false}
          onChange={() => handleCheckboxChange('checkbox23') }/>
    <div className='option-desc'>
    minimalist
    </div>
</div>
<div class={getContainerClassName('checkbox24')} style={{flex:"1", minWidth: "40%"}}>
    <img src={Qustion5Image4} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox24'] || false}
          onChange={() => handleCheckboxChange('checkbox24') }/>
    <div className='option-desc'>
    vintage
    </div>
</div>

    
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
          <div className={getContainerClassName('checkbox25')}>
    <img src={Qustion6Image1}/> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox25'] || false}
          onChange={() => handleCheckboxChange('checkbox25') } />
    <div className='option-desc'>
    <b>Unique</b>- I like having things, and I want
my guests to know that my things
have history and a story.
    </div>
</div>
<div class={getContainerClassName('checkbox26')}>
    <img src={Qustion6Image2} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox26'] || false}
          onChange={() => handleCheckboxChange('checkbox26') }/>
    <div className='option-desc'>
    <b>Laid back</b> - Airy & open; my home is my
haven, I need it to be comfortable &
relaxed before anything else.
    </div>
</div>
<div class={getContainerClassName('checkbox27')}>
    <img src={Qustion6Image3} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox27'] || false}
          onChange={() => handleCheckboxChange('checkbox27') }/>
    <div className='option-desc'>
    <b>Regal</b>- I love old world charm, and
I want my room to be proud,
comfortable, & impressive.
    </div>
</div>
<div class={getContainerClassName('checkbox28')}>
    <img src={Qustion6Image4} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox28'] || false}
          onChange={() => handleCheckboxChange('checkbox28') }/>
    <div className='option-desc'>
    <b>Cool</b>- A good mix of modern & retro
pieces to give my home an edge.
    </div>
</div>
<div class={getContainerClassName('checkbox29')}>
    <img src={Qustion6Image5} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox29'] || false}
          onChange={() => handleCheckboxChange('checkbox29') }/>
    <div className='option-desc'>
    <b>Streamlined</b>- Everything is exactly
where it needs to be, and does exactly
what it's supposed to do
    </div>
</div>
<div class={getContainerClassName('checkbox30')}>
    <img src={Qustion6Image6} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox30'] || false}
          onChange={() => handleCheckboxChange('checkbox30') }/>
    <div className='option-desc'>
    <b>Streamlined</b>- Everything is exactly
where it needs to be, and does exactly
what it's supposed to do
    </div>
</div>

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