import {INCREMENT_ASYN,INCREMENT,DECREMENT} from './constants';
const initialSate = {
	time: 0,
};
function counterReducer(state = initialSate, action) {
	switch(action.type) {
		case INCREMENT: 
			return Object.assign({}, {time: state.time + action.payload.step})
		case DECREMENT:
			return Object.assign({}, {time: state.time - action.payload.step});
		case INCREMENT_ASYN:
			return Object.assign({}, {time: state.time + action.payload.step});
		default:
			return state;
	}
}
export default counterReducer;