import { pending, fulfilled, rejected } from '../../../helpers';
import { DESCRIPTIONS } from '../../actionType';

const initialState = {
	message: '',
	loading: false,
	error: '',
	data: [],
};

const descReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(DESCRIPTIONS):
			return {
				...state,
				loading: true,
			};
		case fulfilled(DESCRIPTIONS):
			return {
				...state,
				loading: false,
				error: '',
				message: action.payload.data.message,
				data: action.payload.data.data,
			};
		case rejected(DESCRIPTIONS):
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

export default descReducer;
