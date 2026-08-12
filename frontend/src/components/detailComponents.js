import { state } from "../state/state.js";

function getStockById(id) {
    return state.market.find(stock => stock.stock_id == id) || state.stocks.find(stock => stock.stock_id == id);
}

function renderNotFound(detailDialog, id) {
    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Stock Not Found</h2>
            <p>No stock found for ID ${id}.</p>
            <div class="detail-btn-container">
                <button class="close-btn dialog-btn">Close</button>
            </div>
        </div>
    `;
}

export function stockSoldDetails(id) {
    const currentStockInfo = getStockById(id);
    const detailDialog = document.getElementById("detail-dialog");

    if (!currentStockInfo) {
        renderNotFound(detailDialog, id);
        return;
    }

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
    const currentStockInfo = getStockById(id);
    const detailDialog = document.getElementById("detail-dialog");

    if (!currentStockInfo) {
        renderNotFound(detailDialog, id);
        return;
    }

    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Stock Holders Details</h2>
            <div class="detail-card-container"></div>
            <div class="detail-btn-container">
                <button class="close-btn dialog-btn">Close</button>
            </div>
        </div>
    `;

    for (const holder of currentStockInfo.stockHolders || []) {
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
    const currentStockInfo = getStockById(id);
    const detailDialog = document.getElementById("detail-dialog");

    if (!currentStockInfo) {
        renderNotFound(detailDialog, id);
        return;
    }

    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Details</h2>
            <h3>Stock Name:</h3>
            <h4>${currentStockInfo.stock_name}</h4>
            <h3>Description:</h3>
            <p>${currentStockInfo.description}</p>
            <h3>Quantity:</h3>
            <h4>${currentStockInfo.shareQuantity ?? 0}</h4>
            <h3>Price:</h3>
            <h4>${currentStockInfo.price ?? 0}$</h4>
            <h3>Amount owned:</h3>
            <h4>${(currentStockInfo.shareQuantity ?? 0) * (currentStockInfo.price ?? 0)}$</h4>
            <div class="detail-btn-container">
                <button class="close-btn dialog-btn">Close</button>
            </div>
        </div>
    `;
}

export function marketStockDetail(id) {
    const currentStockInfo = getStockById(id);
    const detailDialog = document.getElementById("detail-dialog");

    if (!currentStockInfo) {
        renderNotFound(detailDialog, id);
        return;
    }

    detailDialog.innerHTML = `
        <div class="detail-container">
            <h2 class="detail-title">Details</h2>
            <h3>Stock Name:</h3>
            <h4>${currentStockInfo.stock_name}</h4>
            <h3>Description:</h3>
            <p>${currentStockInfo.description}</p>
            <h3>Quantity in Percent:</h3>
            <h4>${currentStockInfo.quantity_inPer ?? 0}%</h4>
            <h3>Quantity:</h3>
            <h4>${currentStockInfo.quantity ?? 0}</h4>
            <h3>Price:</h3>
            <h4>${currentStockInfo.price ?? 0}$</h4>
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
                <label for="available-ammount" class="user-dash-label">Available Amount:</label>
                <input type="number" id="available-ammount" value="${currentStockInfo.quantity}" disabled  class="user-dash-input">
                <label for="bought-ammount" class="user-dash-label">Amount To buy:</label>
                <input type="number" id="bought-ammount" required class="user-dash-input">
                <label for="current-price" class="user-dash-label">Total Price</label>
                <input type="number" id="current-price" value="${currentStockInfo.price}" disabled class="user-dash-input">
                <label for="total-price" class="user-dash-label">Total Price</label>
                <input type="number" id="total-price" value=0 disabled class="user-dash-input">
                <label for="transaction-no" class="user-dash-label">Payment Transaction NO:</label>
                <input type="text" id="transaction-no" required class="user-dash-input">
                <p class="form-error buy-form-error"></p>
                <div class="detail-btn-container">
                    <button type="submit" class="buyer-form-BTN dialog-btn buy-btn">Buy</button>
                    <button class="close-btn dialog-btn">Close</button>
                </div>
            </form>
    `;
    const amountInput = document.getElementById("bought-ammount");
    const totalPriceInput = document.getElementById("total-price");

    amountInput.addEventListener("input", () => {

        const amount = Number(amountInput.value);
        const price = Number(currentStockInfo.price);

        const total = amount * price;

        totalPriceInput.value = total || 0;
    });
}