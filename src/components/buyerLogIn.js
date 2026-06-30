export default function buyerLogIn(){
    return `
        <h2>Log-In as Buyer</h2>
        <form class="logIN-form">
            <label for="logIn-email">Account Email:</label>
            <input type="email" id="logIn-email" name="buyerEmail" required class="buyer-form-input">
            <label for="logIn-pass">Password:</label>
            <input type="password" id="logIn-pass" name="buyerpass" required class="buyer-form-input">
            <button type="submit" class="buyer-form-btn">Log-In</button>
        </form>
    `
}