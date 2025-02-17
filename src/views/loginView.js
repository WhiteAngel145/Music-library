import page from "../../node_modules/page/page.mjs";
import { render, html } from '../lib/lit-html.js';
import { login } from "../services/userService.js";

const template = (onLogin) => html`
	<section id="login">
      <div class="form">
        <h2>Login</h2>
        <form @submit=${onLogin} class="login-form">
          <input type="text" name="email" id="email" placeholder="email" />
          <input type="password" name="password" id="password" placeholder="password" />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
        </form>
      </div>
    </section>
`;

export async function loginView(ctx) {
	render(template(loginEventHandler));
}

async function loginEventHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  };

  if (data.email === '' || data.password === '') {
    return alert('All fields are required !');
  }

  try {
    await login(data);

    page.redirect('/');
  } catch (error) {
    alert(error.message);
  }
}