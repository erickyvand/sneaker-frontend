import axios from 'axios';

export default axios.create({
	baseURL: `${process.env.API_URL}`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		contentType: 'application/json',
		accept: 'application/json',
	},
});
