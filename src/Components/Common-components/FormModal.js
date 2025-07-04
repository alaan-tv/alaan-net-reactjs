import React from 'react'

const FormModal = ({ handleClose1, showForm, children }) => {
    const modelClass = showForm ? 'form-modal open' : 'form-modal';
  return (
    <div className={modelClass}  id="form-one">
            <div className="form-modal-bg form-modal-exit"></div>
            <div className="form-modal-container">
                {children}
                <button className="form-modal-close form-modal-exit" onClick={handleClose1}>&times;</button>
            </div>
        </div>
  )
}

export default FormModal