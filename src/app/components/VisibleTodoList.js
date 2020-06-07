import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../store';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onToggle(id) {
    dispatch(toggle({ id }));
  }
});

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export function TodoList({ todos, onToggle }) {
  return (
    <ul
      style={ { padding: 0 } }
    >
      {
        todos.map(todo => (
          <Todo
            key={ todo.id }
            onToggle={ () => onToggle(todo.id) }
            { ...todo }
          />
        ))
      }
    </ul>
  )
}

export function Todo({ onToggle, completed, text }) {
  return (
    <li style={ { listStyle: 'none', marginBottom: '8px' } }>
      <button onClick={ onToggle } >✔</button>
      &nbsp;&nbsp;
      <span style={ { textDecoration: completed ? 'line-through' : 'none' } }>{ text }</span>      
    </li>
  );
}
