import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../05-UseLayoutEffect/layout.css';


export const CallBackHooks = () => {
  const [counter, setcounter] = useState(10);


  const increment = useCallback((num) => {
    setcounter(c => c + num);
  }, [setcounter]);

  useEffect(() => {
  }, [increment])

  return (
    <div>
      <h1>useCallBackHooks :{counter} </h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  )
}
