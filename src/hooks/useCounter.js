import { useState } from 'react';

export const useCounter = (value = 1) => {

  const [counter, setcounter] = useState(value);
  const increment = () => {
    setcounter(counter + 1);
  }
  const decrement = () => {
    setcounter(counter - 1);
  }
  const reset = () => {
    setcounter(value);
  }
  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
