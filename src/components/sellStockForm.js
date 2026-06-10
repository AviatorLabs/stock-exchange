// src/js/components/sellStockForm.js

// import '../style/components/sellStockForm.css'

export default function sellersPublishform() {
    return `
    
    <h3>Publish Form</h3>
        <div class="underline-container">
            <div class="triangle"></div>
            <div class="underline"></div>
            <div class="triangle rightT"></div>
        </div>

    <form class="sellerDash-form">
        <label for="stockName" class="sellerDash-lable">Stock Name:<sup>*</sup></label>
        <input type="text" id="stockName" name="stockName" required class="sellerDash-input">

        <label for="quantity-%" class="sellerDash-lable">Availabel Stock Persentage:<sup>*</sup></label>
        <input type="number" id="quantity-%" name="quantity-%" required class="sellerDash-input">

        <label for="quintity" class="sellerDash-lable">Availabel Share Amount:<sup>*</sup></label>
        <input type="number" id="quintity" name="quintity" required class="sellerDash-input">

        <label for="price" class="sellerDash-lable">Price Per Share:<sup>*</sup></label>
        <input type="number" id="price" name="price" required class="sellerDash-input">

        <label for="description" class="sellerDash-lable">Description:<sup>*</sup></label>
        <textarea id="description" name="description" rows="4" required class="sellerDash-txtArea"></textarea>

        <label for="front" class="sellerDash-lable">Front Image:<sup>*</sup></label>
        <input type="file" id="front" name="front" accept="image/*" required>

        <button type="submit" class="sellerDash-form-BTN">Publish</button>
    </form>
            `;
}