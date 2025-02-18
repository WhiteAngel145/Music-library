import { api } from '../apis/requester.js';
import { setUserData, clearUserData } from '../utils/userUtils.js';

const endpoints = {
	login: '/users/login',
	register: '/users/register',
	logout: '/users/logout'
}

export async function login(data) {
	const result = await api.post(endpoints.login, data);
	setUserData(result);
	return result;
}

export async function register(data) {
	const result = await api.post(endpoints.register, data);
	setUserData(result);
	return result;
}

export async function logout() {
	api.get(endpoints.logout);
	clearUserData();
}