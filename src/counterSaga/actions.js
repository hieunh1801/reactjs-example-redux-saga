import {DECREMENT, INCREMENT, INCREMENT_ASYN} from './constants';

export const decrement = (step) => {
	return {
		type: DECREMENT,
		payload: {
			step: step,
		}
	}
}

export const increment = (step) => {
	return {
		type: INCREMENT,
		payload: {
			step: step,
		},
	}
}

export const incrementAsyn = (step) => {
	return {
		type: INCREMENT_ASYN,
		payload: {
			step: step,
		}
	}
}