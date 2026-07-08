import Log_In_Bg from '../assets/logIn-bg-img.webp';
import '../style/pages/login.css'
import buyerLogIn from '../components/buyerLogIn';
import sellerLogIn from '../components/sellerLogIn';
import { validateInputs } from '../utils/validators';
import { getLogInInputValue } from '../utils/getInputs';
import { router } from '../router';

const section ={
    "/buyer": buyerLogIn,
    "/seller": sellerLogIn
}

export default {
    render,
    init
}

function init(){

    const continueBtn = document.getElementById("continue-btn");

    continueBtn.addEventListener("click", () => {

        const selected = document.querySelector(
            'input[name="account"]:checked'
        );

        if (!selected) {
            alert("Please select an account.");
            return;
        }

        console.log(selected.value);

        // Example
        navigate(selected.value);
        routeToDash(selected.value)
    });
}

function routeToDash(selected){
    const form = document.querySelector(".login-form");
    
        form.addEventListener("submit", (e) => {
            e.preventDefault();
    
            if (!validateInputs()) {
                return;
            }
    
            getLogInInputValue();
    
            history.pushState(selected, null, "/dashboard");
            router();
        });
}

function navigate(selected){
    const mainSection = document.querySelector(".login-main-sec");

    const component = section[selected];
    if(!component) return;

    mainSection.innerHTML = component();
}

function render(){
    return `
        <div class="login-background">
            <img src="${Log_In_Bg}" alt="Image" class="login-bg-img">
        </div>
        
        <main class="login-main">
            <section class="login-main-sec">
                <h1>Log In</h1>
                <p>Pick the account you want to access for an easy and seamless login experience.</p>

                <div class="login-choice">
                    <label class="login-option seller-option" for="seller-account">
                        <input type="radio" id="seller-account" name="account" value="/seller">
                        <span class="custom-radio"></span>
                        <h2>Seller Account</h2>
                    </label>

                    <label class="login-option buyer-option" for="buyer-account">
                        <input type="radio" id="buyer-account" name="account" value="/buyer">
                        <span class="custom-radio"></span>
                        <h2>Buyer Account</h2>
                    </label>
                </div>
                <button id="continue-btn" class="continue-btn">Continue</button>
            </section> 
        </main>
    `;
}
