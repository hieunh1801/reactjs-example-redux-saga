import {connect } from 'react-redux';
import CounterComponent from './CounterComponent';
import {decrement,increment, incrementAsyn} from './actions';
const mapStateToPorps = store => {
  return {
    time: store.counterReducer.time ? store.counterReducer.time : -1
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onDecrement: (step) => {
      dispatch(decrement(step))
    },
    onIncrement: (step) => {
      dispatch(increment(step))
    },
    onIncrementAsyn: (step) => {
      dispatch(incrementAsyn(step))
    }
  };
}
const CounterContainer = connect(mapStateToPorps, mapDispatchToProps)(CounterComponent);
export default CounterContainer