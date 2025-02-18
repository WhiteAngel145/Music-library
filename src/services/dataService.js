import { api } from '../apis/requester.js';

const endpoint = {
	dashboard: '/data/albums?sortBy=_createdOn%20desc',
	details: '/data/albums/'
}

export async function dashboard() {
	const result = await api.get(endpoint.dashboard);
	return result;
}

export async function getDetails(_id) {
	const result = await api.get(endpoint.details + _id)
	return result;
}