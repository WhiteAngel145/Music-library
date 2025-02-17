import { page } from "./library/page.js";


page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutView);
page('/create', createView);
page('/dashboard', dashboardView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
page('/like', likeView);

page();