import { baseRender, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const container = document.querySelector('header');

const template = (hasUser) => html`
      <!-- Navigation -->
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="logo" /></a>

      <nav>
        <div>
          <a href="/dashboard">Dashboard</a>
        </div>
		${hasUser
			? html`
			<div class="user">
        	  <a href="/create">Add Album</a>
        	  <a href="/logout">Logout</a>
        	</div>
			`
			: html`
			<div class="guest">
        	  <a href="/login">Login</a>
        	  <a href="/register">Register</a>
        	</div>
			`
		}
      </nav>
`;

export function navigation(ctx) {
	const hasUser = getUserData();

	baseRender(template(hasUser), container);
}