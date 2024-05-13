import React, {useState} from 'react'
import Stepper from 'react-stepper-horizontal';
import Question1Image1 from '../../../src/Assets/quiz/CBD/q1/question1img1.png'
import Question1Image2 from '../../../src/Assets/quiz/CBD/q1/question1img2.png'
import Question1Image3 from '../../../src/Assets/quiz/CBD/q1/question1img3.png'
import Question1Image4 from '../../../src/Assets/quiz/CBD/q1/question1img4.png'
import Qustion2Image1 from '../../../src/Assets/quiz/CBD/q2/Modern and Sleek.png'
import Qustion2Image2 from '../../../src/Assets/quiz/CBD/q2/Unique & bright.png'
import Qustion2Image3 from '../../../src/Assets/quiz/CBD/q2/Sophisticated & impressive.png'
import Qustion2Image4 from '../../../src/Assets/quiz/CBD/q2/Comfortable and Cozy.png'
import Qustion4Image1 from '../../../src/Assets/quiz/CBD/q3/Bright and well-lit.png'
import Qustion4Image2 from '../../../src/Assets/quiz/CBD/q3/Natural sunlight.png'
import Qustion4Image3 from '../../../src/Assets/quiz/CBD/q3/Moody and intimate.png'
import Qustion5Image1 from '../../../src/Assets/quiz/CBD/q4/Bold and minimal.png'
import Qustion5Image2 from '../../../src/Assets/quiz/CBD/q4/Bright and loud.png'
import Qustion5Image3 from '../../../src/Assets/quiz/CBD/q4/Soft Pastels.png'
import Qustion5Image4 from '../../../src/Assets/quiz/CBD/q4/Neutral Tones.png'
import Qustion6Image1 from '../../../src/Assets/quiz/CBD/q5/white marble.png'
import Qustion6Image2 from '../../../src/Assets/quiz/CBD/q5/red oak.jpg'
import Qustion6Image3 from '../../../src/Assets/quiz/CBD/q5/cross-weave light grey fabric.jpg'
import Qustion6Image4 from '../../../src/Assets/quiz/CBD/q5/concrete.png'
import Qustion6Image5 from '../../../src/Assets/quiz/CBD/q5/chrome.jpg'
import Qustion6Image6 from '../../../src/Assets/quiz/CBD/q5/black acrylic.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {ajax_url, formData} from "../../custom-functions";

const Quiz2 = ({handleClose}) => {

	/*
	*
	* Object Contents
	*
	*/
	const page_1 = {
		question: `First things first- let’s get to know you!`
	}
	const page_2 = {
		question: `Content exists to inspire emotion- so let's talk about how you want your channel to feel`
	}

	const page_3 = {
		question: 'What inspires your content the most: ', options: [{
			desc: `Knowledge `
		}, {
			desc: `Personal experience`
		}, {
			desc: `Pop Culture`,
		}, {
			desc: `Technology`
		}, {
			desc: `Beauty`
		},]
	};

	const page_4 = {
		question: '(Ignoring specific furniture) Select a visual theme for your background that *closest* resembles the energy of your channel',
		options: [{
			title: `Eclectic & Colorful`, image: Question1Image1,
		}, {
			title: `Sleek & Minimal `, image: Question1Image2,
		}, {
			title: `Earthy & Natural `, image: Question1Image3,
		}, {
			title: `Productive & Aesthetic`, image: Question1Image4,
		},]
	};

	const page_5 = {
		question: 'Choose a furniture style that complements your brand: ', options: [{
			title: "Modern & Sleek ", image: Qustion2Image1,
		}, {
			title: "Unique & Bright ", image: Qustion2Image2,
		}, {
			title: "Sophisticated & Impressive", image: Qustion2Image3,
		}, {
			title: "Comfortable & Cozy", image: Qustion2Image4,
		},]
	};

	const page_6 = {
		question: 'A content genie lets you pick one thing all of your viewers do after watching your content; which do you pick?',
		options: [{
			title: "Dive deeper into something new to them",
		}, {
			title: "Take action on something they've been procrastinating on",
		}, {
			title: "Explore their creativity and make something",
		}, {
			title: "Forget about their problems for a while and feel happier",
		},]
	};
	const page_7 = {
		question: 'Choose your lighting preference: ', options: [{
			title: "Bright & Well-lit", image: Qustion4Image1,
		}, {
			title: "Natural & sunlight", image: Qustion4Image2,
		}, {
			title: "Moody & Intimate", image: Qustion4Image3,
		},]
	};
	const page_8 = {
		question: 'Which of these colours remind you of your content?', options: [{
			title: "Bold & Minimal", image: Qustion5Image1,
		}, {
			title: "Bright & Loud", image: Qustion5Image2,
		}, {
			title: "Soft Pastels", image: Qustion5Image3,
		}, {
			title: "Neutral Tones", image: Qustion5Image4,
		},]
	};
	const page_9 = {
		question: 'Pick one material accent to use in your background', options: [{
			title: "White marble", image: Qustion6Image1,
		}, {
			title: "Red oak", image: Qustion6Image2
		}, {
			title: "Light grey fabric", image: Qustion6Image3
		}, {
			title: "Concrete", image: Qustion6Image4,
		}, {
			title: "Chrome", image: Qustion6Image5,
		}, {
			title: "Black acrylic", image: Qustion6Image6,
		},]
	};
	const page_10 = {
		question: 'First impressions count- which one do you want people to have of you?', options: [{
			title: "Pure, Optimistic, and Wholesome",
		}, {
			title: "Adventurous, Curious, and Freedom-seeking",
		}, {
			title: "Wise, Knowledgeable, and Reflective",
		}, {
			title: "Courageous, Determined, and Inspiring",
		}, {
			title: "Rebellious, Daring, and Nonconformist",
		}, {
			title: "Mysterious, Visionary, and Transformative",
		}, {
			title: "Relatable, Down-to-earth, and Genuine",
		}, {
			title: "Passionate, Romantic, and Sensitive",
		}, {
			title: "Playful, Humorous, and Spontaneous",
		}, {
			title: "Compassionate, Supportive, and Nurturing",
		},]
	};


	const page_11 = {
		question: `We're getting a great sense for how you want your channel to feel- let’s jump into the application form & get you one page closer to better content:`,
	}

	const [inputs, setInputs] = useState({});
	const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
	const [currentPage, setCurrentPage] = useState(1);

	/**
	 * This will be call on each input type changed
	 * @param event
	 */
	const handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		if (event.target.type === 'checkbox') {
			let checkInput = document.querySelectorAll('.' + event.target.classList[1]);
			let checkedInput = [].filter.call(checkInput, el => el.checked);
			checkInput.forEach((el) => {
				el.required = event.target.checked === false && checkedInput.length < 1 ? true : false;
				setInputs(values => ({...values, [el.name]: false}));
			});
			setInputs(values => ({...values, [name]: JSON.parse(value)}));
		}
		setInputs(values => ({...values, [name]: value}));
	}

	/**
	 * This will call when we submit form
	 * @param e
	 */
	const handleSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem('CBD_name', inputs.name);
		localStorage.setItem('CBD_email', inputs.email);
		localStorage.setItem('CBD_phone', inputs.phone);
		if (currentPage === 11) {
			//copy object in new variable
			let data = {...inputs}

			// rename keys & remove empty element
			for (const key in data) {
				if (data[key] !== false) {
					data[key.split("__")[0]] = data[key];
					if (key.length > 6) {
						delete data[key];
					}
				}else{
					delete data[key];
				}
			}

			// generate formData object
			const form_data = formData({
				...data,
				page_1: JSON.stringify({id: 1, question: page_1.question}),
				page_2: JSON.stringify({id: 2, question: page_2.question}),
				page_11: JSON.stringify({id: 11, question: page_11.question}),
				lp_type: 'CBD',
			});

			// Send data to server
			fetch(ajax_url("wp-api/v2/alaan-net/store-quiz-data.php"), {method: 'Post', body: form_data})
				.then(response => response.json())
				.then(data => handleClose())
				.catch(error => console.error(error));

		} else {
			setCurrentPage(p => ++p);
		}

	};


	/*
	*
	*  Option Component
	*
	*/
	const OptionHtml = (id, item) => {
		let option_group = 'page_' + currentPage;
		let field_name = option_group + '__' + id;
		let is_required = Object.keys(inputs).toString().indexOf(option_group) > 1 ? false : 'required';
		return (<label key={id} className='quiz-label'
		>
			<div className={(inputs[field_name] || '') ? "container pink" : 'container white'}
			     >
				{item.image && <img src={item.image} alt={''}/>}
				<input type="checkbox" className={'checkbox ' + option_group} name={field_name}
				       value={JSON.stringify(item)}
				       checked={(inputs[field_name] || '') ? "checked" : false}
				       onChange={handleChange} required={is_required}
				       onInvalid={invalidInput} onInput={validInput}
				/>
				<div className='option-desc'>
					{item.title && <><b>{item.title}</b></>} {item.desc && item.desc}
				</div>
			</div>
		</label>);
	}


	const invalidInput = (event) => {
		if (event.target.type === 'checkbox') {
			document.querySelectorAll(`.${event.target.classList[1]}`).forEach((el) => {
				el.parentElement.classList.add('border-red');
			});
		} else {
			event.target.classList.add('border-red');
		}
	}

	const validInput = (event) => {
		if (event.target.type === 'checkbox') {
			document.querySelectorAll(`.${event.target.classList[1]}`).forEach((el) => {
				el.parentElement.classList.remove('border-red');
			});
		} else {
			event.target.classList.remove('border-red');
		}
	}

	return (<>

		<form method={'post'} className="quiz-steps quiz-form CBD-quiz" onSubmit={handleSubmit}>
			<Stepper
				steps={sections}
				activeStep={currentPage}
				activeColor="#e1e1e1"
				defaultBarColor="#df1995"
				completeColor="#df1995"
				completeBarColor="#df1995"
			/>

			{currentPage === 1 && (<>
				<h1 className='step-title'>{page_1.question}</h1>
				<div className='introduction-quiz-form'>
					<input type="text" name='name' placeholder='Name' value={inputs.name || ''}
					       onChange={handleChange} required maxLength='50' onInvalid={invalidInput}
					       onInput={validInput}></input>
					<input type="email" name='email' placeholder='E-mail' value={inputs.email || ''}
					       onChange={handleChange} required maxLength='50' onInvalid={invalidInput} onInput={validInput}></input>
					<input type="text" name='phone' placeholder='Phone' value={inputs.phone || ''}
					       onChange={handleChange} required pattern="[+]{0,1}[0-9]{10,15}" maxLength='15'
					       onInvalid={invalidInput} onInput={validInput}></input>
				</div>
			</>)}

			{currentPage === 2 && <h1 className='step-title'>{page_2.question}</h1>}

			{currentPage === 3 && (<>
				<h1 className='step-title step-title-light'>{page_3.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{page_3.options.map((item, i) => OptionHtml(i, {...item, id: 3, question: page_3.question}))}
				</div>
			</>)}

			{currentPage === 4 && (<>
				<h1 className='step-title step-title-light'>{page_4.question}</h1>
				<div className='introduction-quiz-form images-form four-images'>
					{page_4.options.map((item, i) => OptionHtml(i, {...item, id: 4, question: page_4.question}))}
				</div>
			</>)}

			{currentPage === 5 && (<>
				<h1 className='step-title step-title-light'>{page_5.question}</h1>
				<div className='introduction-quiz-form images-form four-images'>
					{page_5.options.map((item, i) => OptionHtml(i, {...item, id: 5, question: page_5.question}))}
				</div>
			</>)}

			{currentPage === 6 && (<>
				<h1 className='step-title step-title-light'>{page_6.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{page_6.options.map((item, i) => OptionHtml(i, {...item, id: 6, question: page_6.question}))}
				</div>
			</>)}

			{currentPage === 7 && (<>
				<h1 className='step-title step-title-light'>{page_7.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{page_7.options.map((item, i) => OptionHtml(i, {...item, id: 7, question: page_7.question}))}
				</div>
			</>)}
			{currentPage === 8 && (<>
				<h1 className='step-title step-title-light'>{page_8.question}</h1>
				<div className='introduction-quiz-form images-form four-images'>
					{page_8.options.map((item, i) => OptionHtml(i, {...item, id: 8, question: page_8.question}))}
				</div>
			</>)}

			{currentPage === 9 && (<>
				<h1 className='step-title step-title-light'>{page_9.question}</h1>
				<div className='introduction-quiz-form images-form three-by-line'>
					{page_9.options.map((item, i) => OptionHtml(i, {...item, id: 9, question: page_9.question}))}
				</div>
			</>)}

			{currentPage === 10 && (<>
				<h1 className='step-title step-title-light'>{page_10.question}</h1>
				<div className='introduction-quiz-form multi-check-text images-form multi-check-text2'>
					{page_10.options.map((item, i) => OptionHtml(i, {...item, id: 10, question: page_10.question}))}
				</div>
			</>)}

			{currentPage === 11 && <h1 className='step-title'>{page_11.question}</h1>}

			<div style={{display: 'flex', justifyContent: currentPage > 1 ? 'space-between' : 'end'}}>
				{currentPage > 1 && <button className='back-button' type='button'
				                            onClick={() => setCurrentPage(p => --p)}>Back</button>}
				{currentPage < 11 && <button className='next-button' type='submit'>Next</button>}
				{currentPage === 11 && <button type='submit' className='continue-button'>
					<span>Continue</span> <KeyboardDoubleArrowRightIcon/></button>}
			</div>

		</form>

	</>)
}

export default Quiz2




