// import React, { useState } from 'react'
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

  const { counter: value, increment, decrement, reset } = useCounter(20);

  return (
    <div>
      <h1>CounterWithCustomHook {value} </h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={() => {
          increment(1);
        }}
      >
        +1
      </button>
      <button
        className='btn btn-warning'
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <button
        className='btn btn-danger'
        onClick={() => {
          decrement(1);
        }}
      >
        -1
      </button>
    </div>
  )
}
