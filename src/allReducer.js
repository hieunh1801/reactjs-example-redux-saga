import {combineReducers } from 'redux';

import todoListReducer from './container/TodoList/reducer';
import counterReducer from './counterSaga/reducer';
import weatherReducer from "./weather/reducer";

const allReducer = combineReducers({
  todoListReducer,
  counterReducer,
  weatherReducer
});

export default allReducer;