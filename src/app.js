import page from "../node_modules/page/page.mjs";

import { homeView } from "./views/homeView.js";
import { registerView } from "./views/registerView.js";
import { loginView } from "./views/loginView.js";
import { createView} from "./views/createView.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/detailView.js";
import { editView } from "./views/editView.js";
import { logoutView } from "./views/logoutView.js";
import { deleteView } from "./views/deleteView.js";

page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutView);
page('/create', createView);
page('/dashboard', dashboardView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
// page('/like', likeView);

page();
