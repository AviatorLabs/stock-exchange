import '../style/pages/buyerSignUp.css'
import bg_image from '../assets/glob-gred.svg'
import { getSignInputValue } from '../utils/getInputs';
import { router } from '../router';
import { validateInputs, validatePass } from '../utils/validators';
import loading from '../components/loading';

export default {
    render,
    init
};

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

        const container = document.querySelector(".buyer-main-container");
        container.innerHTML = loading("Creating Buyer Account...");

        setTimeout(() => {

            container.innerHTML = loading("Account created ✅");

            setTimeout(() => {

                history.pushState("/buyer", null, "/dashboard");
                router();

            }, 1000);

        }, 2000);

    });

}
function render() {
    console.log("Buyer Sign-Up page initialized.");

    return `
        <main> 
            <section class="buyer-background"> 
                <div class="buyer-circle top-left"></div> 
                <div class="buyer-circle top-right"></div>
                <div class="buyer-circle bottom-left"></div>
                <div class="buyer-circle bottom-right"></div>

                <img src="${bg_image}" alt="Map Image" class="buyer-bg-image">
            </section>

            <section class="buyer-main-container">
                <h1 class="buyer-sign-up-title">Sign Up</h1>
                <form class="sign-up-form">
                    <label for="user-name" class="buyer-form-label">Name:</label>
                    <input type="text" id="user-name" name="buyerName" required class="buyer-form-input">
                    <label for="email" class="buyer-form-label">Email:</label>
                    <input type="email" id="email" name="email" required class="buyer-form-input">
                    <label for="password" class="buyer-form-label">Password:</label>
                    <input type="password" id="password" name="password" required class="buyer-form-input">
                    <label for="confirm-password" class="buyer-form-label">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirmPassword" required class="buyer-form-input">
                    <p class="form-error"></p>
                    <button type="submit" class="buyer-form-btn">Sign-Up</button> 
                </form>
            </section>

        </main>
    `;
}
