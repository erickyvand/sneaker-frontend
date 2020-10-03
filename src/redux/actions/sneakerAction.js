import {
	addCartService,
	descService,
	payService,
	sneakerService,
	sneakersService,
	viewCartsService,
} from '../../services/sneakerService';
import {
	ADD_CART,
	DESCRIPTIONS,
	PAYMENT,
	VIEW_CARTS,
	VIEW_SNEAKER,
	VIEW_SNEAKERS,
} from '../actionType';

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

export const addCartAction = (sneakerId, size) => {
	return {
		type: ADD_CART,
		payload: addCartService(sneakerId, size),
	};
};

export const viewCartsAction = () => {
	return {
		type: VIEW_CARTS,
		payload: viewCartsService(),
	};
};

export const payAction = (cartId, data) => {
	return {
		type: PAYMENT,
		payload: payService(cartId, data),
	};
};

export const descAction = () => {
	return {
		type: DESCRIPTIONS,
		payload: descService(),
	};
};
