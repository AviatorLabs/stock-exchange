import '../style/pages/guest.css'
import buyerBg from '../components/buyerBackground.js'
import { state, searchMarketStocks } from '../state/state.js'
import { API_BASE_URL } from '../config/config.js'
import { marketStockDetail } from "../components/detailComponents.js"
import { router } from '../router.js'
import error from "../components/error.js";

export default {
    render,
    init
};

function init() {
    const background = document.querySelector(".guest-background");
    background.innerHTML = buyerBg();
    appendAvailableStock();
    initStockSearch();
    initDialog();
}

function appendAvailableStock(searchTerm = getMarketSearchTerm()) {
    const cardContainer = document.querySelector(".guest-main-container");

    if (!cardContainer) {
        document.querySelector(".dash-main-body").innerHTML =
            error("Unable to load the stock section.");
        return;
    }

    cardContainer.innerHTML = ``;

    if (state.market.length === 0) {
        cardContainer.innerHTML = error("No stocks have been published yet.");
        return;
    }

    const visibleStocks = searchMarketStocks(searchTerm);

    if (visibleStocks.length === 0) {
        cardContainer.innerHTML = error("No stocks found.");
        return;
    }

    visibleStocks.forEach(stock => {

        const card = document.createElement("div");
        card.className = "guest-card";

        card.innerHTML = `
            <div class="guest-stock-img-container">
                <img src= "${API_BASE_URL}${stock.image}" alt="Stock Image" class="guest-stock-front-img">
            </div>
            <h3>Stock Name: ${stock.stock_name}</h3>
            <p>Available Stock Percentage: ${stock.quantity_inPer}%</p>
            <button class="detail-btn" id="${stock.stock_id}">Details</button>
        `;

        cardContainer.appendChild(card);
        // console.log("card rendered");
    })
}

function initStockSearch() {
    const searchInput = document.getElementById("guest-stock-search");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
        appendAvailableStock(searchInput.value);
    });
}

function getMarketSearchTerm() {
    return document.getElementById("guest-stock-search")?.value || "";
}

function initDialog() {
    const cardContainer = document.querySelector(".guest-main-container");
    const detailDialog = document.getElementById("detail-dialog");

    if (!cardContainer) return;

    cardContainer.addEventListener("click", (e) => {

        const detailBtn = e.target.closest(".detail-btn");

        if (detailBtn) {
            detailDialog.showModal();
            marketStockDetail(detailBtn.id);
            dialogInteraction();
        }
    })
}

function dialogInteraction() {
    const detailDialog = document.getElementById("detail-dialog");

    if (!detailDialog) return;

    detailDialog.addEventListener("click", (e) => {
        const closeBtn = e.target.closest(".close-btn");
        const buyBtn = e.target.closest(".buy-btn")

        if (closeBtn) {
            detailDialog.close();
        } else if (buyBtn) {
            detailDialog.close();
            history.pushState(null, null, "/buyer-sign-up");
            router();
        }
    })
}


function render() {
    return `
    <div class="guest-background"></div>
    <dialog id="detail-dialog" class="detail-dialog"></dialog>
    <main class="guest-main-body">
        <section class="guest-hero">
            <h1 class="guest-header">Welcome to the Stock Exchange Market</h1>
            <p class="guest-description">
                Explore the world of stocks and investments as a guest user. 
                Browse through available stocks, view market trends, and get a feel for the platform without creating an account.
            </p>
            <p class="signup-info">
                Signup as buyer to purchase stocks and track your portfolio.
            </p>
            <div class="guest-stock-search">
                <label for="guest-stock-search" class="guest-stock-search-label">Search stocks</label>
                <input
                    type="search"
                    id="guest-stock-search"
                    class="guest-stock-search-input"
                    aria-label="Search available stocks"
                    placeholder="Search by stock name"
                >
            </div>
        </section>
        <section class="guest-main-container">
        </section>
    </main>
    `;
}
