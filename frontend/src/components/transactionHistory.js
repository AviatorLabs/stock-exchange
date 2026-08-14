import { state } from "../state/state.js";
import loading from "./loading.js";
import error from "./error.js";

export default function transactionHistory() {
    if (state.transactionsStatus === "loading") {
        return loading("Loading transaction history...");
    }

    if (state.transactionsStatus === "error") {
        return error(state.transactionsError || "Unable to load transaction history.");
    }

    if (state.transactions.length === 0) {
        return `
            <section class="transaction-history">
                <h2>Transaction History</h2>
                <div class="transaction-empty-state">
                    <h3>No transactions yet.</h3>
                    <p>Your completed trading activity will appear here.</p>
                </div>
            </section>
        `;
    }

    return `
        <section class="transaction-history">
            <h2>Transaction History</h2>
            <div class="transaction-table-wrap">
                <table class="transaction-table">
                    <thead>
                        <tr>
                            <th scope="col">Stock</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Reference No</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.transactions.map(transaction => `
                            <tr>
                                <td>${transaction.stock_name}</td>
                                <td>${formatQuantity(transaction.quantity)}</td>
                                <td>${formatMoney(transaction.price)}</td>
                                <td>${formatMoney(Number(transaction.quantity) * Number(transaction.price))}</td>
                                <td>${transaction.transaction_no}</td>
                                <td>${formatDate(transaction.created_at)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function formatMoney(value) {
    const amount = Number(value);

    if (!Number.isFinite(amount)) return value || "";

    return amount.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
    });
}

function formatQuantity(value) {
    const amount = Number(value);

    if (!Number.isFinite(amount)) return value || "";

    return amount.toLocaleString();
}

function formatDate(value) {
    if (!value) return "";

    const date = new Date(String(value).replace(" ", "T"));

    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}
