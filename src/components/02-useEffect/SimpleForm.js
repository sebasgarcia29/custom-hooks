import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

  const [stateForm, setstateForm] = useState(
    { name: '', email: '' }
  )

  const { name, email } = stateForm;

  useEffect(() => {
    console.log('useEffect');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setstateForm({ ...stateForm, [name]: value, })
  }

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <div className='form-group' >
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Ingresa tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group' >
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='Ingresa tu email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {(name === '123' ) && <Message />}
    </>
  )
}
