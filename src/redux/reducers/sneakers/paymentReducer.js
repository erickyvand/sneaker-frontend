import { pending, fulfilled, rejected } from '../../../helpers';
import { PAYMENT } from '../../actionType';

const initialState = {
	message: '',
	loading: false,
	redirect: false,
	error: '',
	data: {},
};

const paymentReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(PAYMENT):
			return {
				...state,
				loading: true,
			};
		case fulfilled(PAYMENT):
			return {
				...state,
				loading: false,
				redirect: true,
				error: '',
				message: action.payload.data.message,
				data: action.payload.data,
			};
		case rejected(PAYMENT):
			return {
				...state,
				loading: false,
				message: '',
				redirect: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default paymentReducer;
