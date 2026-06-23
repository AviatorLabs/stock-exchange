// src/js/pages/sellerSign-Up.js

import '../style/pages/sellerSign-up.css'
import bg_image from '../assets/map.svg'

export default {
    render,
    //css: "/src/css/sellerSign-Up.css"
}
function render() {
    console.log("Seller Sign-Up page initialized.");

    return `
    <main>
    <section class="sellerBackground">
                <div class="sellerCircle top-left"></div>
                <div class="sellerCircle top-right"></div>
                <div class="sellerCircle bottom-left"></div>
                <div class="sellerCircle bottom-right"></div>
            
                <img src="${bg_image}" alt="Map Image" class="seller-bg-image">
        </section>
        <section class="sellerMain-container">
            <h1 class="sellerSign-up-title">Sign Up</h1>
            <form class="sign-up-form">
                <label for="Name" class="seller-form-lable">Name:</label>
                <input type="text" id="Name" name="sellerName" required class="seller-form-input">
                <label for="email" class="seller-form-lable">Email:</label>
                <input type="email" id="email" name="email" required class="seller-form-input">
                <label for="password" class="seller-form-lable">Password:</label>
                <input type="password" id="password" name="password" required class="seller-form-input">
                <label for="confirmPassword" class="seller-form-lable">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required class="seller-form-input">
                <button data-link data-href="/dashboard" id="/seller" type="submit" class="seller-form-BTN">Sign-Up</button>
            </form>
        </section>
        </main>`;
}