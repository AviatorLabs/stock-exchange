export default function availableStock() {
    return `
    
    <h3>Stocks For Sale</h3>
            <div class="underline-container">
                <div class="triangle"></div>
                <div class="underline"></div>
                <div class="triangle rightT"></div>
            </div>

            ${/* Updated class names to follow kebab-case naming convention and corrected spelling errors */ ''}
    <div class="dash-card-container"> ${/* previous: class="Dash-card-container" */ ''} 
                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (3).png" alt="Stock Image" class="stock-front-img"> ${/* previous: class="Stock-front-img" */ ''}
                    </div>
                    <h3>Stock Name</h3>
                    <p>Available Stock Percentage: 50%</p>
                    <button class="available-stock-details detail-btn">Details</button> ${/* previous: class="availableStockDetails ditailBTN" */ ''}
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (4).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Available Stock Percentage: 50%</p>
                    <button class="available-stock-details detail-btn">Details</button>
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (5).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Available Stock Percentage: 50%</p>
                    <button class="available-stock-details detail-btn">Details</button>
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (5).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Available Stock Percentage: 50%</p>
                    <button class="available-stock-details detail-btn">Details</button>
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (5).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Available Stock Percentage: 50%</p>
                    <button class="available-stock-details detail-btn">Details</button>
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (5).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Available Stock Percentage: 50%</p>
                    <button class="available-stock-details detail-btn">Details</button>
                </div>

                <!-- Add more cards as needed-->
            </div>`;
}