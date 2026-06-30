import '../style/pages/sellerSign-up.css'
import bg_image from '../assets/map.svg'

export default {
    render,
    //css: "/src/css/sellerSign-Up.css"
}
function render() {
    console.log("Seller Sign-Up page initialized.");

    // Updated class names to follow kebab-case naming convention, functions to follow camelCase naming Convention and corrected spelling errors
    return `
    <main>
    <section class="seller-background"> ${/* previous: class="sellerBackground" */ ''} 
                <div class="seller-circle top-left"></div> ${/* previous: class="sellerCircle" */ ''} 
                <div class="seller-circle top-right"></div>
                <div class="seller-circle bottom-left"></div>
                <div class="seller-circle bottom-right"></div>
            
                <img src="${bg_image}" alt="Map Image" class="seller-bg-image">
        </section>
        <section class="seller-main-container"> ${/* previous: class="sellerMain-container" */ ''} 
            <h1 class="seller-sign-up-title">Sign Up</h1> ${/* previous: class="sellerSign-up-title" */ ''} 
            <form class="sign-up-form">
                <label for="user-name" class="seller-form-label">Name:</label> ${/* previous: class="seller-form-lable" */ ''} 
                <input type="text" id="user-name" name="sellerName" required class="seller-form-input"> ${/* previous: id="name" */ ''} 
                <label for="email" class="seller-form-label">Email:</label>
                <input type="email" id="email" name="email" required class="seller-form-input">
                <label for="password" class="seller-form-label">Password:</label>
                <input type="password" id="password" name="password" required class="seller-form-input">
                <label for="confirm-password" class="seller-form-label">Confirm Password:</label> 
                <input type="password" id="confirm-password" name="confirmPassword" required class="seller-form-input"> ${/* previous: id="confirmPassword" */ ''} 
                <p class="form-error"></p>
                <button data-link data-href="/dashboard" id="/seller" type="BUTTON" class="seller-form-btn">Sign-Up</button> ${/* previous: class="seller-form-BTN" */ ''} 
            </form>
        </section>
        </main>`;
}