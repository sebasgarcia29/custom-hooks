import React from 'react';
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChanges, resetValues] = useForm({ description: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      descripcion: description,
      done: false,
    };
    handleAddTodo(newTodo);
    resetValues();
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          placeholder='Aprender...'
          autoComplete='off'
          className='form-control'
          onChange={handleInputChanges}
          value={description}
        />
        <button
          type='submit'
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  )
}
