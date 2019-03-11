/*eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd';
import { noop } from 'lodash';
import './styles.css';
const CounterComponent = (props) => {
    return (
        <div className='counterContainer'>
        <Button onClick={() => props.onIncrement(1)}>
          Increment <Icon type="caret-up" theme="filled" />
        </Button>
        <Button onClick={() => props.onDecrement(1)}>
          Decrement <Icon type="caret-down" theme="filled" />
          
        </Button>
        <Button onClick={() => props.onIncrementAsyn(1)}>
          Increment after 1 second <Icon type="caret-up" theme="filled" />
        </Button>
        <div>
          Clicked: {props.time} times
        </div>
      </div>

    )
}
     
CounterComponent.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

CounterComponent.defaultProps = {
  value: 0,
  onIncrement: noop,
  onDecrement: noop,
  onIncrementAsync: noop,
}

export default CounterComponent;