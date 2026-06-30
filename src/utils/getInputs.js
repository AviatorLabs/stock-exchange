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

export function stockSellInput() {

    const sellForm = document.querySelector(".sellerDash-form"); // previous: sellForm, ".seller-dash-form"

<<<<<<< HEAD
    sellform.addEventListener("submit", (e) => {

        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        const stockName = document.getElementById("stockName").value.trim();
        const quantityPer = document.getElementById("quantityPer").value.trim();
        const quintity = document.getElementById("quintity").value.trim();
=======
    sellForm.addEventListener("submit", (e) => {
        if (!validateInputs()) {
            console.log("Please fill in all required fields.");
            return;
        }

        e.preventDefault();

        
        const stockName = document.getElementById("stock-name").value.trim(); // previous: "stockName"
        const quantityPer = document.getElementById("quantity-per").value.trim(); // previous: "quantityPer"
        const quantity = document.getElementById("quantity").value.trim(); // previous: "quintity"
>>>>>>> main
        const price = document.getElementById("price").value.trim();
        const description = document.getElementById("description").value.trim();

        const imgInput = document.getElementById("front");
        const file = imgInput.files[0];

        if (!file) {
            alert("Please select an image.");
            return;
        }

        const front = URL.createObjectURL(file);

        const stock = {
<<<<<<< HEAD
            stockName,
            quantityPer,
            quintity,
            price,
            description,
            front
        };

        // Loading state
        const publishBtn = sellform.querySelector(".sellerDash-form-BTN");

        publishBtn.disabled = true;
        publishBtn.textContent = "Publishing...";

        setTimeout(() => {

            addStock(stock);

            publishBtn.disabled = false;
            publishBtn.textContent = "Publish";

            alert("Stock published successfully!");

            sellform.reset();

        }, 2000);

    });
=======
            stockName: stockName,
            quantityPer: quantityPer,
            quantity: quantity, // previous: quintity
            price: price,
            description: description,
            front: front
        }
>>>>>>> main

}