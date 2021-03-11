import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

  const [formValues, handleChange] = useForm(
    { name: '', email: '', password: '' }
  )

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('Email cambio')
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formValues', formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className='form-group' >
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Ingresa tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <div className='form-group' >
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='******'
          autoComplete='off'
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Guardar
        </button>
    </form>
  )
}
