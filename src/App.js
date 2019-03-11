import React, { Component } from 'react';
import './App.css';
// import TodoList from "./container/TodoList";
import "antd/dist/antd.css";
import {Provider} from 'react-redux';
import store from './store';
import CounterContainer from './counterSaga/CounterContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="appContainer">
          <CounterContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
