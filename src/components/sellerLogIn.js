export default function sellerLogIn(){
    return `
        <h2>Log-In as Seller</h2>
        <form class="login-form"> ${/* previous: class="logIN-form" */ ''}
            <label for="login-email">Account Email:</label>
            <input type="email" id="login-email" name="buyerEmail" required class="seller-form-input"> ${/* previous: id="logIn-email" */ ''}
            <label for="login-pass">Password:</label>
            <input type="password" id="login-pass" name="buyerpass" required class="buyer-form-input"> ${/* previous: id="logIn-pass" */ ''}
            <button  type="submit" class="seller-form-btn">Log-In</button>
        </form>
    `
}
