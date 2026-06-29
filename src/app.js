// app.js

import "./style/global.css"
import error from "./components/error.js";
import "./style/variables.css"
import loading from "./components/loading.js";
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

    } else if (link.tagName === "BUTTON") {

    if (!validateInputs()) {
        return;
    }

    const errorText = document.querySelector(".form-error");

    if (!validatePass()) {

        if(errorText){
            errorText.textContent = "Passwords do not match.";
        }

        return;
    }

    if(errorText){
        errorText.textContent = "";
    }

    href = link.dataset.href;

    getSignInputValue();

   if (link.id === "/buyer" || link.id === "/seller") {

    const container = document.querySelector(
        link.id === "/buyer"
            ? ".buyerMain-container"
            : ".sellerMain-container"
    );

    container.innerHTML = loading(
        link.id === "/buyer"
            ? "Creating Buyer Account..."
            : "Creating Seller Account..."
    );
console.log("Buyer loading started");
    setTimeout(() => {

        history.pushState(link.id, null, href);

        router();

    }, 2000);

    return;
}

    history.pushState(link.id,null,href);

} 


    router();
});
window.addEventListener("popstate", router);

router();
