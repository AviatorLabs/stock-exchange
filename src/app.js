import "./style/global.css"
import "./style/variables.css"
import { router } from "./router.js";
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
