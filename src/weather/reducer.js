import {GET_SUCCESS,GET_FAIL} from './actionType';
const weatherReducer = (weatherInformation = [], action) => {
  switch (action.type) {
    case GET_SUCCESS:
      console.log(action.payload.information);
      return action.payload.information;
    case GET_FAIL:
      return [];
    default:
      return weatherInformation;
  }
};

export default weatherReducer;