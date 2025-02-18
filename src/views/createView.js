import { render, html } from '../lib/lit-html.js';
import { addAlbum } from '../services/dataService.js'
import page from '../../node_modules/page/page.mjs';
const template = (onAdd) => html`
    <section id="create">
      <div class="form">
        <h2>Add Album</h2>
        <form @submit=${onAdd} class="create-form">
          <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
          <input type="text" name="album" id="album-album" placeholder="Album" />
          <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
          <input type="text" name="release" id="album-release" placeholder="Release date" />
          <input type="text" name="label" id="album-label" placeholder="Label" />
          <input type="text" name="sales" id="album-sales" placeholder="Sales" />
          <button type="submit">post</button>
        </form>
      </div>
    </section>
`;

export async function createView(ctx) {
	render(template(addEventHandler));
}

async function addEventHandler(event) {
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
      const result = await addAlbum(data);
      page.redirect(`/dashboard`)
    } catch (error) {
      alert(error.message)
    }
}