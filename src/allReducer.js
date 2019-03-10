import {combineReducers } from 'redux';

import todoListReducer from './container/TodoList/reducer';

const allReducer = combineReducers({
  todoListReducer
});

export default allReducer;