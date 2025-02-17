export function setUserData(userData) {
	localStorage.setItem('userData', JSON.stringify(userData));
}

export function getUserData() {
	let userData = localStorage.getItem('userData');
	userData = JSON.parse(userData);
	return userData;
}

export function clearUserData() {
	localStorage.clear();
}