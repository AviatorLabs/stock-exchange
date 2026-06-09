// app.js

import "./style/global.css"
import "./style/variables.css"

import { router } from "./router.js";
// import { validateInputs } from "./utils/validators.js";

document.addEventListener("click", (e) => {

    const link = e.target.closest("[data-link]");

    if (!link) return;

    e.preventDefault();

    let href;

    if (link.tagName === "A") {
        href = link.getAttribute("href");
    }else if (link.tagName === "BUTTON") {

        if (!validateInputs()) {
            console.log("Please fill in all required fields.");
            return;
        }

        href = link.dataset.href;
    }

    history.pushState(null, null, href);

    router();
});
window.addEventListener("popstate", router);

router();