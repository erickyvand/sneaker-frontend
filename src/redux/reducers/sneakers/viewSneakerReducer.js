import { pending, fulfilled, rejected } from '../../../helpers';
import { VIEW_SNEAKER } from '../../actionType';

const initialState = {
	message: '',
	loading: false,
	error: '',
	data: {},
};

const viewSneakerReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(VIEW_SNEAKER):
			return {
				...state,
				loading: true,
			};
    case fulfilled(VIEW_SNEAKER):
			return {
				...state,
				loading: false,
				message: action.payload.data.message,
				data: action.payload.data.data,
			};
    case rejected(VIEW_SNEAKER):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default viewSneakerReducer;
