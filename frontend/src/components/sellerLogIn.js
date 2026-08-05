export default function sellerLogIn(){
    return `
        <h2>Log In as Seller</h2>
        <form class="login-form">
            <label for="login-email">Account Email:</label>
            <input type="email" id="login-email" name="sellerEmail" required class="seller-form-input">
            <label for="login-pass">Password:</label>
            <input type="password" id="login-pass" name="sellerPass" required class="seller-form-input">
            <button  type="submit" class="seller-form-btn">Log-In</button>
        </form>
    `;
}
