import { pending, fulfilled, rejected } from '../../../helpers';
import { VIEW_SNEAKERS } from '../../actionType';

const initialState = {
	message: '',
	loading: false,
	error: '',
	data: [],
};

const viewSneakersReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(VIEW_SNEAKERS):
			return {
				...state,
				loading: true,
			};
		case fulfilled(VIEW_SNEAKERS):
			return {
				...state,
				loading: false,
				message: action.payload.data.message,
				data: action.payload.data.data,
			};
		case rejected(VIEW_SNEAKERS):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default viewSneakersReducer;
