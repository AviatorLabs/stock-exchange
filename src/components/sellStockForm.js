/* 
    Updated class names and IDs to follow kebab-case naming convention, 
    functions to follow camelCase naming Convention 
    and corrected spelling errors
*/
export default function sellersPublishForm() { // previous: sellersPublishform()
    return `
    
    <h3>Publish Form</h3>
        <div class="underline-container">
            <div class="triangle"></div>
            <div class="underline"></div>
            <div class="triangle rightT"></div>
        </div>

    <form class="seller-dash-form"> ${/* previous: class="sellerDash-form" */ ''} 
        <label for="stock-name" class="seller-dash-label">Stock Name:<sup>*</sup></label> ${/* previous: class="sellerDash-lable" */ ''} 
        <input type="text" id="stock-name" name="stockName" required class="seller-dash-input"> ${/* previous: id="stockName" class="sellerDash-input" */ ''} 

        <label for="quantity-per" class="seller-dash-label">Available Stock Percentage:<sup>*</sup></label> 
        <input type="number" id="quantity-per" name="quantity-%" required class="seller-dash-input"> ${/* previous: id="quantityPer" */ ''} 

        <label for="quantity" class="seller-dash-label">Available Share Amount:<sup>*</sup></label>
        <input type="number" id="quantity" name="quantity" required class="seller-dash-input"> ${/* previous: id="quintity" name="quintity" */ ''} 

        <label for="price" class="seller-dash-label">Price Per Share:<sup>*</sup></label>
        <input type="number" id="price" name="price" required class="seller-dash-input">

        <label for="description" class="seller-dash-label">Description:<sup>*</sup></label>
        <textarea id="description" name="description" rows="4" required class="seller-dash-txt-area"></textarea> ${/* previous: class="sellerDash-txtArea" */ ''} 

        <label for="front" class="seller-dash-label">Front Image:<sup>*</sup></label>
        <input type="file" id="front" name="front" accept="image/*" required>

        <button type="submit" class="seller-dash-form-btn">Publish</button> ${/* previous: class="sellerDash-form-BTN" */ ''} 
    </form>
            `;
}