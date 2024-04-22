import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import Modal from './Modal';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ajax_url, formData} from "../../custom-functions";

const FormQuiz = ({handleClose1}) => {
	const [modal, setModal] = useState(false);
	const timeSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'];
	const [currentPage, setCurrentPage] = useState(1);

	/**
	 * Object Content
	 */

	const question_1 = {
		question: `Firstly, tell us the story of how we're designing your home! Which memory/ movie/ T.V show/ book cover/ song is inspiring our creativity? Feel free to add any references in the box below!`
	}
	const question_2 = {
		question: `What room are we designing and how many of them?`
	}

	const question_3 = {
		question: 'What kind of property is it?', options: [{
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

	const question_12 = {
		question: `Preferred day & time of appointment`,
	};

	const [selectedDate, setSelectedDate] = useState(null);
	const [inputs, setInputs] = useState({});
	const refFile = useRef(null);
	const otherRefFile = useRef(null);
	const floorPlanFile = useRef(null);
	const photosFile = useRef(null);

	const handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		if (event.target.type === 'checkbox') {
			let checkInput = document.querySelectorAll('.' + event.target.classList[1]);
			let checkedInput = [].filter.call(checkInput, el => el.checked);
			if (event.target.classList[1] === 'question_2') {
				checkInput.forEach(el => {
					el.required = event.target.checked === false && checkedInput.length < 1 ? true : false;
					resetQuantity(event.target.dataset.id);
				});
				if (event.target.checked === true) {
					handleQuantityChange(event.target.dataset.id, 1);
				}
				setInputs(values => ({...values, [name]: event.target.checked === true ? value : false}));
			} else if (['dimensions', 'terms'].includes(name)) {
				setInputs(values => ({...values, [name]: event.target.checked === true}));
			} else {
				checkInput.forEach((el) => {
						el.required = event.target.checked === false && checkedInput.length < 1 ? true : false;
						setInputs(values => ({...values, [el.name]: false}));
					}
				);
				setInputs(values => ({...values, [name]: value}));
			}
		} else {
			setInputs(values => ({...values, [name]: value}));
		}
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		//copy object in new variable
		let data = {...inputs}

		// remove empty element
		for (const key in data) {
			if (data[key] === false) {
				delete data[key];
			}
		}

		// rename keys
		for (const key in data) {
			data[key.substring(0, 10)] = data[key];
			delete data[key];
		}

		// handle multiple images
		const multipleFile = (fileObject, name) => {
			for (let x = 0; x < fileObject.length && x < 3; x++) {
				data[`${name}[${x}]`] = fileObject[x];
			}
		}
		multipleFile(refFile.current.files, 'ref_file');
		multipleFile(otherRefFile.current.files, 'other_ref');
		multipleFile(floorPlanFile.current.files, 'floor_plan');
		multipleFile(photosFile.current.files, 'photos');

		// generate formData object
		const form_data = formData({
			...data,
			question_1: JSON.stringify({
				id: 1, story: inputs.story, phone: inputs.phone, question: question_1.question
			}),
			question_2: JSON.stringify(items),
			question_4: JSON.stringify({
				id: 4,
				answer: inputs.question_4_0 ? 'Yes' : 'No',
				details: inputs.details,
				question: question_4.question
			}),
			question_7: JSON.stringify({id: 7, question: question_7.question}),
			question_8: JSON.stringify({id: 8, answer: inputs.primary, question: question_8.question}),
			question_9: JSON.stringify({id: 9, answer: inputs.address, question: question_9.question}),
			question_10: JSON.stringify({id: 10, question: question_10.question}),
			question_11: JSON.stringify({
				id: 11,
				dimensions: {length: inputs.length, width: inputs.width},
				question: question_11.question
			}),
			question_12: JSON.stringify({
				id: 12,
				date: selectedDate, time: inputs.time, question: question_12.question
			}),
			name: localStorage.getItem('LBD_name'),
			email: localStorage.getItem('LBD_email'),
			phone: localStorage.getItem('LBD_phone'),
			lp_type: 'LBD',
		});
		setModal(true);
		// Send data to server
		fetch(ajax_url("wp-api/v2/alaan-net/store-quiz-data.php"), {method: 'Post', body: form_data})
			.then(response => response.json())
			.then(data => {
				localStorage.removeItem('LBD_name');
				localStorage.removeItem('LBD_email');
				localStorage.removeItem('LBD_phone');
				localStorage.setItem('LBD_Quiz','1');
				window.location = '/our-services/LBD/thank-you';
			})
			.catch(error => console.error(error));

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
			...item, quantity: item.quantity + value
		} : item));
	};

	const resetQuantity = (itemId) => {
		setItems(prevItems => prevItems.map(item => item.id === itemId ? {
			...item, quantity: 0
		} : item));
	};

	const OptionHtml = (index, id, item) => {
		let option_group = 'question_' + index;
		let field_name = option_group + '_' + id;
		let is_required = Object.keys(inputs).toString().indexOf(option_group) > 1 ? false : 'required';
		return (<div className={(inputs[field_name] || '') ? "container pink" : 'container white'}>
			<label className='quiz-label'>
				<input type="checkbox" className={'checkbox ' + option_group} name={field_name}
				       value={JSON.stringify(item)}
				       checked={(inputs[field_name] || '') ? "checked" : false}
				       onChange={handleChange} required={is_required}
				       onInvalid={invalidInput} onInput={validInput}/>
				<div className='option-desc'>{item.answer && item.answer}</div>
			</label>
		</div>);
	}

	const inputFileHandler = (event) => {
		const attachments = event.target.files;
		const fileBuffer = new DataTransfer();
		let fileLimit = 16000;
		// append the file list to an array iteratively
		for (let i = 0; i < attachments.length; i++) {
			// Exclude file if more then 3
			if (i < 3) {
				let fileSize = attachments[i]['size'];
				let fileSizeInKB = (fileSize / 1024);
				if (fileSizeInKB > fileLimit) {
					alert("File size more than 16MB will be ignored.");
				} else {
					fileBuffer.items.add(attachments[i]);
				}
			} else {
				alert('A maximum of 3 files are accepted');
				break;
			}
		}
		// Assign buffer to file input
		event.target.files = fileBuffer.files;
	}

	const invalidInput = (event) => {
		if (event.target.type === 'checkbox') {
			document.querySelectorAll(`.${event.target.classList[1]}`).forEach((el) => {
				el.parentElement.parentElement.classList.add('border-red');
			});
		} else {
			event.target.classList.add('border-red');
			document.querySelector('.react-datepicker-wrapper input').classList.add('border-red');
		}

	}

	const validInput = (event) => {
		if (event.target.type === 'checkbox') {
			document.querySelectorAll(`.${event.target.classList[1]}`).forEach((el) => {
				el.parentElement.parentElement.classList.remove('border-red');
			});
		} else {
			event.target.classList.remove('border-red');
			document.querySelector('.react-datepicker-wrapper input').classList.remove('border-red');
		}
	}

	return (<div className='formQuiz'>

		<form method={'post'} className="quiz-form" onSubmit={handleSubmit} encType="multipart/form-data">

			<div className='question'>
				<h1 className='form-step-title'>1-{question_1.question}</h1>
				<div className='introduction-quiz-form'>
					<input type="file" ref={refFile} accept="image/*,.pdf" multiple={true} onChange={inputFileHandler}/>
					<textarea name='story' value={inputs.story || ''} onInvalid={invalidInput} onInput={validInput}
					          onChange={handleChange} placeholder='Tell us your story' required></textarea>

				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>2-{question_2.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{items.map((item, i) => {
						item.checked = (inputs['question_2_' + i] || '') ? "checked" : false;
						item.question = question_2.question;
						return (<div key={item.id} className={item.checked ? "container pink" : 'container white'}>
							<label className='quiz-label'>
								<input data-id={item.id} type="checkbox" class={'checkbox  question_2'}
								       name={'question_2_' + i}
								       value={JSON.stringify(item)}
								       checked={item.checked} required={true}
								       onChange={handleChange} onInvalid={invalidInput} onInput={validInput}/>
								<div className='option-desc'>{item.name}: {item.price1}</div>
							</label>
							<div className='quantity'><span>Number of {item.name}: </span>
								<span className='quantity-tool'
								      onClick={() => item.checked && item.quantity < 10 ? handleQuantityChange(item.id, 1) : null}>+</span>
								<span style={{
									color: item.checked ? '#fff' : '#000', fontSize: '18px'
								}}>{item.quantity}</span>
								<span className='quantity-tool'
								      onClick={() => item.quantity > 0 ? handleQuantityChange(item.id, -1) : null}>-</span>
							</div>
						</div>)
					})}

					<div className='total-price'>
						<h3>Total Price: AED {calculateTotalPrice()}</h3>
					</div>
				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>3-{question_3.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_3.options.map((item, i) => OptionHtml(3, i, {
						...item,
						id: 3,
						question: question_3.question
					}))}
				</div>
			</div>

			<div className='question'>
				<h1 className='form-step-title'>4-{question_4.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_4.options.map((item, i) => OptionHtml(4, i, {
						...item,
						id: 4,
						question: question_4.question
					}))}
					<input type="text" name='details' value={inputs.details || ''} onChange={handleChange}
					       placeholder='If yes, please provide details'
					       required={inputs['question_4_0'] ? true : false}
					       readonly={inputs['question_4_0'] ? false : 'readonly'}
					       onInvalid={invalidInput} onInput={validInput}/>
				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>5-{question_5.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_5.options.map((item, i) => OptionHtml(5, i, {
						...item,
						id: 5,
						question: question_5.question
					}))}
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>6-{question_6.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_6.options.map((item, i) => OptionHtml(6, i, {
						...item,
						id: 6,
						question: question_6.question
					}))}
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>7-{question_7.question}
				<small style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small></h1>
				<div className='introduction-quiz-form'>
					<input type="file" ref={otherRefFile} accept="image/*,.pdf" multiple={true}
					       onChange={inputFileHandler}/>
				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>8-{question_8.question}
					<small style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small>
				</h1>
				<div className='introduction-quiz-form'>
					<input type='text' name='primary' value={inputs.primary || ''}
					       onChange={handleChange} maxLength='500' placeholder='Please write here '/>
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>9-{question_9.question}
				<small style={{fontWeight: "normal", fontSize: "16px"}}></small></h1>

				<div className='introduction-quiz-form'>
					<input type='text' placeholder='Enter your Address' name="address"
					       value={inputs.address || ""} maxLength='250'
					       required onChange={handleChange} onInvalid={invalidInput} onInput={validInput}/>

				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>10-{question_10.question}
					<small style={{fontWeight: 'normal', fontSize: '16px'}}> (Optional)</small>
				</h1>
				<div className='introduction-quiz-form'>
					<input type="file" ref={floorPlanFile} multiple={true} accept="image/*,.pdf"
					       onChange={inputFileHandler}/>
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>11-{question_11.question}</h1>

				<div className='introduction-quiz-form multi-check-text'>
					<input type="file" ref={photosFile} multiple={true} accept="image/*,.pdf"
					       onChange={inputFileHandler} required
					       onInvalid={invalidInput} onInput={validInput}/>
					<label className='quiz-label'>
						<div class={(inputs.dimensions || '') ? 'container pink' : 'container white'}>
							<input type="checkbox" class="checkbox" name='dimensions' value="1"
							       checked={(inputs.dimensions || '') ? 'checked' : false}
							       onChange={handleChange}/>
							<div className='option-desc'> Do you have the dimensions?</div>
						</div>
					</label>
					<div class="dimensions-section">
						<input type='number' placeholder="L" className='dimensions' name='length'
						       value={inputs.length || ''} required={(inputs.dimensions || '') ? true : false}
						       readonly={(inputs.dimensions || '') ? false : 'readonly'} min={0}
						       onChange={handleChange}/><small> cm</small>
						<CloseIcon style={{margin: "10px 20px -5px 20px", fontSize: "18px"}}/>
						<input type='number' placeholder="W" className='dimensions' name='width'
						       value={inputs.width || ''} required={(inputs.dimensions || '') ? true : false}
						       readonly={(inputs.dimensions || '') ? false : 'readonly'} min={0}
						       onChange={handleChange}/>
						<small>cm</small>
					</div>
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>12-{question_12.question}</h1>
				<div className='introduction-quiz-form multi-check-text date-form'>
					<DatePicker
						showIcon
						selected={selectedDate}
						onChange={(date) => setSelectedDate(date)}
						filterDate={(date) => date.getDay() !== 0}
						placeholderText="Please select a date"
						minDate={new Date()}
						required
						onInvalid={invalidInput} onInput={validInput}
					/>
					<select id="timeSlot" name='time' value={inputs.time || ''}
					        onChange={handleChange} required onInvalid={invalidInput} onInput={validInput}>
						<option value="">Select Time</option>
						{timeSlots.map((item, index) => (<option key={index} value={item}>
							{item}
						</option>))}
					</select>
				</div>
				<div class="container terms-container">
					<input type="checkbox" class="checkbox" name='terms' value="1"
					       checked={(inputs.terms || '') ? 'checked' : ''}
					       onChange={handleChange} required/>
					<div className='option-desc'>
						I agree with<Link
									to='/lbd-terms' target="_blank">Terms & Conditions</Link>
					</div>
				</div>
			</div>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<button className='back-button' onClick={(currentPage) => setCurrentPage(p => --p)}>Back</button>
				<button type='submit' className='continue-button'><span>Submit</span>
					<KeyboardDoubleArrowRightIcon/></button>
			</div>


			<Modal className="thank-quiz" show={modal} readonly={true}
			       children={<> <h3>Please wait...</h3> <p> We are saving your details.</p> </>}/>
		</form>

	</div>)
}

export default FormQuiz