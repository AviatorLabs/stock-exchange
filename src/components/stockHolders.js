export default function stockHolders() {
    return `
    <h3>Number of Stock Holders</h3>
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
                    <p>Total Number of Stock Holders: 50%</p>
                    <button class="no-of-holders-details detail-btn">Details</button> ${/* previous: class="noOfHoldersDetails ditailBTN" */ ''} 
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (4).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Total Number of Stock Holders: 50%</p>
                    <button class="no-of-holders-details detail-btn">Details</button>
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (5).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Total Number of Stock Holders: 50%</p>
                    <button class="no-of-holders-details detail-btn">Details</button>
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (5).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Total Number of Stock Holders: 50%</p>
                    <button class="no-of-holders-details detail-btn">Details</button>
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (5).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Total Number of Stock Holders: 50%</p>
                    <button class="no-of-holders-details detail-btn">Details</button>
                </div>

                <div class="card">
                    <div class="img-container">
                        <img src="/images/background-removed (5).png" alt="Stock Image" class="stock-front-img">
                    </div>
                    <h3>Stock Name</h3>
                    <p>Total Number of Stock Holders: 50%</p>
                    <button class="no-of-holders-details detail-btn">Details</button>
                </div>

                <!-- Add more cards as needed-->
            </div>`;
}