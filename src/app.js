import "./style/global.css"
import error from "./components/error.js";
import "./style/variables.css"
import loading from "./components/loading.js";
import { router } from "./router.js";
import { validateInputs, validatePass } from "./utils/validators.js";
import { state } from "./state/state.js";

document.addEventListener("click", (e) => {

    const link = e.target.closest("a[data-link]");

    if (!link) return;

    e.preventDefault();

    history.pushState(null, null, link.href);


    router();
});
window.addEventListener("popstate", router);

router();
