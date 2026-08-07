import '../style/pages/guest.css'
import buyerBg from '../components/buyerBackground.js'
import { state } from '../state/state.js'
import { API_BASE_URL } from '../config/config.js'

export default {
    render,
    init
};

function init() {
    const background = document.querySelector(".guest-background");
    background.innerHTML = buyerBg();
    appendAvailableStock();
}

function appendAvailableStock() {
    const cardContainer = document.querySelector(".guest-main-container");
    cardContainer.innerHTML = ``;

    if (!cardContainer) {
        document.querySelector(".dash-main-body").innerHTML =
            error("Unable to load the stock section.");
        return;
    }

    if (state.stocks.length === 0) {
        cardContainer.innerHTML = error("No stocks have been bought yet.");
        return;
    }

    state.market.forEach(stock => {

        const card = document.createElement("div");
        card.className = "gust-card";

        card.innerHTML = `
            <div class="gust-Stock-img-container">
                <img src= "${API_BASE_URL}${stock.image}" alt="Stock Image" class="gust-stock-front-img">
            </div>
            <h3>Stock Name: ${stock.stock_name}</h3>
            <p>Available Stock Percentage: ${stock.quantity_inPer}%</p>
            <button class="detail-btn" id="${stock.stock_name}">Details</button>
        `;

        cardContainer.appendChild(card);
        // console.log("card rendered");
    })
}

function render() {
    return `
    <div class="guest-background"></div>
    <main class="guest-main-body">
        <section class="guest-hero">
            <h1 class="guest-header">Welcome to the Stock Exchange Market</h1>
            <p class="guest-description">Explore the world of stocks and investments as a guest user. Browse through available stocks, view market trends, and get a feel for the platform without creating an account.</p>
        </section>
        <section class="guest-main-container">
        </section>
    </main>
    `;
}