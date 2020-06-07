import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { VisibleTodoList } from './components/VisibleTodoList';
import { AddTodo } from './components/AddTodo';
import { Filter } from './components/Filter';

export class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
        <AddTodo />
        <VisibleTodoList />
        <Filter />
      </Provider>
    )
  }
}
