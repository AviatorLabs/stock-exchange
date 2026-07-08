// Corrected spelling errors
export const state = {
    currentUser: {},
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
        }
    ],
    watchList: [],
    buyOrder: [],
    sellOrder: []
}

export function addStock(stock) {
    state.stocks.push(stock);
}