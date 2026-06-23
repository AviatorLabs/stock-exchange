//state.js
export const state = {
    currentUser: {},
    stocks: [],
    stockHolders: [],
    watchlist: [],
    buyOrder: [],
    sellOrder: []
}

export function addStock(stock) {
    state.stocks.push(stock);
}