import { logout } from "../services/userService.js";
import page from "../../node_modules/page/page.mjs";

export async function logoutView() {
	logout();

	page.redirect('/dashboard');
}