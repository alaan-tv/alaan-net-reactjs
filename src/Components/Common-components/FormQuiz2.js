import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import Modal from './Modal';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ajax_url, formData} from "../../custom-functions";

const FormQuiz2 = ({handleClose1}) => {
	const [modal, setModal] = useState(false);
	const timeSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'];
	const [currentPage, setCurrentPage] = useState(1);

	/**
	 * Object Content
	 */

	const question_1 = {
		question: `How would you describe the nature of your content? E.g. Inspirational & thought-provoking, light & entertaining, exciting & cool, fun & informative, etc.)`
	}
	const question_2 = {
		question: `Which content creator's set/visual style do you most admire? (feel free to list more than 1!)`
	}

	const question_3 = {
		question: 'What category of content do you produce?'
	};

	const question_4 = {
		question: 'Do you have any branding elements that you\'d like to feature: Logo prominently displayed, Subtle brand colors, or Unique props related to your brand.',


	};

	const question_5 = {
		question: 'Do you have any visual references from TV/ Cinema/ other content creators you want us to take inspiration from?',
	};

	const question_6 = {
		question: `What type of props or set dressing do you frequently use: E.g. Tech gadgets, Plants and greenery, Unique and quirky items, Green-screens?`
	};

	const question_7 = {
		question: `Would you like to have a set space to film collabs with other creators?`,
		options: [{
			answer: 'Yes'
		}, {
			answer: 'No'
		},]
	}

	const question_8 = {
		question: `Show off your stuff! Please attach a link to all of your channels: (Instagram, Facebook, TikTok, Youtube, Vimeo, Reddit)
        `,
	};

	const question_9 = {
		question: `How big is your set?`, options: [{
			answer: 'Corner Room- AED 2,999'
		}, {
			answer: 'Half Room- AED 3,699'
		}, {
			answer: 'Full Room- AED 3,999'
		},]
	};


	const question_10 = {
		question: `Where is your set?`, options: [{
			answer: 'Private residence'
		}, {
			answer: 'Commercial building'
		},]
	};

	const question_11 = {
		question: `How much do you want to remodel?`, options: [{
			answer: 'Light remodel - Just furniture, decor, floor lighting, light wall art'
		}, {
			answer: 'Medium remodel - Fitted lighting + Smart lighting, wall shelving'
		}, {
			answer: 'Full remodel - significant wall work (e.g. painting, paneling, wainscoting, etc.), soundproofing'
		},]
	};

	const question_12 = {
		question: `What's your total budget for furniture/furnishings & installation?`, options: [{
			answer: 'AED 1,500 - 3,000'
		}, {
			answer: 'AED 3,000 - 5,000'
		}, {
			answer: 'AED 5,000+'
		},]
	};
	const question_13 = {
		question: `Are there any restrictions on the property?`, options: [{
			answer: 'Yes'
		}, {
			answer: 'No'
		}, ]
	};
	const question_14 = {
		question: `Anything else you want us to know? (e.g. things you really want to see in your space, any design style/vibe you want us to primarily bear in mind, etc.)
        `
	};
	const question_15 = {
		question: `Address`,};
	const question_16 = {
		question: `Floor plan`,
	};
	const question_17 = {
		question: `Photos of the space`, options: [{
			answer: 'Do you have the dimensions? (LxW) '
		},]
	};
	const question_18 = {
		question: `Preferred day & time of appointment`,
	};
	const [selectedDate, setSelectedDate] = useState(null);
	const [inputs, setInputs] = useState({});
	const answer4File = useRef(null);
	const answer5File = useRef(null);
	const answer16File = useRef(null);
	const answer17File = useRef(null);

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
				});
				setInputs(values => ({...values, [name]: value}));
			}
		} else {
			setInputs(values => ({...values, [name]: value}));
		}

		console.log(inputs);
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		//copy object in new variable
		let data = {...inputs}

		// rename keys & remove empty element
		for (const key in data) {
			if (data[key] !== false) {
				data[key.split("__")[0]] = data[key];
				if (key.length > 10) {
					delete data[key];
				}
			}else{
				delete data[key];
			}
		}

		// handle multiple images
		const multipleFile = (fileObject, name) => {
			for (let x = 0; x < fileObject.length && x < 3; x++) {
				data[`${name}[${x}]`] = fileObject[x];
			}
		}
		multipleFile(answer4File.current.files, 'answer_4');
		multipleFile(answer5File.current.files, 'answer_5');
		multipleFile(answer16File.current.files, 'answer_16');
		multipleFile(answer17File.current.files, 'answer_17');

		// generate formData object
		const form_data = formData({
			...data,
			question_1: JSON.stringify({ id: 1, answer: inputs.answer_1, question: question_1.question }),
			question_2: JSON.stringify({ id: 2, answer: inputs.answer_2, question: question_2.question }),
			question_3: JSON.stringify({ id: 3, answer: inputs.answer_3, question: question_3.question }),
			question_4: JSON.stringify({id: 4, question: question_4.question}),
			question_5: JSON.stringify({id: 5, question: question_5.question}),
			question_6: JSON.stringify({ id: 6, answer: inputs.answer_6, question: question_6.question }),
			question_8: JSON.stringify({id: 8, answer: inputs.answer_8, question: question_8.question}),
			question_13: JSON.stringify({
				id: 13,
				answer: inputs.question_13_0 ? 'Yes' : 'No',
				details: inputs.details,
				question: question_13.question
			}),
			question_14: JSON.stringify({id: 14, answer: inputs.answer_14, question: question_14.question}),
			question_15: JSON.stringify({id: 15, answer: inputs.answer_15, question: question_15.question}),
			question_16: JSON.stringify({id: 16, question: question_16.question}),
			question_17: JSON.stringify({
				id: 17, dimensions: {length: inputs.length, width: inputs.width}, question: question_17.question
			}),
			question_18: JSON.stringify({
				id: 18, date: selectedDate, time: inputs.time, question: question_18.question
			}),
			name: localStorage.getItem('CBD_name'),
			email: localStorage.getItem('CBD_email'),
			phone: localStorage.getItem('CBD_phone'),
			lp_type: 'CBD',
		});

		setModal(true);
		// Send data to server
		fetch(ajax_url("wp-api/v2/alaan-net/store-quiz-data.php"), {method: 'Post', body: form_data})
			.then(response => response.json())
			.then(data => {
				localStorage.removeItem('CBD_name');
				localStorage.removeItem('CBD_email');
				localStorage.removeItem('CBD_phone');
				localStorage.setItem('CBD_Quiz', '1');
				window.location = '/our-services/CBD/thank-you';
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
	}, // Add more items as needed
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
		let field_name = option_group + '__' + id;
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
					 <textarea name='answer_1' value={inputs.answer_1 || ''} onInvalid={invalidInput} onInput={validInput}
					           onChange={handleChange} placeholder='Please write here ' required></textarea>

				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>2-{question_2.question}<small
					style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small></h1>
				<div className='introduction-quiz-form'>
                <textarea name='answer_2' value={inputs.answer_2 || ''} onInvalid={invalidInput} onInput={validInput}
                          onChange={handleChange} placeholder='Please write here ' ></textarea>

				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>3-{question_3.question}</h1>
				<div className='introduction-quiz-form'>
					<textarea name='answer_3' value={inputs.answer_3 || ''} onInvalid={invalidInput} onInput={validInput}
					          onChange={handleChange} placeholder='Please write here ' required></textarea>
				</div>
			</div>

			<div className='question'>
				<h1 className='form-step-title'>4-{question_4.question}<small
					style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small></h1>
				<div className='introduction-quiz-form'>
					<input type="file" ref={answer4File} accept="image/*,.pdf" multiple={true}
					       onChange={inputFileHandler}/>

				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>5-{question_5.question}<small
					style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small></h1>
				<div className='introduction-quiz-form'>
					<input type="file" ref={answer5File} accept="image/*,.pdf" multiple={true}
					       onChange={inputFileHandler}/>
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>6-{question_6.question}<small
				style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small></h1>
				<div className='introduction-quiz-form'>
					<textarea name='answer_6' value={inputs.answer_6 || ''} onInvalid={invalidInput} onInput={validInput}
					          onChange={handleChange} placeholder='Please write here' ></textarea>
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>7-{question_7.question}
				<small style={{fontWeight: "normal", fontSize: "16px"}}></small></h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_7.options.map((item, i) => OptionHtml(7, i, {
						...item,
						id: 7,
						question: question_7.question
					}))}

				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>8-{question_8.question}
					<small style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small>
				</h1>
				<div className='introduction-quiz-form'>
					<textarea name='answer_8' value={inputs.answer_8 || ''} onInvalid={invalidInput} onInput={validInput}
					          onChange={handleChange} placeholder='Please write here ' required></textarea>
				</div>
			</div>


			<div className='question'><h1 className='form-step-title'>9-{question_9.question}
				<small style={{fontWeight: "normal", fontSize: "16px"}}></small></h1>

				<div className='introduction-quiz-form multi-check-text'>
					{question_9.options.map((item, i) => OptionHtml(9, i, {
						...item,
						id: 9,
						question: question_9.question
					}))}
				</div>
			</div>


			<div className='question'>
				<h1 className='form-step-title'>10-{question_10.question}
					<small style={{fontWeight: 'normal', fontSize: '16px'}}></small>
				</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_10.options.map((item, i) => OptionHtml(10, i, {
						...item,
						id: 10,
						question: question_10.question
					}))}
				</div>
			</div>

			<div className='question'><h1 className='form-step-title'>11-{question_11.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_11.options.map((item, i) => OptionHtml(11, i, {
						...item,
						id: 11,
						question: question_11.question
					}))}
				</div>
			</div>

			<div className='question'><h1 className='form-step-title'>12-{question_12.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_12.options.map((item, i) => OptionHtml(12, i, {
						...item,
						id: 12,
						question: question_12.question
					}))}
				</div>
			</div>

			<div className='question'>
				<h1 className='form-step-title'>13-{question_13.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{question_13.options.map((item, i) => OptionHtml(13, i, {
						...item,
						id: 13,
						question: question_13.question
					}))}
					<input type="text" name='details' value={inputs.details || ''} onChange={handleChange}
					       placeholder='If yes, please provide details'
					       required={inputs['question_13__0'] ? true : false}
					       readOnly={inputs['question_13__0'] ? false : 'readonly'}
					       onInvalid={invalidInput} onInput={validInput}/>
				</div>
			</div>

			<div className='question'>
				<h1 className='form-step-title'>14-{question_14.question}
					<small style={{fontWeight: "normal", fontSize: "16px"}}> (Optional)</small>
				</h1>
				<div className='introduction-quiz-form'>
					<textarea name='answer_14' value={inputs.answer_14 || ''} onInvalid={invalidInput} onInput={validInput}
					          onChange={handleChange} placeholder='Please write here ' ></textarea>
				</div>
			</div>

			<div className='question'>
				<h1 className='form-step-title'>15-{question_15.question}
					<small style={{fontWeight: "normal", fontSize: "16px"}}></small>
				</h1>
				<div className='introduction-quiz-form'>
					<textarea name='answer_15' value={inputs.answer_15 || ''} onInvalid={invalidInput} onInput={validInput}
					          onChange={handleChange} placeholder='Please write Address ' required></textarea>
				</div>
			</div>

			<div className='question'>
				<h1 className='form-step-title'>16-{question_16.question}
					<small style={{fontWeight: 'normal', fontSize: '16px'}}> (Optional)</small>
				</h1>
				<div className='introduction-quiz-form'>
					<input type="file" ref={answer16File} multiple={true} accept="image/*,.pdf"
					       onChange={inputFileHandler}/>
				</div>
			</div>

			<div className='question'><h1 className='form-step-title'>17-{question_17.question}</h1>

				<div className='introduction-quiz-form multi-check-text'>
					<input type="file" ref={answer17File} multiple={true} accept="image/*,.pdf"
					       onChange={inputFileHandler} required
					       onInvalid={invalidInput} onInput={validInput}/>
					<label className='quiz-label'>
						<div className={(inputs.dimensions || '') ? 'container pink' : 'container white'}>
							<input type="checkbox" className="checkbox" name='dimensions' value="1"
							       checked={(inputs.dimensions || '') ? 'checked' : false}
							       onChange={handleChange}/>
							<div className='option-desc'> Do you have the dimensions?</div>
						</div>
					</label>
					<div className="dimensions-section">
						<input type='number' placeholder="L" className='dimensions' name='length'
						       value={inputs.length || ''} required={(inputs.dimensions || '') ? true : false}
						       readOnly={(inputs.dimensions || '') ? false : 'readonly'} min={0}
						       onChange={handleChange}/><small> cm</small>
						<CloseIcon style={{margin: "10px 20px -5px 20px", fontSize: "18px"}}/>
						<input type='number' placeholder="W" className='dimensions' name='width'
						       value={inputs.width || ''} required={(inputs.dimensions || '') ? true : false}
						       readOnly={(inputs.dimensions || '') ? false : 'readonly'} min={0}
						       onChange={handleChange}/>
						<small>cm</small>
					</div>
				</div>
			</div>

			<div className='question'><h1 className='form-step-title'>18-{question_18.question}</h1>
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
				<div className="container terms-container">
					<input type="checkbox" className="checkbox" name='terms' value="1"
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

export default FormQuiz2