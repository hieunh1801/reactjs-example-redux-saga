import React, { Component } from 'react';
import './App.css';
import TodoList from "./container/TodoList";
import "antd/dist/antd.css";
import {Provider} from 'react-redux';
import store from './store';
import CounterContainer from './counterSaga/CounterContainer';
import WeatherApp from './weather';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="appContainer">
          {/* <TodoList /> */}
          {/* <CounterContainer/> */}
          {/*<WeatherComponent />*/}
          <WeatherApp />
        </div>
      </Provider>
    );
  }
}

export default App;
