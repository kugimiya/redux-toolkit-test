import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';

const mapDispatchToProps = dispatch => ({
  onAdd(text) {
    dispatch(add(text));
  }
});

export const AddTodo = connect(null, mapDispatchToProps)(AddTodoComponent);

function AddTodoComponent({ onAdd }) {
  const [ todoText, changeText ] = useState('');

  return (
    <div>
      <input
        type='text'
        placeholder='New todo text'
        value={ todoText } 
        onChange={ ev => changeText(ev.target.value) }
      />

      <button
        type='button'
        onClick={ () => {
          if (todoText.length === 0) {
            alert('Fill todo text field');
            return;
          }

          onAdd(todoText);
          changeText('');
        } }
      >Add</button>
    </div>
  );
}
