import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};
let nextId = 0;

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: {
      reducer(state, action) {
        const { id, text } = action.payload;

        state.todos.push({ id, text, completed: false });
      },
      prepare(text) {
        return { payload: { text, id: nextId++ } };
      }
    },
    toggle(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    changeFilter(state, action) {
      state.visibilityFilter = action.payload.filter;
    }
  }
});


export const { add, toggle, changeFilter } = todos.actions;
export const store = configureStore({
  reducer: todos.reducer
});


export const visibilityFilterMap = ({
  SHOW_COMPLETED: 'Show completed',
  SHOW_ACTIVE: 'Show active',
  SHOW_ALL: 'Show all',
});
