import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todos.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            Delete
          </button>
        </li>
      ))}
    </>
  )
}

export default Todos