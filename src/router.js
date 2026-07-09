// import {loadCss} from "./utils/cssLoader.js";

import Home from "./pages/home.js";
// import Stocks from "./pages/guest.js";
import sellerSignUp from "./pages/sellerSignUp.js";
import buyerSignUp from "./pages/buyerSignUp.js";
import mainDash from "./pages/dashboard.js";
import mainLogin from './pages/logIn.js'
import notFound from "./pages/notFound";

const routes = {
    "/": Home,
    // "/stocks": Stocks,
    "/seller-sign-up": sellerSignUp,
    "/buyer-sign-up": buyerSignUp,
    "/dashboard" : mainDash,
    "/main-login" : mainLogin
};

export function router() {

    const path = window.location.pathname;

    console.log("Routing to:", path);

    const page = routes[path] || notFound;

    //loadCss(page.css);

    document.getElementById("app").innerHTML = page.render();

    if (page.init) {
        page.init();
    }

    if (page.clear) {
        page.clear();
    }
}