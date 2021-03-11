import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../05-UseLayoutEffect/layout.css';


export const Memorize = () => {

  const { counter, increment } = useCounter(1);
  const [show, setshow] = useState(false)

  return (
    <div>
      <h1>Counter <Small value={counter} /></h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Siguiente quote
         </button>
      <button
        className='btn btn-outline-primary ml-3'
        onClick={() => setshow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
