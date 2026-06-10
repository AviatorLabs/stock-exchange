// src/js/pages/sellersDashboard.js

import '../style/pages/sellerDashboard.css'
import img_map from '../assets/map.svg'

import sellersPublishform from "../components/sellStockForm.js";
import noOfSoldStocks from "../components/noOfSoldStocks.js";
import stockHolders from "../components/stockHolders.js";

const sections = {
    "sell-stock": sellersPublishform,
    "sold-stocks": noOfSoldStocks,
    "stock-holders": stockHolders
};

export default {
    init,
    render,
    //clear
}
 function init() {

    // Add event listener to the aside for navigation
    const aside = document.querySelector(".sellerDash-aside");
    const headerTitle = document.querySelector(".sellerDash-header h2");
    
    aside.addEventListener("click", (e) => {
        const button = e.target.closest("[session]");
        if (!button) return;

        const sectionName = button.dataset.section;
        const component = sections[sectionName];

        if(!component) return;

        document.querySelector(".sellerDash-main-body").innerHTML = component();
        headerTitle.textContent = button.textContent;
        
    });
}

// function clear() {
//     // clear any dynamic content or event listeners if needed when navigating away from this page
//     aside.removeEventListener("click", this.handleAsideClick);
// }


 function render() {
    console.log("Seller's Dashboard page initialized.");

    
    
    return `
     <div class="seller-dush-background">
        <div class="sellerDushCircle top-left"></div>
        <div class="sellerDushCircle top-right"></div>
        <div class="sellerDushCircle bottom-left"></div>
        <div class="sellerDushCircle bottom-right"></div>
                    
        <img src="${img_map}" alt="Map Image" class="sellerDush-bg-image">
    </div>

    <aside class="sellerDash-aside">
        <div class="sellerDash-logo-container">
            <h1 class="sellerDash-logo">Seller Dashboard</h1>
        </div>
        <button session data-section="sold-stocks" class="sellerDash-BTN">Number of Stock</button>
        <button session data-section="stock-holders" class="sellerDash-BTN">Stock Holders</button>
        <button session data-section="sell-stock" class="sellerDash-BTN">Sell Stock</button>
    </aside>

    <header class="sellerDash-header">
            <h2 class="sellerDash-header-txt">Welcome, Seller!</h2>
            <i class="fa-solid fa-user icon"></i>
    </header>

    <main class="sellerDash-main-content">
        <section class="sellerDash-main-body">
        </section>
    </main>`;
}