import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {helloSaga} from './counterSaga/saga';
import allReducer from './allReducer';
import {rootSaga} from './rootSaga';
// Tạo ra tằng middleWare nằm giữa action và reducer
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    allReducer,
    // thêm tằng sagaMiddleWare vào trong store
    applyMiddleware(sagaMiddleWare)
);

// chạy các saga
sagaMiddleWare.run(
    rootSaga
)
export default store;
