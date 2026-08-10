export default function sellersPublishForm() { 
    return `
        <h3>Publish Form</h3>
            <div class="underline-container">
                <div class="triangle"></div>
                <div class="underline"></div>
                <div class="triangle rightT"></div>
            </div>

        <form class="seller-dash-form user-form"> 
            <label for="stock-name" class="user-dash-label">Stock Name:<sup>*</sup></label>
            <input type="text" id="stock-name" name="stockName" required class="user-dash-input">

            <label for="quantity-per" class="user-dash-label">Available Stock Percentage:<sup>*</sup></label>
            <input type="number" id="quantity-per" name="quantity-%" required class="user-dash-input">

            <label for="quantity" class="user-dash-label">Available Share Amount:<sup>*</sup></label>
            <input type="number" id="quantity" name="quantity" required class="user-dash-input"> 

            <label for="price" class="user-dash-label">Price Per Share:<sup>*</sup></label>
            <input type="number" id="price" name="price" required class="user-dash-input">

            <label for="description" class="user-dash-label">Description:<sup>*</sup></label>
            <textarea id="description" name="description" rows="4" required class="seller-dash-txt-area"></textarea>

            <label for="front" class="user-dash-label">Front Image:<sup>*</sup></label>
            <input type="file" id="front" name="front" accept="image/*" required>

            <button type="submit" class="seller-dash-form-btn">Publish</button>
        </form>
    `;
}