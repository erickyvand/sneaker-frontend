import { pending, fulfilled, rejected } from '../../../helpers';
import { VIEW_CARTS } from '../../actionType';

const initialState = {
	message: '',
	loading: false,
	error: '',
	data: [],
};

const viewCartsReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(VIEW_CARTS):
			return {
				...state,
				loading: true,
			};
		case fulfilled(VIEW_CARTS):
			return {
				...state,
				loading: false,
				error: '',
				message: action.payload.data.message,
				data: action.payload.data.data,
			};
		case rejected(VIEW_CARTS):
			return {
				...state,
				loading: false,
				message: '',
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default viewCartsReducer;
