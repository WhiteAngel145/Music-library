import { render, html } from '../lib/lit-html.js';
import { register } from '../services/userService.js';
import page from '../../node_modules/page/page.mjs';

const template = (onRegister) => html`
	<section id="register">
        <div class="form">
            <h2>Register</h2>
        <form @submit=${onRegister} class="login-form">
        	<input type="text" name="email" id="register-email" placeholder="email" />
        	<input type="password" name="password" id="register-password" placeholder="password" />
        	<input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        	<button type="submit">register</button>
        	<p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
        </div>
    </section>
`;

export async function registerView(ctx) {
	render(template(eventRegisterHandler));
}

async function eventRegisterHandler(event) {
	event.preventDefault();
	const formData = new FormData(event.target);

	const data = {
		email: formData.get('email'),
		password: formData.get('password'),
		're-password': formData.get('re-password')
	}

	if (data.email === '' || data.password === '' || data.password !== data['re-password']) {
		return alert('All fields are required !');
	}

	try {
		await register(data);

		page.redirect('/');
	} catch (error) {
		alert(error.message);
	}
}