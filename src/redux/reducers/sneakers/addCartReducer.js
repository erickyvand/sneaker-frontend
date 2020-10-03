import { pending, fulfilled, rejected } from '../../../helpers';
import { ADD_CART } from '../../actionType';

const initialState = {
	message: '',
	loading: false,
	error: '',
};

const addCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(ADD_CART):
			return {
				...state,
				loading: true,
			};
		case fulfilled(ADD_CART):
			return {
				...state,
        loading: false,
        error: '',
				message: action.payload.data.message,
			};
		case rejected(ADD_CART):
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

export default addCartReducer;
