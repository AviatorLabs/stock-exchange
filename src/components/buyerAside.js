export default function buyerAside(){
    return `<div class="dash-logo-container">
            <h1 class="dash-logo">Buyer Dashboard</h1>
        </div>

        ${/* Updated class names to follow kebab-case naming convention */ ''} 
        <button session data-section="new-stock" class="dash-btn">New Stock</button> ${/* previous: class="dashBTN" */ ''}
        <button session data-section="my-stocks" class="dash-btn">My Stocks</button>
        <button session data-section="portfolio" class="dash-btn">Portfolio</button>`
}