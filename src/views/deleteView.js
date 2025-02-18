import page from "../../node_modules/page/page.mjs";
import { deleteAlbum } from "../services/dataService.js";

export async function deleteView(ctx) {
	const albumId = ctx.params.id;
	await deleteAlbum(albumId);

	page.redirect('/dashboard');
}