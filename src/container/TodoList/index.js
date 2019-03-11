import React from 'react';
import { connect } from 'react-redux';
import { addItemToList, removeItemFromList} from './actions';
import FormInput from "../../component/TodoList/FormInput";
import ListItem from "../../component/TodoList/ListItem";

class TodoList extends React.PureComponent<> {
  componentDidMount() {
    console.log('store', this.props.listItem);
  }

  render() {
    return (
      <div className="todoListContainer">
        <h1>TodoList</h1>
        <FormInput/>
        <ListItem/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    listItem: store
  };
};
// const mapDispachToProps = dispatch => {
//   return;
// };
export default connect(mapStateToProps)(TodoList);
