import {INCREMENT_ASYN} from './constants';
// import {delay} from 'redux-saga';
// takeEvery: theo dõi một action nào đó thay đổi, khi action thay đổi thì nó chui vào saga nào đó
import {put, takeEvery} from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

function* incrementAsync() {
  console.log("Increment saga");
}

export function* watchIncrement() {
  // Lắng nghe mỗi khi action INCREMENT_ASYN được gọi thì sẽ gọi saga increment
  yield takeEvery(INCREMENT_ASYN, incrementAsync);
};

