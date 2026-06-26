// Corrected spelling errors
export const state = {
    currentUser: {},
    stocks: [],
    stockHolders: [],
    watchList: [],
    buyOrder: [],
    sellOrder: []
}

export function addStock(stock) {
    state.stocks.push(stock);
}