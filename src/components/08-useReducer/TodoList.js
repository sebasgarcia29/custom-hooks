import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((a, b) => (
        <TodoListItem
          todo={a}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          index={b}
          key={a.id}
        />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
