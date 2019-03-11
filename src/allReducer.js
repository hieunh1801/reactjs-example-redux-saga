import {combineReducers } from 'redux';

import todoListReducer from './container/TodoList/reducer';
import counterReducer from './counterSaga/reducer';

const allReducer = combineReducers({
  todoListReducer,
  counterReducer
});

export default allReducer;