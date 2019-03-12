import {GET_WEATHER_BY_NAME} from './actionType';
import {getSuccess, getFail} from './action';
import {getWeatherByName} from './api';
import { put, takeLatest} from 'redux-saga/effects';

function* getWeather(action) {
  try {
    const weatherInformation = yield getWeatherByName(action.payload.cityName);
    yield put(getSuccess(weatherInformation))
  } catch (e) {
    yield put(getFail(e));
  }
}
export function* watchGetWeather() {
  yield takeLatest(GET_WEATHER_BY_NAME, getWeather);
}
