// src/js/pages/sellersDashboard.js

import '../style/pages/dashboard.css'
import sellerBg from '../components/sellerBackground.js'
import buyerBg from '../components/buyerBackground.js'
import sellerAside from '../components/sellerAside.js'
import buyerAside from '../components/buyerAside.js'
import dashHeader from '../components/dashHeader.js'

import sellersPublishform from "../components/sellStockForm.js";
import noOfSoldStocks from "../components/noOfSoldStocks.js";
import stockHolders from "../components/stockHolders.js";
import availableStock from "../components/availableStock.js";
import buyersStock from "../components/buyersStock.js";

const sections = {
    "sell-stock": sellersPublishform,
    "sold-stocks": noOfSoldStocks,
    "stock-holders": stockHolders,
    "new-stock": availableStock,
    "my-stocks": buyersStock,
    // "portfolio": portfolio
};

export default {
    init,
    render,
    //clear
}
function init() {

    // Add event listener to the aside for navigation
    const headerTxt = document.querySelector(".dash-header-txt");
    const background = document.querySelector(".dushBackground");
    const aside = document.querySelector(".mainDash-aside");
    const headerTitle = document.querySelector(".mainDash-header h2");

    if (history.state === "/seller") {
        background.innerHTML = sellerBg();
        aside.innerHTML = sellerAside();
        headerTxt.style.backgroundColor = "rgb(133, 4, 4)";
    } else if (history.state === "/buyer") {
        aside.innerHTML = buyerAside();
        background.innerHTML = buyerBg();
        headerTxt.style.backgroundColor = "rgb(49, 129, 3)";
    }


    console.log(history.state);

    aside.addEventListener("click", (e) => {
        const button = e.target.closest("[session]");
        if (!button) return;

        const sectionName = button.dataset.section;
        const component = sections[sectionName];

        if (!component) return;

        document.querySelector(".Dash-main-body").innerHTML = component();
        headerTitle.textContent = button.textContent;

    });
}

// function clear() {
//     // clear any dynamic content or event listeners if needed when navigating away from this page
//     aside.removeEventListener("click", this.handleAsideClick);
// }


function render() {
    console.log("main Dashboard page initialized.");



    return `

    <div class="dushBackground"></div>

    <aside class="mainDash-aside">
    </aside>

    <header class="mainDash-header">
    ${dashHeader()}
    </header>

    <main class="mainDash-main-content">
        <section class="Dash-main-body">
        </section>
    </main>`;
}