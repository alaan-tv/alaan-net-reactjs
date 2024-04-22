import React from 'react'


const QuizModal2 = ({ handleClose, showQuiz, children })  => {
    
    const modelClass = showQuiz ? 'quiz-modal open' : 'quiz-modal';
    return (
        <div className={modelClass}  id="Quiz-one">
            <div className="quiz-modal-bg quiz-modal-exit"></div>
            <div className="quiz-modal-container">
                {children}
                <button className="quiz-modal-close quiz-modal-exit" onClick={handleClose}>&times;</button>
            </div>
        </div>
    );
}

export default QuizModal2