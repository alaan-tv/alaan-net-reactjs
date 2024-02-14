import React, {useState} from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import Modal from './Modal';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


import TickIcon from './TickIcon';

const FormQuiz = ({handleClose1}) => {
	const [modal, setModal] = useState(false);
	const timeSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'];
	const [currentPage, setCurrentPage] = useState(1);

	const [checkboxStates, setCheckboxStates] = useState({});
	const [inputs, setInputs] = useState({});
	const handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		if (event.target.type == 'checkbox') {
			if(event.target.classList[1]==='question_2'){
				event.target.classList.toggle('checked');
				if(event.target.classList.contains('checked')){
					event.target.parentElement.parentElement.classList.add('pink');
					event.target.parentElement.parentElement.classList.remove('white');
					setInputs(values => ({...values, [name]: value}));
				}else{
					event.target.parentElement.parentElement.classList.remove('pink');
					event.target.parentElement.parentElement.classList.add('white');
					event.target.checked=false;
					event.target.required = false;
					delete inputs[name];
				}

			}else{
				document.querySelectorAll('.' + event.target.classList[1]).forEach((el) => {
					el.parentElement.parentElement.classList.add('white');
					el.parentElement.parentElement.classList.remove('pink');
					el.checked = false;
					el.required = false;
					if (name != el.name) {
						delete inputs[el.name];
						delete inputs[el.name + '_checked'];
					}
				});
				event.target.parentElement.parentElement.classList.add('pink');
				event.target.parentElement.parentElement.classList.remove('white');
				setInputs(values => ({...values, [name]: value}));
			}

		} else {
			if(name=='question_8'){
				let xxx = {answer:value,question:question_8.question,};
				setInputs(values => ({...values, [name]: xxx }));
			}else if(name=='question_9'){
				let xxx = {answer:value,question:question_9.question,};
				setInputs(values => ({...values, [name]: xxx }));
			}else{
				setInputs(values => ({...values, [name]: value}));
			}

		}
		console.log(inputs);
	}

	const handleSubmit = (e) => {
		console.log(inputs);
		localStorage.setItem('quiz_2', JSON.stringify(inputs));

	};
	const handleCloseModal = () => {
		setModal(false)
		handleClose1();
	};


	const handleCheckboxChange = (checkboxName) => {
		setCheckboxStates((prevStates) => {
			const updatedStates = {...prevStates};

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

	const checkedCheckbox = Object.keys(checkboxStates).find((checkboxName) => checkboxStates[checkboxName]);
	const checkCheckbox = (checkboxName) => {
		if (checkboxStates[checkboxName]) {
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


	const [items, setItems] = useState([{
		id: 'item1', name: 'Bedroom', quantity: 0, price: 3499, price1: 'AED 3,499', checked: false
	}, {
		id: 'item2', name: 'Living room ', quantity: 0, price: 4299, price1: 'AED 4,299 ', checked: false
	}, {id: 'item3', name: 'Office', quantity: 0, price: 3899, price1: 'AED 3,899', checked: false}, {
		id: 'item4', name: 'Kitchen', quantity: 0, price: 5299, price1: 'AED 5,299', checked: false
	},

		// Add more items as needed
	]);

	const calculateTotalPrice = () => {
		return items.reduce((total, item) => (item.checked ? total + item.quantity * item.price : total), 0);
	};

	const handleQuantityChange = (itemId, value) => {
		setItems(prevItems => prevItems.map(item => item.id === itemId ? {
			...item, quantity: Math.max(item.quantity + value, 0)
		} : item));
	};

	const handleCheckboxChange1 = (itemId) => {
		setItems((prevItems) => prevItems.map((item) => item.id === itemId ? {
			...item, checked: !item.checked, quantity: !item.checked ? 1 : item.quantity
		} : item));
	};

	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const filterWeekends = (date) => {
		return date.getDay() !== 0; // Disable Sundays (0)
	};

	const question_3 = {
		question: 'Which colour palette do you most like to decorate your home with?', options: [{
			answer: 'Apartment'
		}, {
			answer: 'Villa'
		}, {
			answer: 'Townhouse'
		},]
	};

	const question_4 = {
		question: 'Are there any restrictions on your property?', options: [{
			answer: 'Yes'
		}, {
			answer: 'No'
		},]
	};

	const question_5 = {
		question: 'How much do you want to furnish/remodel?', options: [{
			answer: 'Light remodel - Just furniture, decor, floor lighting, light wall art'
		}, {
			answer: 'Medium remodel - Fitted lighting + Smart lighting, wall shelving'
		}, {
			answer: 'Full remodel - significant wall work (e.g. painting, paneling, wainscoting, etc.), soundproofing'
		},]
	};

	const question_6 = {
		question: `What's your total budget for furniture/furnishings & installation?`, options: [{
			answer: 'AED 2,500 - 5,000'
		}, {
			answer: 'AED 5,000 - 10,000'
		}, {
			answer: 'AED 10,000 - 15,000'
		}, {
			answer: 'AED 15,000 - 20,000'
		}, {
			answer: 'AED 20,000+'
		},]
	};

	const question_7 = {
		question: `Any other references you want us to be inspired by? (e.g. pictures of other homes, visuals from media, etc.)`,
	}

	const question_8 = {
		question: `Anything else you want us to know? (e.g. things you really want to see in your space, any design style/vibe you want us to primarily bear in mind, etc.) `,
	};

	const question_9 = {
		question: `Address`,
	};


	const question_10 = {
		question: `Floor plan upload`,
	};

	const question_11 = {
		question: `Photos of the space`,
	};
	const question_11_1 = {
		question: `Do you have the dimensions?`,
	};

	const question_12 = {
		question: `Preferred day & time of appointment`,
	};

	const OptionHtml = (index, id, item) => {
		let option_group = 'question_' + index;
		let field_name = option_group + '_' + id;
		let is_required = Object.keys(inputs).toString().indexOf(option_group) > 1 ? '' : 'required';
		return (


				<div className={(inputs[field_name] || '') ? "container pink" : 'container white'}>
					<label className='quiz-label'>
					<input type="checkbox" className={'checkbox ' + option_group} name={field_name}
					       value={JSON.stringify(item)}
					       checked={(inputs[field_name] || '') ? "checked" : false}
					       onChange={handleChange} required={is_required}/>
					<div className='option-desc'>{item.answer && item.answer}</div>
					</label>
				</div>
			);
	}

	return (<div className='formQuiz'>

		<form className="quiz-form" onSubmit={handleSubmit}>

			<div className='question'>
				<h1 className='form-step-title'>1-Firstly, tell us the story of how we're designing your home! Which
					memory/ movie/ T.V show/ book cover/ song is inspiring our creativity? Feel free to add any
					references in the box below!
				</h1>
				<div className='introduction-quiz-form'>
					<input type="file" required/>
					<textarea name='story' value={inputs.story || ''}
					          onChange={handleChange} placeholder='Tell us your story' required></textarea>

				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>2-What room are we designing and how many of them?</h1>
				<div className='introduction-quiz-form multi-check-text' onSubmit={handleSubmit}>
					{items.map((item,i) => (


						<div className='container white'>
							<label className='quiz-label' key={item.id} >
								<input type="checkbox" class={'checkbox  question_2'} name={'question_2_'+i}
								       value={JSON.stringify(item)}
								       checked={(inputs['question_2_'+i] || '') ? "checked" : ''}
								      onChange={handleChange} />
								<div className='option-desc'>{item.name}: {item.price1}</div>
							</label>

							<div className='quantity'><span>Number of {item.name}: </span>
								<span className='quantity-tool'
								      onClick={() => item.checked ? handleQuantityChange(item.id, 1) : null}>+</span>
								<span style={{
									color: (inputs['question_2_'+i] || '') ? '#fff' : '#000', fontSize: '18px'
								}}>{item.quantity}</span>
								<span className='quantity-tool'
								      onClick={() => handleQuantityChange(item.id, -1)}>-</span></div>
						</div>
					))}

					<div className='total-price'>
						<h3>Total Price: AED {calculateTotalPrice()}</h3>
					</div>
				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>3-{question_3.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_3.options.map((item, i) => OptionHtml(3, i, {...item, question: question_3.question}))}
				</div>
			</div>

			<div className='question'>
				<h1 className='form-step-title'>4-{question_4.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_4.options.map((item, i) => OptionHtml(4, i, {...item, question: question_4.question}))}
					<input type="text" name='question_4_yes' value={inputs.question_4_yes || ''}  onChange={handleChange}
					       placeholder='If yes, please provide details' required={inputs['question_4_0_checked']?'required':''}/>
				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>5-{question_5.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_5.options.map((item, i) => OptionHtml(5, i, {...item, question: question_5.question}))}
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>6-{question_6.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_6.options.map((item, i) => OptionHtml(6, i, {...item, question: question_6.question}))}
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>7-{question_7.question}
				<small style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small></h1>
				<div className='introduction-quiz-form'>
					<input type='file' name="question_7" value={inputs.question_7 || ""} onChange={handleChange}/>
				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>8-{question_8.question}
					<small style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small>
				</h1>
				<div className='introduction-quiz-form'>
					<input type='text' name='question_8' placeholder='Name' value={JSON.stringify(inputs.question_8 || '')}
					       onChange={handleChange} maxLength='500' placeholder='Please write here '/>
				</div>
			</div>



			<div className='question'><h1 className='form-step-title'>9-{question_9.question}
				<small style={{fontWeight: "normal", fontSize: "16px"}}></small></h1>

				<div className='introduction-quiz-form'>
					<input type='text' placeholder='Enter your Address' name="question_9" value={inputs.question_9|| ""}
					       required onChange={handleChange}/>

				</div>
			</div>



			<div className='question'>
				<h1 className='form-step-title'>10-{question_10.question}
					<small style={{fontWeight:'normal', fontSize: '16px'}}> (Optional)</small>
				</h1>
				<div className='introduction-quiz-form'>
					<input type='file' name="question_10" value={inputs.question_10 || ""} onChange={handleChange}/>
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>11-{question_11.question}</h1>

				<div className='introduction-quiz-form multi-check-text'>
				<input type="file" required/>
					<label className='quiz-label' htmlFor={"check15"}>
						<div class={getContainerClassName('checkbox20')}>
							<input type="checkbox" class="checkbox" id="check15"
							       checked={checkboxStates['checkbox20'] || false}
							       onChange={() => handleCheckboxChange('checkbox20')}/>
							<div className='option-desc'> Do you have the dimensions? </div>
						</div>
					</label>
					<div class="dimensions-section">
					<input type='number' placeholder="L" className='dimensions'/><small> Cm</small>
					<CloseIcon style={{margin: "10px 20px -5px 20px", fontSize: "18px"}}/>
					<input type='number' placeholder="W" className='dimensions'/>
					<small>Cm</small>
					</div>
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>12-{question_12.question}</h1>
				<div className='introduction-quiz-form multi-check-text date-form'>
					<DatePicker
						showIcon
						selected={selectedDate}
						onChange={handleDateChange}
						filterDate={filterWeekends}
						placeholderText="Please select a date"
						required
					/>
					<select id="timeSlot" name='question_12_2' value={inputs.question_12_2||''} onChange={handleChange} required>
						<option value="">Select Time</option>
						{timeSlots.map((time, index) => (<option key={index} value={time}>
							{time}
						</option>))}
					</select>
				</div>
				<div class="container terms-container">
					<input type="checkbox" class="checkbox" name='terms' value={inputs.terms||''}
					       checked={(inputs.terms||'')?'checked':''}
					       onChange={handleChange} required/>
					<div className='option-desc'>
						I agree with <a href='#'>Terms & Conditions</a>
					</div>
				</div>
			</div>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<button className='back-button' onClick={(currentPage) => setCurrentPage(p => --p)}>Back</button>
				<button type='submit' className='continue-button'><span>Submit</span>
					<KeyboardDoubleArrowRightIcon/></button>
			</div>


			<Modal className="thank-quiz" show={modal} handleClose={handleCloseModal}
			       children={<>  <TickIcon/> <h3>Thank you</h3> <p> We can't wait to get started!<br/> You’ll
				       receive an email shortly with a link for a 50% down payment- once it’s paid, your consultant
				       will contact you to confirm your appointment date & you’ll be on your way to your dream home!
			       </p> </>}/>
		</form>

	</div>)
}

export default FormQuiz