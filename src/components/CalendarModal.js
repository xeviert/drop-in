import React from 'react';
import '../styling/CalendarModal.css';

export default function CalendarModal(props) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Calendar</h4>
        </div>
        <div className='modal-body'>This is modal content</div>
        <div className='modal-footer'>
          <button className='button'>Close</button>
        </div>
      </div>
    </div>
  );
}
