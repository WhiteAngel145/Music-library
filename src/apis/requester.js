import { getUserData, clearUserData } from "../utils/userUtils.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
	const options = {
		method,
		headers: {}
	};

	if (data !== undefined) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	const userData = getUserData();

	if (userData) {
		options.headers['X-Authorization'] = userData.accessToken;
	}

	try {
		const response = await fetch(host + url, options);

		if (!response.ok) {
			const error = await response.json();

			if (response.status === 403 && error.message == 'Invalid access token') {
				clearUserData();
			}

			throw new Error(error.message);
		}

		if (response.status === 204) {
			return;
		}
		return response.json();
	} catch (error) {
		throw alert(error.message);
	}
}

export const api = {
	get: (url) => request('GET', url),
	post: (url, data) => request('POST', url, data),
	put: (url, data) => request('PUT', url, data),
	del: (url) => request('DELETE', url)
};