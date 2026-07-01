import { validateInputs, validatePass } from "./validators";
import { state, addStock } from "../state/state";
import loading from "../components/loading.js";

// Updated class names to follow kebab-case naming convention and corrected spelling errors
export function getSignInputValue() {
    const name = document.getElementById("user-name").value.trim() // previous: "Name"
    const email = document.getElementById("email").value.trim()
    const pass = document.getElementById("password").value.trim()
    const cPass = document.getElementById("confirm-password").value.trim() // previous: "confirmPassword"

    if (validatePass()) {
        state.currentUser.name = name;
        state.currentUser.email = email;
        state.currentUser.pass = pass;
    }
}

export function getLogInInputValue(){
    const email = document.getElementById("login-email").value.trim() // previous: "logIn-email"
    const pass = document.getElementById("login-pass").value.trim() // previous: "logIn-pass"
}

export function stockSellInput() {

    const sellForm = document.querySelector(".seller-dash-form "); // previous: sellform, ".sellerDash-form"

    sellForm.addEventListener("submit", (e) => {
        if (!validateInputs()) {
            console.log("Please fill in all required fields.");
            return;
        }

        e.preventDefault();

        
        const stockName = document.getElementById("stock-name").value.trim(); // previous: "stockName"
        const quantityPer = document.getElementById("quantity-per").value.trim(); // previous: "quantityPer"
        const quantity = document.getElementById("quantity").value.trim(); // previous: "quintity"
        const price = document.getElementById("price").value.trim();
        const description = document.getElementById("description").value.trim();
        const imgInput = document.getElementById("front");
        const file = imgInput.files[0];

        if (!file) {
            console.log("No file found");
            alert("No file found. Please select an image.");
            return;
        }

        const front = URL.createObjectURL(file);

        const stock = {
            stockName,
            quantityPer,
            quantity,
            price,
            description,
            front
        };

        // Loading state
        const publishBtn = sellForm.querySelector(".seller-dash-form-btn");

        publishBtn.disabled = true;
        publishBtn.textContent = "Publishing...";

        setTimeout(() => {

            addStock(stock);
            //console.log(state.stocks)
            
            publishBtn.disabled = false;
            publishBtn.textContent = "Publish";

            alert("Stock published successfully!");

            sellForm.reset();

        }, 2000);

    });
}
