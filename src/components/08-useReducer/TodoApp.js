import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './style.css';


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const handleDelete = (id) => {
    const addNewTask = {
      type: 'delete',
      id: id,
    }
    dispatch(addNewTask)
  }

  const handleToggle = (toggle) => {
    dispatch({
      type: 'toggle',
      toggle: toggle,
    });
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      task: newTodo,
    });
  }

  return (
    <div>
      <h1>TodoApp  ({todos.length}) </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className='col-5'>
          <TodoAdd
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  )
}
