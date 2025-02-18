import { api } from '../apis/requester.js';

const endpoint = {
	dashboard: '/data/albums?sortBy=_createdOn%20desc',
}

export async function dashboard() {
	const result = await api.get(endpoint.dashboard);
	return result;
}