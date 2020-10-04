import fetch from './index';

export const sneakersService = () => {
	return fetch.get('/api/sneakers');
};

export const sneakerService = sneakerId => {
	return fetch.get(`/api/sneakers/${sneakerId}`);
};

export const addCartService = (sneakerId, size) => {
	return fetch.post(`/api/sneakers/${sneakerId}/add/${size}`);
};

export const viewCartsService = () => {
	return fetch.get(`/api/sneakers/cart/view`);
};

export const payService = (cartId, data) => {
	return fetch.post(`/api/payments/${cartId}`, data);
};

export const descService = () => {
	return fetch.get('/api/descriptions');
};
