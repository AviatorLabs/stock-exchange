export default function buyerLogIn(){
    return `
        <h2>Log-In as Buyer</h2>
        <form class="login-form"> 
            <label for="login-email">Account Email:</label>
            <input type="email" id="login-email" name="buyerEmail" required class="buyer-form-input"> 
            <label for="login-pass">Password:</label>
            <input type="password" id="login-pass" name="buyerPass" required class="buyer-form-input"> 
            <button type="submit" class="buyer-form-btn">Log-In</button>
        </form>
    `;
}
