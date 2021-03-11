import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input
        className='form-control'
        placeholder='Name'
        ref={inputRef}
      />

      <button
        className='btn btn-outline-primary mt-3'
        onClick={handleClick}
      >
        Focus
        </button>
    </div>
  )
}
