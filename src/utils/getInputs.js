import { validateInputs, validatePass } from "./validators";
import { state, addStock } from "../state/state";

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
        if (!validateInputs()) {
            console.log("Please fill in all required fields.");
            return;
        }

        e.preventDefault();

        
        const stockName = document.getElementById("stockName").value.trim();
        const quantityPer = document.getElementById("quantityPer").value.trim();
        const quintity = document.getElementById("quintity").value.trim();
        const price = document.getElementById("price").value.trim();
        const description = document.getElementById("description").value.trim();
        const imgInput = document.getElementById("front");
        const file = imgInput.files[0];

        if(!file) {
            console.log("No file found");
            return;
        }

        const front = URL.createObjectURL(file);


        const stock = {
            stockName: stockName,
            quantityPer: quantityPer,
            quintity: quintity,
            price: price,
            description: description,
            front: front
        }

        addStock(stock);
        //console.log(state.stocks)
    })
}