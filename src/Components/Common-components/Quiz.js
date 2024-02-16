import React, {useState} from 'react'
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
import {ajax_url, formData} from "../../custom-functions";

const Quiz = ({handleClose}) => {

	/*
	*
	* Object Contents
	*
	*/
	const page_1 = {
		question: `First things first- let’s get to know you!`
	}
	const page_2 = {
		question: `Now, let's discover a little bit about what home means to you`
	}

	const page_3 = {
		question: 'How do you want your home to feel? ', options: [{
			image: Unique,
			title: "Unique",
			desc: `I like having things, and I want my guests to know that my things have history and a story`
		}, {
			image: LaidBack,
			title: "Laid back",
			desc: `Airy & open; my home is my haven, I need it to be comfortable & relaxed before anything else`
		}, {
			image: Regal,
			title: "Regal",
			desc: `I love old world charm, and I want my room to be proud, comfortable, & impressive`,
		}, {
			image: Cool, title: "Cool", desc: `A good mix of modern & retro pieces to give my home an edge`
		}, {
			image: Stream,
			title: "Streamlined",
			desc: `Everything is exactly where it needs to be, and does exactly what it's supposed to do`
		},]
	};

	const page_4 = {
		question: 'What is your relationship to stuff? ', options: [{
			desc: `I love stuff! I love collecting stuff that I'm drawn to, & I love being surrounded by it.`
		}, {
			desc: `I like *some* stuff. I'm choosy about what I allow into my home, and I curate stuff that I think is beautiful.`
		}, {
			desc: `I try to minimise my stuff. I want my home to feel uncluttered & relaxing.`
		},]
	};

	const page_5 = {
		question: 'How much colour do you like in your space?', options: [{
			desc: "None, all white only", image: Qustion2Image1,
		}, {
			desc: "I prefer mostly neutral tones", image: Qustion2Image2,
		}, {
			desc: "I'm into some pops of colour", image: Qustion2Image3,
		}, {
			desc: "Tons, I cant get enough", image: Qustion2Image4,
		},]
	};

	const page_6 = {
		question: 'Which bedroom matches your energy? (ignoring specific furniture)', options: [{
			name: "Bohemian", image: Qustion3Image1,
		}, {
			name: "Industrial", image: Qustion3Image2,
		}, {
			name: "Opulent", image: Qustion3Image3,
		}, {
			name: "Scandinavian", image: Qustion3Image4,
		},]
	};
	const page_7 = {
		question: 'Which living room?', options: [{
			name: "Art Deco", image: Qustion4Image1,
		}, {
			name: "Brutalist Industrial Minimalism", image: Qustion4Image2,
		}, {
			name: "Eclectic Industrial Restorational", image: Qustion4Image3,
		}, {
			name: "Modern Rustic", image: Qustion4Image4,
		},]
	};
	const page_8 = {
		question: 'Which office?', options: [{
			name: "Bohemian", image: Qustion5Image1,
		}, {
			name: "Executive Sophistication", image: Qustion5Image2,
		}, {
			name: "Minimalist", image: Qustion5Image3,
		}, {
			name: "Vintage", image: Qustion5Image4,
		},]
	};
	const page_9 = {
		question: 'Which colour palette do you most like to decorate your home with?', options: [{
			name: "Pastels", image: Qustion6Image1,
		}, {
			name: "Historical", image: Qustion6Image2
		}, {
			name: "Earthy", image: Qustion6Image3
		}, {
			name: "Moody", image: Qustion6Image4,
		}, {
			name: "Black, White, Green", image: Qustion6Image5,
		}, {
			name: "Primary", image: Qustion6Image6,
		},]
	};

	const page_10 = {
		question: `Awesome! Let’s jump into the application form & get you one page closer to your dream home!`,
	}

	const [currentPage, setCurrentPage] = useState(1);
	const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [inputs, setInputs] = useState({});

	/**
	 * This will be call on each input type changed
	 * @param event
	 */
	const handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		if (event.target.type == 'checkbox') {
			let checkInput = document.querySelectorAll('.' + event.target.classList[1]);
			checkInput.forEach((el) => setInputs(values => ({...values, [el.name]: false})));
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
		console.log(inputs);
		localStorage.setItem('LBD_email', inputs.email);
		if (currentPage === 10) {
			//copy object in new variable
			let data = {...inputs}
			// remove empty element
			for (const key in data) {
				if (data[key] == false) {
					delete data[key];
				}
			}
			// rename keys & remove empty element
			for (const key in data) {
				data[key.substring(0, 10).replace('question', 'page')] = data[key];
				if(key.length>8){
					delete data[key];
				}

			}
			// generate formData object
			const form_data = formData({
				...data,
				['page_1']: JSON.stringify({id: 1, question: page_1.question}),
				['page_2']: JSON.stringify({id: 2, question: page_2.question}),
				['page_10']: JSON.stringify({id: 10, question: page_10.question}),
				lp_type: 'LBD',
			});
			// Send data to server
			fetch(ajax_url("wp-api/v2/alaan-net/store-form-data.php"), {method: 'Post', body: form_data})
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
		let option_group = 'question_' + currentPage;
		let field_name = option_group + '_' + id;
		let is_required = Object.keys(inputs).toString().indexOf(option_group) > 1 ? '' : 'required';
		return (<label key={id} className='quiz-label'
		               style={currentPage > 4 && currentPage < 9 ? {flex: 1, minWidth: "40%"} : {}}>
			<div className={(inputs[field_name] || '') ? "container pink" : 'container white'}
			     style={currentPage > 4 && currentPage < 9 ? {width: "100%"} : {}}>
				{item.image && <img src={item.image}/>}
				<input type="checkbox" className={'checkbox ' + option_group} name={field_name}
				       value={JSON.stringify(item)}
				       checked={(inputs[field_name] || '') ? "checked" : false}
				       onChange={handleChange} required={is_required}
				/>
				<div className='option-desc'>
					{item.title && <><b>{item.title}</b>-</>} {item.desc && item.desc}
				</div>
			</div>
		</label>);
	}


	return (<>

		<form method={'post'} className="quiz-steps quiz-form" onSubmit={handleSubmit}>
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
					       onChange={handleChange} required maxLength='50'></input>
					<input type="email" name='email' placeholder='E-mail' value={inputs.email || ''}
					       onChange={handleChange} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
					       maxLength='50'></input>
					<input type="text" name='phone' placeholder='Phone' value={inputs.phone || ''}
					       onChange={handleChange} required pattern="[+]{0,1}[0-9]{10,15}" maxLength='15'></input>
				</div>
			</>)}

			{currentPage === 2 && <h1 className='step-title'>{page_2.question}</h1>}

			{currentPage === 3 && (<>
				<h1 className='step-title step-title-light'>{page_3.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{page_3.options.map((item, i) => OptionHtml(i, {...item, id: 3, question: page_3.question}))}
				</div>
			</>)}

			{currentPage === 4 && (<>
				<h1 className='step-title step-title-light'>{page_4.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{page_4.options.map((item, i) => OptionHtml(i, {...item, id: 4, question: page_4.question}))}
				</div>
			</>)}

			{currentPage === 5 && (<>
				<h1 className='step-title step-title-light'>{page_5.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{page_5.options.map((item, i) => OptionHtml(i, {...item, id: 5, question: page_5.question}))}
				</div>
			</>)}

			{currentPage === 6 && (<>
				<h1 className='step-title step-title-light'>{page_6.question}</h1>
				<div className='introduction-quiz-form images-form'>
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
				<div className='introduction-quiz-form images-form'>
					{page_8.options.map((item, i) => OptionHtml(i, {...item, id: 8, question: page_8.question}))}
				</div>
			</>)}

			{currentPage === 9 && (<>
				<h1 className='step-title step-title-light'>{page_9.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{page_9.options.map((item, i) => OptionHtml(i, {...item, id: 9, question: page_9.question}))}
				</div>
			</>)}

			{currentPage === 10 && <h1 className='step-title step-title-light'>{page_10.question}</h1>}

			<div style={{display: 'flex', justifyContent: currentPage > 1 ? 'space-between' : 'end'}}>
				{currentPage > 1 && <button className='back-button' type='button'
				                            onClick={() => setCurrentPage(p => --p)}>Back</button>}
				{currentPage < 10 && <button className='next-button' type='submit'>Next</button>}
				{currentPage === 10 && <button type='submit' className='continue-button'>
					<span>Continue</span> <KeyboardDoubleArrowRightIcon/></button>}
			</div>

		</form>

	</>)
}

export default Quiz