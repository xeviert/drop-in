import React from 'react';

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Calendar</h4>
        </div>
        <div className="modal-body">This is modal content</div>
        <div className="modal-footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;