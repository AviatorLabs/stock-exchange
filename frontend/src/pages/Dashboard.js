import '../style/pages/dashboard.css'
import { API_BASE_URL } from '../config/config.js'
import { setStockInput, getAvailableStock } from '../utils/getInputs.js'
import { state, addStock, addMarket } from '../state/state.js'
import { router } from '../router.js'
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
import portfolioDash from '../components/portfolioDashboard.js'
import loading from "../components/loading.js";
import error from "../components/error.js";
import { validateInputs } from "../utils/validators.js"
import { stockSoldDetails, stockHoldersDetails, buyersStockDetails, marketStockDetail } from "../components/detailComponents.js";

const sections = {
    "sell-stock": sellersPublishForm,
    "sold-stocks": noOfSoldStocks,
    "stock-holders": stockHolders,
    "new-stock": availableStock,
    "my-stocks": buyersStock,
    "portfolio": portfolioDash
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
    const profileLink = document.getElementById("profile-link");

    if (history.state === "/seller") {
        background.innerHTML = sellerBg();
        aside.innerHTML = sellerAside();
        headerTxt.style.backgroundColor = "rgb(133, 4, 4)";
    } else if (history.state === "/buyer") {
        aside.innerHTML = buyerAside();
        background.innerHTML = buyerBg();
        headerTxt.style.backgroundColor = "rgb(49, 129, 3)";
    }

    profileLink.addEventListener("click", (e) => {
        e.preventDefault();

        history.pushState(history.state, null, "/profile");
        router();
    });

    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", () => {
        aside.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {

        if (
            aside.classList.contains("open") &&
            !aside.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            aside.classList.remove("open");
        }

    });

    console.log(history.state);

    aside.addEventListener("click", async (e) => {

        const button = e.target.closest("[session]");
        if (!button) return;

        if (window.innerWidth < 768) {
            aside.classList.remove("open");
        }

        const sectionName = button.dataset.section;
        const component = sections[sectionName];

        if (!component) return;

        const dashBody = document.querySelector(".dash-main-body");

        dashBody.innerHTML = loading("Loading section...");
         await setAvailableStock();
         
        setTimeout(() => {

            dashBody.innerHTML = component();

            document.querySelector(".dash-main-body").innerHTML = component();
            headerTitle.textContent = button.textContent;

            if (sectionName === "sell-stock") {
                stockSellInput();
            } else if (sectionName === "sold-stocks") {
                appendSoldStock();
                initDialog("sold-stocks");
            } else if (sectionName === "my-stocks") {
                appendBuyerStock();
                initDialog("my-stocks");
            } else if (sectionName === "stock-holders") {
                appendStockHolders();
                initDialog("stock-holders");
            } else if (sectionName === "portfolio") {
                appendPossession();
            } else if (sectionName === "new-stock") {
                appendAvailableStock();
                initDialog("new-stock");
            }

        }, 700);

    });
}

function appendSoldStock() {

    const cardContainer = document.querySelector(".dash-card-container");
    cardContainer.innerHTML = ``;

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

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="img-container">
                <img src= "${API_BASE_URL}${stock.image}" alt="Stock Image" class="stock-front-img">
            </div>
            <h3>Stock Name: ${stock.stock_name}</h3>
            <p>Sold Stock Percentage: ${stock.quantity_inPer}%</p>
            <button id="${stock.stock_name}" class="no-of-stock-details detail-btn">Details</button>
        `;

        cardContainer.appendChild(card);
        // console.log("card rendered");
    })
}

function appendBuyerStock() {
    const cardContainer = document.querySelector(".dash-card-container");
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

    state.stocks.forEach(stock => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="img-container">
                <img src= "${API_BASE_URL}${stock.image}" alt="Stock Image" class="Stock-front-img">
            </div>
            <h3>Stock Name: ${stock.stock_name}</h3>
            <p>Amount Owned: ${stock.quantity_inPer}%</p>
            <button class="detail-btn" id="${stock.stock_name}">Details</button>
        `;

        cardContainer.appendChild(card);
        // console.log("card rendered");
    })
}

function appendStockHolders() {
    const cardContainer = document.querySelector(".dash-card-container");
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

    state.stocks.forEach(stock => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="img-container">
                <img src= "${API_BASE_URL}${stock.image}" alt="Stock Image" class="stock-front-img">
            </div>
            <h3>Stock Name: ${stock.stock_name}</h3>
            <p>Total Number of Stock Holders: ${stock.stockHolders.length}</p>
            <button class="detail-btn" id="${stock.stock_name}">Details</button>
        `;

        cardContainer.appendChild(card);
        // console.log("card rendered");
    })

}

function appendAvailableStock() {
    const cardContainer = document.querySelector(".dash-card-container");
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
        card.className = "card";

        card.innerHTML = `
            <div class="img-container">
                <img src= "${API_BASE_URL}${stock.image}" alt="Stock Image" class="stock-front-img">
            </div>
            <h3>Stock Name: ${stock.stock_name}</h3>
            <p>Available Stock Percentage: ${stock.quantity_inPer}%</p>
            <button class="detail-btn" id="${stock.stock_name}">Details</button>
        `;

        cardContainer.appendChild(card);
        // console.log("card rendered");
    })
}

async function setAvailableStock() {
    const result = await getAvailableStock();

    if (result.success) {
        addMarket(result.stocks);
    } else {
        alert(result.message);
    }
}

function stockSellInput() {
    const sellForm = document.querySelector(".seller-dash-form ");
    const publishBtn = sellForm.querySelector(".seller-dash-form-btn");

    sellForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            console.log("Please fill in all required fields.");
            return;
        }

        const result = await setStockInput();

        if (result.success) {

            publishBtn.disabled = true;
            publishBtn.textContent = "Publishing...";

            setTimeout(() => {

                addStock(result.stocks);
                console.log(result.stocks)

                publishBtn.disabled = false;
                publishBtn.textContent = "Publish";

                alert(result.message);

                sellForm.reset();

            }, 2000);
        } else {
            alert(result.message);
        }
    });
}

function appendPossession() {
    const tbody = document.querySelector(".table-body");
    tbody.innerHTML = ``;

    state.stocks.forEach(stock => {
        const tRow = document.createElement("tr");

        tRow.innerHTML = `
            <td>${stock.stock_name}</td>
            <td>${stock.quantity}</td>
            <td>${stock.price}</td>
            <td>${stock.quantity * stock.price}</td>
            <td>NULL</td>
        `
        tbody.appendChild(tRow);
        console.log("table done")
    })
}

function initDialog(state) {
    const cardContainer = document.querySelector(".dash-card-container");
    const detailDialog = document.getElementById("detail-dialog");

    if (!cardContainer) return;

    cardContainer.addEventListener("click", (e) => {

        const detailBtn = e.target.closest(".detail-btn");

        if (detailBtn) {
            detailDialog.showModal();
            dialogComponent(detailBtn.id, state);
            dialogInteraction();
        }
    })
}

function dialogInteraction() {
    const detailDialog = document.getElementById("detail-dialog");

    if (!detailDialog) return;

    detailDialog.addEventListener("click", (e) => {
        const closeBtn = e.target.closest(".close-btn");
        const deleteBtn = e.target.closest(".delete-btn")

        if (closeBtn) {
            detailDialog.close();
        } else if (deleteBtn) {
            state.stocks = state.stocks.filter(stock => stock.stock_name !== deleteBtn.dataset.stock);
            detailDialog.close();
            appendSoldStock();
        }
    })
}

function dialogComponent(id, state) {

    if (state === "sold-stocks") {
        stockSoldDetails(id);
    } else if (state === "stock-holders") {
        stockHoldersDetails(id);
    } else if (state === "my-stocks") {
        buyersStockDetails(id);
    } else if (state === "new-stock"){
        marketStockDitail(id);
    } else {
        console.log("No componet found!")
    }
}

// function clear() {
//     // clear any dynamic content or event listeners if needed when navigating away from this page
//     aside.removeEventListener("click", this.handleAsideClick);
// }

function render() {
    console.log("Main dashboard page initialized.");

    return `
        <dialog id="detail-dialog" class="detail-dialog"></dialog>

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
