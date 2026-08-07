//state.js
import { API_BASE_URL } from "../config/config.js";
export const state = {
    currentUser: {},
    isLoggedIn : false,
    stocks: [
        {
            stockName: "tell",
            quantityPer: 123,
            quantity: 123,
            price: 1000,
            description: "nfghrsxth",
            front: "",
            stockHolders: [
                {
                    name: "John Doe",
                    email: "john.doe@example.com",
                    shareQuantity: 50
                },
                {
                    name: "Jane Smith",
                    email: "jane.smith@example.com",
                    shareQuantity: 75
                }
            ]
        },
        {
            stockName: "dashen",
            quantityPer: 234,
            quantity: 321,
            price: 200,
            description: "nfghrsxth",
            front: "",
            stockHolders: [
                {
                    name: "John Doe",
                    email: "john.doe@example.com",
                    shareQuantity: 50
                },
                {
                    name: "Jane Smith",
                    email: "jane.smith@example.com",
                    shareQuantity: 75
                }
            ]
        }
    ],
    marcket: [],
    watchlist: [],
    buyOrder: [],
    sellOrder: []
}

export function addStock(stocks) {
    state.stocks = stocks;
}

export function addMarcket(stocks){
    state.marcket = stocks;
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