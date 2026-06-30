export default function sellerAside(){
    return `<div class="dash-logo-container">
            <h1 class="dash-logo">Seller Dashboard</h1>
        </div>

        ${/* Updated class names to follow kebab-case naming convention */ ''} 
        <button session data-section="sold-stocks" class="dash-btn">Number of Stock</button>${/* previous: class="dashBTN" */ ''} 
        <button session data-section="stock-holders" class="dash-btn">Stock Holders</button>
        <button session data-section="sell-stock" class="dash-btn">Sell Stock</button>`
}