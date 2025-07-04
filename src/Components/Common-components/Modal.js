
import React from 'react'


export const Modal = ({ handleClose, show, children, readonly=false }) => {
    const modelClass = show ? 'modal open' : 'modal';
  return (
      <div className={modelClass}  id="modal-one">
          <div className="modal-bg modal-exit"></div>
          <div className="modal-container">
              {children}
              {!readonly && <button className="modal-close modal-exit" onClick={handleClose}>&times;</button>}
          </div>
      </div>
  );
};
export default  Modal;