import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, handleToggle, handleDelete, index }) => {
  return (
    <li
      className='list-group-item'
      key={todo.id}
    >
      <p
        className={todo.done ? 'complete' : ''}
        onClick={() => {
          handleToggle(todo.id)
        }}>
        {index + 1}. {todo.descripcion}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => { handleDelete(todo.id) }}
      >
        Borrar
      </button>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
