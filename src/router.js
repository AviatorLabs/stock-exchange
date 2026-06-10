// router.js

// import {loadCss} from "./utils/cssLoader.js";

import Home from "./pages/home.js";
// import Stocks from "./pages/guest.js";
import sellerSignUp from "./pages/sellerSign-Up.js";
import buyerSignUp from "./pages/buyerSign-Up.js";
import sellersDashboard from "./pages/sellersDashboard.js";
// import buyersDashboard from "./pages/buyersDashboard.js";

const routes = {
    "/": Home,
    // "/stocks": Stocks,
    "/seller-sign-up": sellerSignUp,
    "/buyer-sign-up": buyerSignUp,
    "/seller-dashboard": sellersDashboard,
    // "/buyer-dashboard": buyersDashboard
};

export function router() {

    const path = window.location.pathname;

    console.log("Routing to:", path);

    const page = routes[path] || Home;

    //loadCss(page.css);

    document.getElementById("app").innerHTML = page.render();

    if (page.init) {
        page.init();
    }

    if (page.clear) {
        page.clear();
    }
}