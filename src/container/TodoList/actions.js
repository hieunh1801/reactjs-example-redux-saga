import {REMOVE_ITEM_FROM_LIST, ADD_ITEM_TO_LIST, UPDATE_ITEM_FROM_LIST} from './actionTypes';
const addItemToList = (title, content) => {
  return {
    type: ADD_ITEM_TO_LIST,
    payload: {
      title,
      content,
    }
  }
};

const removeItemFromList = (id) => {
  return {
    type: REMOVE_ITEM_FROM_LIST,
    payload: {
      id,
    }
  }
};

const updateItemFromList = (id, title, content) => {
  return {
    type: UPDATE_ITEM_FROM_LIST,
    payload: {
      id,
      title,
      content
    }
  }
};

export {
  addItemToList, removeItemFromList, updateItemFromList
}