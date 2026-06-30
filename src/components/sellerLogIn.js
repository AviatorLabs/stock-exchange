export default function sellerLogIn(){
    return `
        <h2>Log-In as Seller</h2>
        <form class="logIN-form">
            <label for="logIn-email">Account Email:</label>
            <input type="email" id="logIn-email" name="buyerEmail" required class="seller-form-input">
            <label for="logIn-pass">Password:</label>
            <input type="password" id="logIn-pass" name="buyerpass" required class="buyer-form-input">
            <button  type="submit" class="seller-form-btn">Log-In</button>
        </form>
    `
}