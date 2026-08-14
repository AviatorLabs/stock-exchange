import { addStock, addMarket, setTransactions, setTransactionsStatus, setTransactionsError } from '../state/state.js'
import { getAvailableStock, getStockHolders, getBuyerHoldings, getTransactions } from './api.js'
export async function setAvailableStock() {
    const result = await getAvailableStock();

    if (result.success) {
        addMarket(result.stocks);
    } else {
        alert(result.message);
    }
}

export async function setStock() {
    const result = await getStockHolders();

    if (result.success) {
        addStock(result.stocks);
    } else {
        alert(result.message);
    }

}

export async function setOwnedStock() {
    const result = await getBuyerHoldings();

    if (result.success) {
        addStock(result.stocks);
    } else {
        alert(result.message);
    }
}

export async function setTransactionHistory() {
    setTransactionsStatus("loading");
    setTransactionsError("");

    try {
        const result = await getTransactions();

        if (result.success) {
            setTransactions(result.transactions || []);
            setTransactionsStatus("success");
        } else {
            setTransactions([]);
            setTransactionsStatus("error");
            setTransactionsError(result.message || "Unable to load transaction history.");
        }
    } catch (err) {
        setTransactions([]);
        setTransactionsStatus("error");
        setTransactionsError("Unable to load transaction history.");
    }
}
