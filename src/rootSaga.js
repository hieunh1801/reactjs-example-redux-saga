import { helloSaga, watchIncrement } from './counterSaga/saga';
// import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';

// all - giúp chạy một phát nhiều saga
export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrement(),
  ])
};