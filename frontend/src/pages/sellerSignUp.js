import '../style/pages/sellerSignUp.css'
import bg_image from '../assets/map.svg'
import { getSignInputValue } from '../utils/getInputs';
import { router } from '../router';
import { validateInputs, validatePass } from '../utils/validators';
import loading from '../components/loading';

export default {
    render,
    init
    //css: "/src/css/sellerSign-Up.css"
}

function init() {
    const form = document.querySelector(".sign-up-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        const errorText = document.querySelector(".form-error");

        if (!validatePass()) {

            if(errorText){
                errorText.textContent = "Password mismatch! Please check your spelling and try again";
            }

            return;
        }

        if(errorText){
            errorText.textContent = "";
        }

        getSignInputValue();

        const container = document.querySelector(".seller-main-container");
        container.innerHTML = loading("Creating Seller Account...");

        setTimeout(() => {

            container.innerHTML = loading("Account created ✅");

            setTimeout(() => {

                history.pushState("/seller", null, "/dashboard");

                router();

            }, 1000);

        }, 2000);

    });
}

function render() {
    console.log("Seller Sign-Up page initialized.");

    return `
        <main>
            <section class="seller-background">
                <div class="seller-circle top-left"></div>
                <div class="seller-circle top-right"></div>
                <div class="seller-circle bottom-left"></div>
                <div class="seller-circle bottom-right"></div>
            
                <img src="${bg_image}" alt="Map Image" class="seller-bg-image">
            </section>

            <section class="seller-main-container">
                <h1 class="seller-sign-up-title">Sign Up</h1>
                <form class="sign-up-form">
                    <label for="user-name" class="seller-form-label">Name:</label>
                    <input type="text" id="user-name" name="sellerName" required class="seller-form-input">
                    <label for="email" class="seller-form-label">Email:</label>
                    <input type="email" id="email" name="email" required class="seller-form-input">
                    <label for="password" class="seller-form-label">Password:</label>
                    <input type="password" id="password" name="password" required class="seller-form-input">
                    <label for="confirm-password" class="seller-form-label">Confirm Password:</label> 
                    <input type="password" id="confirm-password" name="confirmPassword" required class="seller-form-input">
                    <p class="form-error"></p>
                    <button type="submit" class="seller-form-btn">Sign-Up</button>
                </form>
            </section>
        </main>
    `;
}
