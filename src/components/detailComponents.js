import { state } from "../state/state.js";
export function stockSoldDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stockName === id);
    const detailDialog = document.getElementById("detail-dialog");
    
    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Details</h2>
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
            <div class="detail-btn-container">
                <button class="delete-btn dialog-btn">Delete</button>
                <button class="close-btn dialog-btn">Close</button>
            </div>
        </div>
    `;
}

export function stockHoldersDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stockName === id);
    const detailDialog = document.getElementById("detail-dialog");
    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Stock Holders Details</h2>
            <div class="detail-card-container">

            </div>
            <div class="detail-btn-container">
                <button class="close-btn dialog-btn">Close</button>
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
        detailDialog.querySelector(".detail-card-container").appendChild(holderInfo);
    }
}

export function buyersStockDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stockName === id);
    const detailDialog = document.getElementById("detail-dialog");
    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Details</h2>
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
            <div class="detail-btn-container">
                <button class="close-btn dialog-btn">Close</button>
            </div>
        </div>
    `;
}
