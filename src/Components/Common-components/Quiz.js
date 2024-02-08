import React, {memo, useState} from 'react'
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
	const quizLabel = {
		position: "unset",
		backgroundColor: "unset",
		padding: "unset",
		color: "unset",
		fontSize: "unset",
		fontWeight: "unset",
	};

	const [currentPage, setCurrentPage] = useState(1);

	const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		if (event.target.type == 'checkbox') {
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
			inputs[name] = value;
			inputs[name + '_checked'] = !event.target.checked;
			setInputs(values => ({...values, [name]: value, [name + '_checked']: !event.target.checked}));
		} else {
			setInputs(values => ({...values, [name]: value}));
		}
		console.log(inputs);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
		next();
		if(currentPage===10){
			handleClose()
		}
	};

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

	const pageFields_3 = {
		question: 'How do you want your home to feel? ',
		options: [{
			image: Unique,
			title: "Unique",
			desc: `I like having things, and I want my guests to know that my things have history and a story`,
		}, {
			image: LaidBack,
			title: "Laid back",
			desc: `Airy & open; my home is my haven, I need it to be comfortable & relaxed before anything else`,
		}, {
			image: Regal,
			title: "Regal",
			desc: `I love old world charm, and I want my room to be proud, comfortable, & impressive`,
		}, {
			image: Cool,
			title: "Cool",
			desc: `A good mix of modern & retro pieces to give my home an edge`,
		}, {
			image: Stream,
			title: "Streamlined",
			desc: `Everything is exactly where it needs to be, and does exactly what it's supposed to do`,
		},]
	};

	const pageFields_4 = {
		question: 'What is your relationship to stuff? ',
		options: [{
			desc: `I love stuff! I love collecting stuff that I'm drawn to, & I love being surrounded by it.`,
		}, {
			desc: `I like *some* stuff. I'm choosy about what I allow into my home, and I curate stuff that I think is beautiful.`,
		}, {
			desc: `I try to minimise my stuff. I want my home to feel uncluttered & relaxing.`,
		},]
	};

	const pageFields_5 = {
		question: 'How much colour do you like in your space?',
		options: [{
			image: Qustion2Image1,
			desc: "None, all white only",
		}, {
			image: Qustion2Image2,
			desc: "I prefer mostly neutral tones",
		}, {
			image: Qustion2Image3,
			desc: "I'm into some pops of colour",
		}, {
			image: Qustion2Image4,
			desc: "Tons, I cant get enough",
		},]
	};

	const pageFields_6 = {
		question: 'Which bedroom matches your energy? (ignoring specific furniture)',
		options: [{
			image: Qustion3Image1,
			desc: "Scandinavian",
		}, {
			image: Qustion3Image2,
			desc: "Urban industrial",
		}, {
			image: Qustion3Image3,
			desc: "Bohemian",
		}, {
			image: Qustion3Image4,
			desc: "Opulent",
		},]
	};
	const pageFields_7 = {
		question: 'Which living room?',
		options: [{
			image: Qustion4Image1,
			desc: "modern rustic",
		}, {
			image: Qustion4Image2,
			desc: "art deco",
		}, {
			image: Qustion4Image3,
			desc: "brutalist industrial minimalism",
		}, {
			image: Qustion4Image4,
			desc: "eclectic industrial restorational",
		},]
	};
	const pageFields_8 = {
		question: 'Which office?',
		options: [{
			image: Qustion5Image1,
			desc: "executive sophistication",
		}, {
			image: Qustion5Image2,
			desc: "bohemian",
		}, {
			image: Qustion5Image3,
			desc: "minimalist",
		}, {
			image: Qustion5Image4,
			desc: "vintage",
		},]
	};
	const pageFields_9 = {
		question: 'Which colour palette do you most like to decorate your home with?',
		options: [{
			image: Qustion6Image1,
			title: "Unique",
			desc: "I like having things, and I want my guests to know that my things have history and a story",
		}, {
			image: Qustion6Image2,
			title: "Laid back",
			desc: "Airy & open; my home is my haven, I need it to be comfortable & relaxed before anything else",
		}, {
			image: Qustion6Image3,
			title: "Regal",
			desc: "I love old world charm, and I want my room to be proud, comfortable, & impressive",
		}, {
			image: Qustion6Image4,
			title: "Cool",
			desc: "A good mix of modern & retro pieces to give my home an edge",
		}, {
			image: Qustion6Image5,
			title: "Streamlined",
			desc: "Everything is exactly where it needs to be, and does exactly what it's supposed to do",
		}, {
			image: Qustion6Image6,
			title: "Streamlined",
			desc: "Everything is exactly where it needs to be, and does exactly what it's supposed to do",
		},]
	};

	const SectionHtml = ({section})=>{
		return <>
			<h1 className='step-title step-title-light'>{section.question} </h1>
			<div className='introduction-quiz-form images-form'>
				{section.options.map((field, index) => OptionHtml(field,index,section.question))}
			</div>
		</>
	}

	const OptionHtml=(item,index,question,style=null)=>{
		let option_group = 'question_'+currentPage;
		let field_name = option_group+'_' + index;
		let is_checked = field_name + '_checked';
		return <div
			className={(inputs[is_checked] || '') ? "container pink" : 'container white'} style={style}>
			<label style={quizLabel}>
				{item.image && <img src={item.image}/>}
				<input type="checkbox" className={'checkbox ' + option_group} name={field_name}
				       value={JSON.stringify({...item, 'ques': question})}
				       checked={(inputs[is_checked] || '') ? "checked" : false}
				       onChange={handleChange} required />
				<div className='option-desc'>
					{item.title && <><b>{item.title}</b>-</> } {item.desc}
				</div>
			</label>
		</div>
	}

	return (<>

		<form className="quiz-form" onSubmit={handleSubmit}>
			<Stepper
				steps={sections}
				activeStep={currentPage}
				activeColor="#e1e1e1"
				defaultBarColor="#df1995"
				completeColor="#df1995"
				completeBarColor="#df1995"
			/>

			{currentPage === 1 && (<>
				<h1 className='step-title'>First things first- let’s get to know you!</h1>
				<div className='introduction-quiz-form'>
					<input type="text" name='name' placeholder='Name' value={inputs.name || ''} onChange={handleChange}
					       required></input>
					<input type="email" name='email' placeholder='E-mail' value={inputs.email || ''}
					       onChange={handleChange} required></input>
					<input type="text" name='phone' placeholder='Phone' value={inputs.phone || ''}
					       onChange={handleChange} required></input>
				</div>
			</>)}

			{currentPage === 2 && (<>
				<h1 className='step-title'>Now, let's discover a little bit about what home means to you </h1>
				<form className='introduction-quiz-form'></form>
			</>)}

			{currentPage === 3 && (<>
				<h1 className='step-title step-title-light'>{pageFields_3.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{pageFields_3.options.map((field, index) => OptionHtml(field,index,pageFields_3.question))}
				</div>
			</>)}

			{currentPage === 4 && (<>
				<h1 className='step-title step-title-light'>{pageFields_4.question}</h1>
				<div className='introduction-quiz-form multi-check-text'>
					{pageFields_4.options.map((field, index) => OptionHtml(field,index,pageFields_4.question))}
				</div>
			</>)}

			{currentPage === 5 && (<>
				<h1 className='step-title step-title-light'>{pageFields_5.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{pageFields_5.options.map((field, index) => OptionHtml(field,index,pageFields_5.question,{flex: "1", minWidth: "40%"}))}
				</div>
			</>)}

			{currentPage === 6 && (<>
				<h1 className='step-title step-title-light'>{pageFields_6.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{pageFields_6.options.map((field, index) => OptionHtml(field,index,pageFields_6.question,{flex: "1", minWidth: "40%"}))}
				</div>
			</>)}

			{currentPage === 7 && (<>
				<h1 className='step-title step-title-light'>{pageFields_7.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{pageFields_7.options.map((field, index) => OptionHtml(field,index,pageFields_7.question,{flex: "1", minWidth: "40%"}))}

				</div>
			</>)}

			{currentPage === 8 && (<>
				<h1 className='step-title step-title-light'>{pageFields_8.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{pageFields_8.options.map((field, index) => OptionHtml(field,index,pageFields_8.question,{flex: "1", minWidth: "40%"}))}
				</div>
			</>)}

			{currentPage === 9 && (<>
				<h1 className='step-title step-title-light'>{pageFields_9.question}</h1>
				<div className='introduction-quiz-form images-form'>
					{pageFields_9.options.map((field, index) => OptionHtml(field,index,pageFields_9.question,{flex: "1", minWidth: "40%"}))}
				</div>
			</>)}

			{currentPage < 10 && (
				<div style={{display: 'flex', justifyContent: currentPage > 1 ? 'space-between' : 'end'}}>
					{currentPage > 1 && <button className='back-button' type='button' onClick={prev}>Back</button>}
					<button className='next-button' type='submit' >Next</button>
				</div>)}

			{currentPage === 10 && (<>
				<h1 className='step-title step-title-light'>Awesome! Let’s jump into the application form
					& get you one page closer to your dream home!</h1>
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<button className='back-button' onClick={prev}>Back</button>
					<button type='submit' className='continue-button' >
						<span>Continue</span> <KeyboardDoubleArrowRightIcon/></button>
				</div>
			</>)}


		</form>

	</>)
}

export default Quiz