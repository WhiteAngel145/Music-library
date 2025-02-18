import { api } from '../apis/requester.js';

const endpoint = {
	dashboard: '/data/albums?sortBy=_createdOn%20desc',
	details: '/data/albums/',
	addLike: '/data/likes',
	totalLies: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
	isLike: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function dashboard() {
	const result = await api.get(endpoint.dashboard);
	return result;
}

export async function getDetails(_id) {
	const result = await api.get(endpoint.details + _id);
	return result;
}

export async function sendLikes(albumId) {
	const likes = await api.post(endpoint.addLike, albumId);
	return likes;
}

export async function getTotalLies(albumId) {
	const likes = await api.get(endpoint.totalLies(albumId));
	return likes;
}

export async function getIsLike(albumId, userId) {
	const isLike = await api.get(endpoint.isLike(albumId, userId));
	return isLike;
}