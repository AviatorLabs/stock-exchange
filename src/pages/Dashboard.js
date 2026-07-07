import '../style/pages/dashboard.css'
import { stockSellInput } from '../utils/getInputs.js'
import { state } from '../state/state.js'
import sellerBg from '../components/sellerBackground.js'
import buyerBg from '../components/buyerBackground.js'
import sellerAside from '../components/sellerAside.js'
import buyerAside from '../components/buyerAside.js'
import dashHeader from '../components/dashHeader.js'

import sellersPublishForm from "../components/sellStockForm.js";
import noOfSoldStocks from "../components/noOfSoldStocks.js";
import stockHolders from "../components/stockHolders.js";
import availableStock from "../components/availableStock.js";
import buyersStock from "../components/buyersStock.js";
import loading from "../components/loading.js";
import error from "../components/error.js";
const sections = {
    "sell-stock": sellersPublishForm,
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
    const background = document.querySelector(".dash-background");
    const aside = document.querySelector(".main-dash-aside");
    const headerTitle = document.querySelector(".main-dash-header h2");

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

        const dashBody = document.querySelector(".dash-main-body");

        dashBody.innerHTML = loading("Loading section...");

        setTimeout(() => {

            dashBody.innerHTML = component();

            document.querySelector(".dash-main-body").innerHTML = component();
            headerTitle.textContent = button.textContent;

            if (sectionName === "sell-stock") {
                stockSellInput();
            }

            if (sectionName === "sold-stocks") {
                appendSoldStock();
            }

        }, 700);

    });
}

function appendSoldStock() {

    const cardContainer = document.querySelector(".dash-card-container");

    if (!cardContainer) {
        document.querySelector(".dash-main-body").innerHTML =
            error("Unable to load the stock section.");
        return;
    }

    if (state.stocks.length === 0) {
        cardContainer.innerHTML = error("No stocks have been published yet.");
        return;
    }

    state.stocks.forEach(stock => {

        const cardContainer = document.querySelector(".dash-card-container");
        const card = document.createElement("div");
        card.className = "card";


        card.innerHTML = `
                    <div class="img-container">
                    <img src= "${stock.front}" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name: ${stock.stockName}</h3>
                    <p>Sold Stock Percentage: ${stock.quantityPer}%</p>
                    <button class="no-of-stock-details detail-btn">Details</button>`;

        cardContainer.appendChild(card);
        // console.log("card rendered");
    })
}

// function clear() {
//     // clear any dynamic content or event listeners if needed when navigating away from this page
//     aside.removeEventListener("click", this.handleAsideClick);
// }


function render() {
    console.log("main Dashboard page initialized.");



    return `
        <div class="dash-background"></div>

        <aside class="main-dash-aside"></aside>

        <header class="main-dash-header"> 
            ${dashHeader()}
        </header>

        <main class="main-dash-main-content"> 
            <section class="dash-main-body"></section>
        </main>
    `;
}