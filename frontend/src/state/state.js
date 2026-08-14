//state.js
import { API_BASE_URL } from "../config/config.js";
export const state = {
    currentUser: {},
    isLoggedIn : false,
    stocks: [],
    market: [],
    watchlist: [],
    buyOrder: [],
    sellOrder: [],
    transactions: [],
    transactionsStatus: "idle",
    transactionsError: ""
}

export function addStock(stocks) {
    state.stocks = stocks;
}

export function addMarket(stocks){
    state.market = stocks;
}

export function setTransactions(transactions) {
    state.transactions = transactions;
}

export function setTransactionsStatus(status) {
    state.transactionsStatus = status;
}

export function setTransactionsError(message) {
    state.transactionsError = message;
}

export function searchMarketStocks(searchTerm) {
    const normalizedSearchTerm = String(searchTerm || "").trim().toLowerCase();

    if (!normalizedSearchTerm) {
        return state.market;
    }

    return state.market.filter(stock =>
        (stock.stock_name || "").toLowerCase().includes(normalizedSearchTerm)
    );
}

export function setCurrentUser(user) {
    state.currentUser = user;
}

export function setUserAddress(address) {
    state.currentUser.address = address;
}

export function setUserProfilePic(profilePicture) {
    if (typeof profilePicture === "string") {
        if (profilePicture.startsWith('/uploads')) {
            state.currentUser.profilePicture = profilePicture;
        } else {
            state.currentUser.profilePicture = `${API_BASE_URL}${profilePicture}`;
        }
    } else {
        state.currentUser.profilePicture = "/src/assets/defaultPic.png";
    }
}

export function logout() {
    state.currentUser = {};
    state.isLoggedIn = false;
    state.transactions = [];
    state.transactionsStatus = "idle";
    state.transactionsError = "";
}
