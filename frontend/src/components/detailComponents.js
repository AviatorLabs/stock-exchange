import { state } from "../state/state.js";
export function stockSoldDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stock_id == id);
    const detailDialog = document.getElementById("detail-dialog");

    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Details</h2>
            <h3>Stock Name:</h3>
            <h4>${currentStockInfo.stock_name}</h4>
            <h3>Description:</h3>
            <p>${currentStockInfo.description}</p>
            <h3>Quantity in Percent:</h3>
            <h4>${currentStockInfo.quantity_inPer}%</h4>
            <h3>Quantity:</h3>
            <h4>${currentStockInfo.quantity}</h4>
            <h3>Price:</h3>
            <h4>${currentStockInfo.price}$</h4>
            <div class="detail-btn-container">
                <button data-stock=${id} class="delete-btn dialog-btn">Delete</button>
                <button class="close-btn dialog-btn">Close</button>
            </div>
        </div>
    `;
}

export function stockHoldersDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stock_id == id);
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
        holderInfo.className = "holder-info";
        holderInfo.innerHTML = `
            <h3>${holder.name}</h3>
            <p>${holder.email}</p>
            <p>${holder.shareQuantity}</p>
        `;
        detailDialog.querySelector(".detail-card-container").appendChild(holderInfo);
    }
}

export function buyersStockDetails(id) {
    const currentStockInfo = state.stocks.find(stock => stock.stock_id == id);
    const detailDialog = document.getElementById("detail-dialog");

    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Details</h2>
            <h3>Stock Name:</h3>
            <h4>${currentStockInfo.stock_name}</h4>
            <h3>Description:</h3>
            <p>${currentStockInfo.description}</p>
            <h3>Quantity:</h3>
            <h4>${currentStockInfo.shareQuantity}</h4>
            <h3>Price:</h3>
            <h4>${currentStockInfo.price}$</h4>
            <h3>Amount owned:</h3>
            <h4>${currentStockInfo.shareQuantity * currentStockInfo.price}$</h4>
            <div class="detail-btn-container">
                <button class="close-btn dialog-btn">Close</button>
            </div>
        </div>
    `;
}

export function marketStockDetail(id) {
    const currentStockInfo = state.market.find(stock => stock.stock_id == id);
    const detailDialog = document.getElementById("detail-dialog");

    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Details</h2>
            <h3>Stock Name:</h3>
            <h4>${currentStockInfo.stock_name}</h4>
            <h3>Description:</h3>
            <p>${currentStockInfo.description}</p>
            <h3>Quantity in Percent:</h3>
            <h4>${currentStockInfo.quantity_inPer}%</h4>
            <h3>Quantity:</h3>
            <h4>${currentStockInfo.quantity}</h4>
            <h3>Price:</h3>
            <h4>${currentStockInfo.price}$</h4>
            <div class="detail-btn-container">
                <button data-stock=${id} class="buy-btn dialog-btn">Buy</button>
                <button class="close-btn dialog-btn">Close</button>
            </div>
        </div>
    `;
}

export function buyStockForm(id) {
    const currentStockInfo = state.market.find(stock => stock.stock_id == id);
    const detailDialog = document.getElementById("detail-dialog");

    const stockId = Number(currentStockInfo.stock_id);
    console.log(stockId)

    detailDialog.innerHTML = `
            <h1>Purchase Form:</h1>
            <form class="buy-stock-form user-form">
                <label for="stock-id" class="user-dash-label">Stock ID:</label>
                <input type="number" id="stock-id" value="${stockId}" disabled class="user-dash-input">
                <label for="stock-name" class="user-dash-label">Stock Name:</label>
                <input type="text" id="stock-name" value="${currentStockInfo.stock_name}" disabled class="user-dash-input">
                <label for="bought-ammount" class="user-dash-label">Amount To buy:</label>
                <input type="number" id="bought-ammount" required class="user-dash-input">
                <label for="current-price" class="user-dash-label">Total Price</label>
                <input type="number" id="current-price" value="${currentStockInfo.price}" disabled class="user-dash-input">
                <label for="total-price" class="user-dash-label">Total Price</label>
                <input type="number" id="total-price" value="${currentStockInfo.price * getTempValue()}" disabled class="user-dash-input">
                <label for="transaction-no" class="user-dash-label">Payment Transaction NO:</label>
                <input type="text" id="transaction-no" required class="user-dash-input">
                <div class="detail-btn-container">
                    <button type="submit" class="buyer-form-BTN dialog-btn buy-btn">Buy</button>
                    <button class="close-btn dialog-btn">Close</button>
                </div>
            </form>
    `;
}

function getTempValue(){
    let tempValue = "";

    const inputField = document.getElementById("bought-ammount");

    inputField.addEventListener("input", (e)=>{
        tempValue = e.target.value;
    })

    return tempValue;
}