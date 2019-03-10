import { REMOVE_ITEM_FROM_LIST, ADD_ITEM_TO_LIST} from './actionTypes';
const initialState = {
  currentItemIndex: -1,
  todoList: [
    {
      id: 1,
      title: 'title 1',
      content: 'content 1',
    },
    {
      id: 2,
      title: 'title 2',
      content: 'content 2',
    },
    {
      id: 3,
      title: 'title 3',
      content: 'content 3',
    },
  ]
};

let id = 0;

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_LIST:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: id++,
            title: action.payload.title,
            content: action.payload.content,
          }
        ]
      };

    case REMOVE_ITEM_FROM_LIST: {
      return {
        ...state,
        todoList: state.todoList.filter(function (item) {
          return item.id !== action.payload.id;
        })
      }
    }

    default:
      return state;
  }

}

export default todoListReducer;