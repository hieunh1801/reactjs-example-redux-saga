import {GET_WEATHER_BY_NAME, GET_FAIL, GET_SUCCESS} from './actionType';
// Hành động này được dispach bởi người dùng
export const getWeatherByName = (cityName) => {
  return {
    type: GET_WEATHER_BY_NAME,
    payload: {
      cityName: cityName
    }
  }
};
// Hành động này được dispach bởi redux saga khi mà nó nhận được response từ phía server
export const getSuccess = (information) => {
  return {
    type: GET_SUCCESS,
    payload: {
      information,
    }
  }
};
// Hành động này được dispatch bởi redux saga khi mà nó nhận được response từ phía server
export const getFail = (error) => {
  return {
    type: GET_SUCCESS,
    payload: {
      error
    }
  }
};



