import React, { useState, useEffect }  from 'react'
import Stepper from 'react-stepper-horizontal';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import Modal from './Modal';
 
import TickIcon from './TickIcon';
const FormQuiz = ({handleClose1}) => {
    const [modal, setModal] = useState(false);
    const timeSlots = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
        '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
        '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
      ];
  
    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (e) => {
      setSelectedTime(e.target.value);
    };
  const [currentPage, setCurrentPage] = useState(1);

  const [checkboxStates, setCheckboxStates] = useState({});
  
  const sections = [
    1,
    2,
    3,
    4,
    5,
    6, 7, 8, 9, 10,11,12
  ];
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  const handleCloseModal = () => {    
    
    setModal(false)
    handleClose1();
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
  
  const checkedCheckbox = Object.keys(checkboxStates).find(
    (checkboxName) => checkboxStates[checkboxName]
  );
  const checkCheckbox =(checkboxName ) =>{
    if (checkboxStates[checkboxName]){
      return true;
    }
    return false
  }
  const getContainerClassName = (checkboxName) => {
    if (checkboxStates[checkboxName]) {
      // Return the class name based on the checkbox name
      return 'container pink';
    }
    // Default class name if checkbox is not checked
    return 'container white';
  };
  
  //calculator price
  
   

    const [items, setItems] = useState([
      { id: 'item1', name: 'Bedroom', quantity: 0, price: 3499,price1:'AED 3,499' ,checked: false },
      { id: 'item2', name: 'Living room ', quantity: 0, price: 4299,price1:'AED 4,299 ' , checked: false },
      { id: 'item3', name: 'Office', quantity: 0, price: 3899,price1:'AED 3,899' , checked: false },
      { id: 'item4', name: 'Kitchen', quantity: 0, price: 5299,price1:'AED 5,299' , checked: false },

      // Add more items as needed
    ]);
     
    const calculateTotalPrice = () => {
      return items.reduce((total, item) => (item.checked ? total + item.quantity * item.price : total), 0);
    };
  
    const handleQuantityChange = (itemId, value) => {
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: Math.max(item.quantity + value, 0) } : item
        )
      );
    };
    
    const handleCheckboxChange1 = (itemId) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? { ...item, checked: !item.checked, quantity: !item.checked ? 1 : item.quantity }
            : { ...item, checked: false, quantity: 0 }
        )
      );
    };
    
  
  return (
    <>
    
    <form className="quiz-form" onSubmit={handleSubmit}>
        <Stepper 
          steps={sections}
          activeStep={currentPage}
          activeColor="#e1e1e1"
          defaultBarColor="#df1995"
          completeColor="#df1995"
          completeBarColor="#df1995"
          className="my-strepper"
        />

        {currentPage === 1 && (
          <>
            <h1 className='step-title'>Firstly, tell us the story of how we're designing your home! Which memory/ movie/ T.V show/ book cover/ song is inspiring our creativity? Feel free to add any references in the box below!
</h1>
<form className='introduction-quiz-form multi-check-text'>
            <input type="file" />
      
  </form>
            <button className="next-button" onClick={next}>Next</button>
          </>
        )}

        {currentPage === 2 && (
          <>
             <h1 className='step-title'>What room are we designing and how many of them?

 </h1>
 <form className='introduction-quiz-form multi-check-text'>
 {items.map(item => (
        <div key={item.id} style={{ backgroundColor: item.checked ? '#df1995' : 'white'}} className='container'>
          <input
            type="checkbox"
            class="checkbox"
            id={`${item.id}Checkbox`}
            checked={item.checked}
            onChange={() => handleCheckboxChange1(item.id)}
          />
          <div className='option-desc'>{item.name}: {item.price1}</div>
          <div className='quantity'> <span>Number of {item.name}: </span>
          <span className='quantity-tool' onClick={() => item.checked ? handleQuantityChange(item.id, 1): null}>+</span>
          <span style={{ color: item.checked ? '#fff' : '#000', fontSize: '18px' }}>{item.quantity}</span>
          <span className='quantity-tool' onClick={() => handleQuantityChange(item.id, -1)}>-</span></div>
        </div>
      ))}



            {/*<div class={getContainerClassName('checkbox1')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox1'] || false}
          onChange={() => handleCheckboxChange('checkbox1') }/>
      <div className='option-desc'>
      Bedroom - AED 3,499
      <div className='quantity'> <span>Number of bedroom: </span>
      <span className='quantity-tool' onClick={ () =>checkCheckbox('checkbox1') ? handleQuantityChange('item1', 1) : null}>+</span>
        <span>{item1Quantity}</span>
        <span className='quantity-tool' onClick={() =>checkCheckbox('checkbox1') ? handleQuantityChange('item1', -1) : null}>-</span>
      </div>
     

      </div>
  </div>
  <div class={getContainerClassName('checkbox2')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox2'] || false}
          onChange={() => handleCheckboxChange('checkbox2') }/>
      <div className='option-desc'>
      Living room [-/+] - AED 4,299



      </div>
  </div>
  <div class={getContainerClassName('checkbox3')}>
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox3'] || false}
          onChange={() => handleCheckboxChange('checkbox3') }/>
      <div className='option-desc'>
      Office [-/+] - AED 3,899


      </div>
  </div>
  <div class={getContainerClassName('checkbox4')}>
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox4'] || false}
          onChange={() => handleCheckboxChange('checkbox4') }/>
      <div className='option-desc'>
      Kitchen [-/+] - AED 5,299



      </div>
  </div>*/}
  <div>
        <h3>Total Price: AED {calculateTotalPrice()}</h3>
      </div>
  </form>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className='back-button' onClick={prev}>Back</button>
              <button className='next-button' onClick={next}>Next</button>
            </div>
          </>
        )}
         {currentPage === 3 && (
          <>
          <h1 className='step-title step-title-light'>What kind of property is it?
 </h1>
 <form className='introduction-quiz-form multi-check-text'>
            <div class={getContainerClassName('checkbox5')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox5'] || false}
          onChange={() => handleCheckboxChange('checkbox5') }/>
      <div className='option-desc'>
      Apartment 



      </div>
  </div>
  <div class={getContainerClassName('checkbox6')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox6'] || false}
          onChange={() => handleCheckboxChange('checkbox6') }/>
      <div className='option-desc'>
      Villa



      </div>
  </div>
  <div class={getContainerClassName('checkbox7')}>
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox7'] || false}
          onChange={() => handleCheckboxChange('checkbox7') }/>
      <div className='option-desc'>
      Townhouse



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
            <h1 className='step-title step-title-light'>Are there any restrictions on your property?
 </h1>
            <form className='introduction-quiz-form multi-check-text'>
            <div class={getContainerClassName('checkbox8')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox8'] || false}
          onChange={() => handleCheckboxChange('checkbox8') }/>
      <div className='option-desc'>
      Yes

      </div>
  </div>
  <div class={getContainerClassName('checkbox9')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox9'] || false}
          onChange={() => handleCheckboxChange('checkbox9') }/>
      <div className='option-desc'>
      No

      </div>
  </div>

      
      
      <input type="text" placeholder='If yes, please provide details'/>
  
      
  </form>
               
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='back-button' onClick={prev}>Back</button>
                <button className='next-button' onClick={next}>Next</button>
              </div>
            </>
        )}
         {currentPage === 5 && (
           <>
           <h1 className='step-title step-title-light'>How much do you want to furnish/remodel?
 </h1>
           <form className='introduction-quiz-form multi-check-text'>
            <div class={getContainerClassName('checkbox11')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox11'] || false}
          onChange={() => handleCheckboxChange('checkbox11') }/>
      <div className='option-desc'>
      Light remodel - Just furniture, decor, floor lighting, light wall art 




      </div>
  </div>
  <div class={getContainerClassName('checkbox12')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox12'] || false}
          onChange={() => handleCheckboxChange('checkbox12') }/>
      <div className='option-desc'>
      Medium remodel - Fitted lighting + Smart lighting, wall shelving



      </div>
  </div>
  <div class={getContainerClassName('checkbox13')}>
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox13'] || false}
          onChange={() => handleCheckboxChange('checkbox13') }/>
      <div className='option-desc'>
      Full remodel - significant wall work (e.g. painting, paneling, wainscoting, etc.), soundproofing



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
            <h1 className='step-title step-title-light'>What's your total budget for furniture/furnishings & installation?
 </h1>
<form className='introduction-quiz-form multi-check-text'>
            <div class={getContainerClassName('checkbox14')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox14'] || false}
          onChange={() => handleCheckboxChange('checkbox14') }/>
      <div className='option-desc'>
      AED 2,500 - 5,000 





      </div>
  </div>
  <div class={getContainerClassName('checkbox15')}>
     
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox15'] || false}
          onChange={() => handleCheckboxChange('checkbox15') }/>
      <div className='option-desc'>
      AED 5,000 - 10,000



      </div>
  </div>
  <div class={getContainerClassName('checkbox16')}>
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox16'] || false}
          onChange={() => handleCheckboxChange('checkbox16') }/>
      <div className='option-desc'>
      AED 10,000 - 15,000



      </div>
  </div>
  <div class={getContainerClassName('checkbox17')}>
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox17'] || false}
          onChange={() => handleCheckboxChange('checkbox17') }/>
      <div className='option-desc'>
      AED 15,000 - 20,000



      </div>
  </div>
  <div class={getContainerClassName('checkbox18')}>
      <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox18'] || false}
          onChange={() => handleCheckboxChange('checkbox18') }/>
      <div className='option-desc'>
      AED 20,000+



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
            <h1 className='step-title step-title-light'>Any other references you want us to be inspired by? (e.g. pictures of other homes, visuals from media, etc.) </h1>
            <form className='introduction-quiz-form'>
          <input type='file' />
    
</form>
               
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='back-button' onClick={prev}>Back</button>
                <button className='next-button' onClick={next}>Next</button>
              </div>
            </>
        )}
         {currentPage === 8 && (
            <>
            <h1 className='step-title step-title-light'>Anything else you want us to know? (e.g. things you really want to see in your space, any design style/vibe you want us to primarily bear in mind, etc.)

 </h1>
            <form className='introduction-quiz-form'>
          <input type='text' placeholder='Please write here ' />
</form>
               
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='back-button' onClick={prev}>Back</button>
                <button className='next-button' onClick={next}>Next</button>
              </div>
            </>
        )}
         {currentPage === 9 && (
           <>
           <h1 className='step-title step-title-light'>Address</h1>
<form className='introduction-quiz-form'>
          <input type='text' placeholder='Enter your Address'/>
    
</form>
              
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <button className='back-button' onClick={prev}>Back</button>
               <button className='next-button' onClick={next}>Next</button>
             </div>
           </>
        )}
         {currentPage === 10 && (
           <>
           <h1 className='step-title step-title-light'>Floor plan upload</h1>
<form className='introduction-quiz-form'>
          <input type='file'/>
    
</form>
              
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <button className='back-button' onClick={prev}>Back</button>
               <button className='next-button' onClick={next}>Next</button>
             </div>
            
           </>
        )}
     {currentPage === 11 && (
           <>
           <h1 className='step-title step-title-light'>Photos of the space</h1>
       
           <form className='introduction-quiz-form multi-check-text'>
           <div class={getContainerClassName('checkbox20')}>
     
     <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox20'] || false}
         onChange={() => handleCheckboxChange('checkbox20') }/>
     <div className='option-desc'>
     Do you have the dimensions?



     </div>
 </div>
          <input type='number' placeholder="L" className='dimensions' /> * <input type='number' placeholder="W" className='dimensions' />

    
</form>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <button className='back-button' onClick={prev}>Back</button>
               <button className='next-button' onClick={next}>Next</button>
             </div>
            
           </>
        )}
         {currentPage === 12 && (
           <>
           <h1 className='step-title step-title-light'>Preferred day & time of appointment</h1>
       
           <form className='introduction-quiz-form multi-check-text'>
          <input type='date' />
          <select id="timeSlot" onChange={handleTimeChange} value={selectedTime}>
        <option value="">Select Time</option>
        {timeSlots.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      <div class="container terms-container">
     
     <input type="checkbox" class="checkbox" id="check1" checked={checkboxStates['checkbox21'] || false}
         onChange={() => handleCheckboxChange('checkbox21') }/>
     <div className='option-desc'>
     I agree with <a href='#'>Terms & Conditions</a>



     </div>
 </div>
    
</form>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <button className='back-button' onClick={prev}>Back</button>
              <button type='submit' className='continue-button' onClick={() => setModal(true)} ><span>Submit</span> <KeyboardDoubleArrowRightIcon /></button>
              
             </div>
             
           </>
        )}
       
       <Modal show={modal} handleClose={handleCloseModal}
			       children={<>  <TickIcon /> <h3>Thank you</h3> <p> You will be contacted to schedule an
				       appointment.</p> </>} />
      </form>
     
   </>
  )
}

export default FormQuiz