//state.js
import { API_BASE_URL } from "../config/config.js";
export const state = {
    currentUser: {},
    isLoggedIn : false,
    stocks: [],
    market: [],
    watchlist: [],
    buyOrder: [],
    sellOrder: []
}

export function addStock(stocks) {
    state.stocks = stocks;
}

export function addMarket(stocks){
    state.market = stocks;
}

export function setCurrentUser(user) {
    state.currentUser = user;
}

export function setUserAddress(address) {
    state.currentUser.address = address;
}

export function setUserProfilePic(profilePicture) {
    state.currentUser.profilePicture = `${API_BASE_URL}${profilePicture}`;
}

export function logout() {
    state.currentUser = {};
    state.isLoggedIn = false;
}