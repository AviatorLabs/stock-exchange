// src/js/pages/buyerSign-Up.js

import '../style/pages/buyerSign-up.css'
import bg_image from '../assets/glob-gred.svg'

export default {
    render,
    //css: "/src/css/buyerSign-Up.css"
};

function render() {
    console.log("Buyer Sign-Up page initialized."); 

    return `
    <main>
    <section class="buyerBackground">
                <div class="buyerCircle top-left"></div>
                <div class="buyerCircle top-right"></div>
                <div class="buyerCircle bottom-left"></div>
                <div class="buyerCircle bottom-right"></div>

                <img src="${bg_image}" alt="Map Image" class="buyer-bg-image">
        </section>
        <section class="buyerMain-container">
            <h1 class="buyerSign-up-title">Sign Up</h1>
            <form class="sign-up-form">
                <label for="buyerName" class="buyer-form-lable">Name:</label>
                <input type="text" id="buyerName" name="buyerName" required class="buyer-form-input">
                <label for="email" class="buyer-form-lable">Email:</label>
                <input type="email" id="email" name="email" required class="buyer-form-input">
                <label for="password" class="buyer-form-lable">Password:</label>
                <input type="password" id="password" name="password" required class="buyer-form-input">
                <label for="confirmPassword" class="buyer-form-lable">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required class="buyer-form-input">
                <button data-link data-href="/dashboard" id="/buyer" type="submit" class="buyer-form-BTN">Sign-Up</button>
            </form>
        </section>
        </main>`;
    }