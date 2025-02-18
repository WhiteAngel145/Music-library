import { render, html } from '../lib/lit-html.js';
import { dashboard } from '../services/dataService.js';

const template = (dashboardData) => html`
  <section id="dashboard">
    <h2>Albums</h2>
      ${dashboardData.length > 0
        ? html`<ul class="card-wrapper">
              ${dashboardData.map(data => templateAlbum(data))}
              </ul>`
        : html`<h2>There are no albums added yet.</h2>`
      }
  </section>
`;

const templateAlbum = (data) => html`
  <li class="card">
    <img src=${data.imageUrl} alt=${data.album} />
    <p><strong>Singer/Band: </strong><span class="singer">${data.singer}</span></p>
    <p>
      <strong>Album name: </strong><span class="album">${data.album}</span>
    </p>
    <p>
      <strong>Sales:</strong><span class="sales">${data.sales}</span>
    </p>
    <a class="details-btn" href="/details/${data._id}">Details</a>
  </li>
`;

export async function dashboardView(ctx) {
  const dashboardData = await dashboard();
  render(template(dashboardData));
}
