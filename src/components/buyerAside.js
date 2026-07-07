export default function buyerAside(){
    return `
        <div class="dash-logo-container">
            <h1 class="dash-logo">Buyer Dashboard</h1>
        </div>

        <button session data-section="new-stock" class="dash-btn">New Stock</button>
        <button session data-section="my-stocks" class="dash-btn">My Stocks</button>
        <button session data-section="portfolio" class="dash-btn">Portfolio</button>
    `;
}