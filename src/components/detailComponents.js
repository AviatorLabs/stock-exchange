import { state } from "../state/state.js";
export function stockSoldDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stockName === id);
        const ditailDialog = document.getElementById("ditail-dialog");
    
        ditailDialog.innerHTML = `
            <div class="ditailContainer">
            <h2 class="ditailTitle">Details</h2>
            <h3>Stock Name:</h3>
            <h4>${currentStockInfo.stockName}</h4>
            <h3>Description:</h3>
            <p>${currentStockInfo.description}</p>
            <h3>Quantity in Percent:</h3>
            <h4>${currentStockInfo.quantityPer}%</h4>
            <h3>Quantity:</h3>
            <h4>${currentStockInfo.quantity}</h4>
            <h3>Price:</h3>
            <h4>${currentStockInfo.price}$</h4>
            <div class="ditailBtnContainer">
            <button class="deleteBtn dialogBtn">Delete</button>
            <button class="closeBtn dialogBtn">Close</button>
            </div>
            </div>
        `
}

export function stockHoldersDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stockName === id);
    const ditailDialog = document.getElementById("ditail-dialog");
    ditailDialog.innerHTML = `
        <div class="ditailContainer">
        <h2 class="ditailTitle">Stock Holders Details</h2>
        <div class="detail-card-container">

        </div>
        <div class="ditailBtnContainer">
        <button class="closeBtn dialogBtn">Close</button>
        </div>
        </div>
    `;
    for (const holder of currentStockInfo.stockHolders) {
        const holderInfo = document.createElement("div");
        holderInfo.className = "holderInfo";
        holderInfo.innerHTML = `
            <h3>${holder.name}</h3>
            <p>${holder.email}</p>
            <p>${holder.shareQuantity}</p>
        `;
        ditailDialog.querySelector(".detail-card-container").appendChild(holderInfo);
    }
}

export function buyersStockDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stockName === id);
    const ditailDialog = document.getElementById("ditail-dialog");
    ditailDialog.innerHTML = `
        <div class="ditailContainer">
            <h2 class="ditailTitle">Details</h2>
            <h3>Stock Name:</h3>
            <h4>${currentStockInfo.stockName}</h4>
            <h3>Description:</h3>
            <p>${currentStockInfo.description}</p>
            <h3>Quantity:</h3>
            <h4>${currentStockInfo.quantity}</h4>
            <h3>Price:</h3>
            <h4>${currentStockInfo.price}$</h4>
            <h3>Amount owned:</h3>
            <h4>${currentStockInfo.quantity * currentStockInfo.price}$</h4>
            <div class="ditailBtnContainer">
            <button class="closeBtn dialogBtn">Close</button>
            </div>
        </div>`;
}