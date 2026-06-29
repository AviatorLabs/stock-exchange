import { validateInputs, validatePass } from "./validators";
import { state, addStock } from "../state/state";
import loading from "../components/loading.js";

export function getSignInputValue() {
    const name = document.getElementById("Name").value.trim()
    const email = document.getElementById("email").value.trim()
    const pass = document.getElementById("password").value.trim()
    const cPass = document.getElementById("confirmPassword").value.trim()

    if (validatePass()) {
        state.currentUser.name = name;
        state.currentUser.email = email;
        state.currentUser.pass = pass;
    }
}

export function stockSellInput() {

    const sellform = document.querySelector(".sellerDash-form");

    sellform.addEventListener("submit", (e) => {

        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        const stockName = document.getElementById("stockName").value.trim();
        const quantityPer = document.getElementById("quantityPer").value.trim();
        const quintity = document.getElementById("quintity").value.trim();
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

}