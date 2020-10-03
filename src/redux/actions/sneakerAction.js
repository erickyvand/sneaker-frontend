import { sneakerService, sneakersService } from '../../services/sneakerService';
import { VIEW_SNEAKER, VIEW_SNEAKERS } from '../actionType';

export const sneakersAction = () => {
	return {
		type: VIEW_SNEAKERS,
		payload: sneakersService(),
	};
};

export const sneakerAction = sneakerId => {
	return {
		type: VIEW_SNEAKER,
		payload: sneakerService(sneakerId),
	};
};
