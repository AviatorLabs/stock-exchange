import "./style/global.css"
import "./style/variables.css"

import { router } from "./router.js";
import { validateInputs, validatePass } from "./utils/validators.js";
import { state } from "./state/state.js";
import { getSignInputValue } from "./utils/getInputs.js";

document.addEventListener("click", (e) => {

    const link = e.target.closest("[data-link]");

    if (!link) return;

    e.preventDefault();

    let href;

    if (link.tagName === "A") {
        href = link.getAttribute("href");

        history.pushState(null, null, href);

    }else if (link.tagName === "BUTTON") {

        if (!validateInputs()) {
            console.log("Please fill in all required fields.");
            return;
        }

        if(!validatePass()) {
            alert("Password mismatch! Please check your spelling and try again");
            return;
        }

        href = link.dataset.href;
        getSignInputValue();

        history.pushState(link.id, null, href);
        console.log(state.currentUser);

        
    }


    router();
});
window.addEventListener("popstate", router);

router();
