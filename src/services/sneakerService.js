import fetch from './index';

export const sneakersService = () => {
	return fetch.get('/api/sneakers');
};

export const sneakerService = sneakerId => {
	return fetch.get(`/api/sneakers/${sneakerId}`);
};
