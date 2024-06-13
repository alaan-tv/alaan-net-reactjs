import React from "react";
import ReactDOM from 'react-dom';

import Modal from 'react-modal';


export const Feature = ({item, key}) => {
	
	return (
		<div key={key} className='feature'>
			{item.icon && <img src={item.icon} alt="Feature Icon" className='feature-icon'/>}
			{item.title && <p className='feature-heading'>{item.title}</p>}
			{item.desc &&
				<p className='feature-desc third-text'>
					{item.subtitle && <b>{item.subtitle}</b>}
					{item.desc}</p>
					
			}
		</div>
	);
}

export const Testimonial = ({item, key}) => {
	const customStyles = {
		content: {
		  top: '50%',
		  left: '50%',
		  right: 'auto',
		  bottom: 'auto',
		  marginRight: '-50%',
		  transform: 'translate(-50%, -50%)',
		},
	  };
	let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
	return (
		<>
			<div key={key} className='testimonail'>
				<p className='testi-desc'>{item.desc} <p> <button className="modal-testi" onClick={openModal}>مشاهدة رأي  {item.name} بالورشة </button>
				</p></p>
				<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <button onClick={closeModal}>close</button>
		<video style={{background: '#000'}} src={item.url} muted loop controls/>

		      </Modal>
				<div className='divider2'></div>
				<div className='testi-info'>
					<img className='testi-image' src={item.image} alt="customer"/>
					<div className='testi-name'>
						<p className='name'><b>{item.name}</b></p>
						{item.title && <p>{item.title}</p>}
					</div>
				</div>
				
			</div>
		</>
	);
}

export const Trainer = ({item,key}) => {
	return (
		<div key={key} className='trainers-container'>
			<div className='trainer-image'>
				<img src={item.image} alt='trainer'/>
				<h4>{item.name}</h4>
				{item.social && <div className='social-icon'>
					{item.social.map((s,i) => <a key={i}
					href={s.link}><span>{s.icon}</span></a>)}</div>}
			</div>
			<div className='trainer-desc'>
				<p>{item.desc}</p>
			</div>
		</div>
	);
}

