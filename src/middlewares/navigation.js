import { navigation } from '../views/navView.js';

export function navigationController(ctx, next) {
	navigation(ctx);

	next();
}