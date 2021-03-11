import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../05-UseLayoutEffect/layout.css';


export const MemoHook = () => {

  const { counter, increment } = useCounter(100);
  const [show, setshow] = useState(false);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h1>Counter <small>{counter} </small></h1>
      <hr />

      <p> {memoProcesoPesado} </p>

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
