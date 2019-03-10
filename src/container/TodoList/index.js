import React from 'react';
import FormInput from "../../component/TodoList/FormInput";
import ListItem from "../../component/TodoList/ListItem";
class TodoList extends React.PureComponent<> {
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <FormInput/>
        <ListItem/>
      </div>
    )
  }
}

export default TodoList;