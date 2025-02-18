import { render, html } from '../lib/lit-html.js';
import { getDetails, editAlbum } from '../services/dataService.js';
import page from "../../node_modules/page/page.mjs";
const template = (onEdit, data) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Album</h2>
      <form @submit=${onEdit} class="edit-form">
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${data.singer} />
        <input type="text" name="album" id="album-album" placeholder="Album" value=${data.album} />
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${data.imageUrl} />
        <input type="text" name="release" id="album-release" placeholder="Release date" value=${data.release} />
        <input type="text" name="label" id="album-label" placeholder="Label" value=${data.label} />
        <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${data.sales} />
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const albumId = ctx.params.id
  const detailsAlbum = await getDetails(albumId);
  
	render(template(editEventHandler.bind(null, albumId), detailsAlbum)); //* .bind(this, anything....) Firs argument is equal to to this after that is any thing i need to be transferred
}

async function editEventHandler(albumId, event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
    singer: formData.get('singer'),
    album: formData.get('album'),
    imageUrl: formData.get('imageUrl'),
    release: formData.get('release'),
    label: formData.get('label'),
    sales: formData.get('sales')
  }

  const filing = Object.values(data);

  if (filing.some(fill => !fill)) {
    return alert('All filled are required!')
  }

  try {
    const result = await editAlbum(albumId, data);
    page.redirect(`/details/${albumId}`)
  } catch (error) {
    alert(error.message)
  }

}