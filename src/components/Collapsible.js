import React, { useState } from 'react'

export default function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className='collapsible'>
        <button
            color='primary'
            style={{ marginBottom: '1rem' }}
            onClick={() => setIsOpen(!isOpen)}    
        >
          Toggle
        </button>
        {isOpen && <div className="content">{props.children}</div>}
      </div>
    );
}
