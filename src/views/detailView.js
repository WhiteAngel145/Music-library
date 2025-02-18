import { render, html, nothing } from '../lib/lit-html.js';
import { getDetails } from '../services/dataService.js';
import { getUserData } from '../utils/userUtils.js';

const template = (data, isOwner, userData) => html`
    <section id="details">
      <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
          <img src=${data.imageUrl} alt=${data.album} />
        </div>
        <div id="info-wrapper">
          <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
          <p>
            <strong>Album name:</strong><span id="details-album">${data.album}</span>
          </p>
          <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
          <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
          <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">0</span></div>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          ${userData
          ? !isOwner
            ? html`<a href="/like${data._id}" id="like-btn">Like</a>`
            : html`
                  <a href="/edit${data._id}" id="edit-btn">Edit</a>
                  <a href="/delete${data._id}" id="delete-btn">Delete</a>
                  `
          : nothing
          }
        </div>
      </div>
    </section>
`;

export async function detailsView(ctx) {
  const idAlbum = ctx.params.id;
  const detailsAlbum = await getDetails(idAlbum);
  const userData = getUserData();
  const isOwner = userData && userData._id === detailsAlbum._ownerId;

  console.log('Album Details --------> ', detailsAlbum);
  console.log('userData --------> ', userData);
  
  
	render(template(detailsAlbum, isOwner, userData));
}