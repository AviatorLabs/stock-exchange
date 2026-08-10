import { state, addStock, addMarket } from '../state/state.js'
import { getAvailableStock, getStockHolders, getBuyerHoldings } from './api.js'
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

export async function setOwunedStock() {
    const result = await getBuyerHoldings();

    if (result.success) {
        addStock(result.stocks);
    } else {
        alert(result.message);
    }
}