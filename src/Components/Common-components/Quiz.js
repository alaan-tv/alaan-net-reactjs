import React, { useState }  from 'react'
import Stepper from 'react-stepper-horizontal';
import Unique from '../../../src/Assets/quiz/LBD/q1/Unique.webp'
import Cool from '../../../src/Assets/quiz/LBD/q1/Cool.webp'
import Stream from '../../../src/Assets/quiz/LBD/q1/Streamlined.webp'
import Regal from '../../../src/Assets/quiz/LBD/q1/Regal.webp'
import LaidBack from '../../../src/Assets/quiz/LBD/q1/Laid-back.webp'
import Space1 from '../../../src/Assets/1-5.jpg'
import Space2 from '../../../src/Assets/2-5.png'
import Space3 from '../../../src/Assets/3-5.png'
import Space4 from '../../../src/Assets/4-5.jpg'
import FormModal from './FormModal';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Modal from './Modal';
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
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [checkboxName]: !prevStates[checkboxName],
    }));
  };
  const checkedCheckbox = Object.keys(checkboxStates).find(
    (checkboxName) => checkboxStates[checkboxName]
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
      What is your relationship to stuff?
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
          <div className={getContainerClassName('checkbox9')}>
    <img src={Unique}/> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox9'] || false}
          onChange={() => handleCheckboxChange('checkbox9') } />
    <div className='option-desc'>
    <b>Unique</b>- I like having things, and I want
my guests to know that my things
have history and a story.
    </div>
</div>
<div class={getContainerClassName('checkbox10')}>
    <img src={LaidBack} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox10'] || false}
          onChange={() => handleCheckboxChange('checkbox10') }/>
    <div className='option-desc'>
    <b>Laid back</b> - Airy & open; my home is my
haven, I need it to be comfortable &
relaxed before anything else.
    </div>
</div>
<div class={getContainerClassName('checkbox11')}>
    <img src={Regal} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox11'] || false}
          onChange={() => handleCheckboxChange('checkbox11') }/>
    <div className='option-desc'>
    <b>Regal</b>- I love old world charm, and
I want my room to be proud,
comfortable, & impressive.
    </div>
</div>
<div class={getContainerClassName('checkbox12')}>
    <img src={Cool} /> 
    <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox12'] || false}
          onChange={() => handleCheckboxChange('checkbox12') }/>
    <div className='option-desc'>
    <b>Cool</b>- A good mix of modern & retro
pieces to give my home an edge.
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

{currentPage === 7 && (
            <>
            <h1 className='step-title step-title-light'>Which living room? </h1>
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
         {currentPage === 8 && (
            <>
            <h1 className='step-title step-title-light'>Which office? </h1>
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
         {currentPage === 9 && (
           <>
           <h1 className='step-title step-title-light'>Which colour palette do you most like to decorate
your home with? </h1>
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