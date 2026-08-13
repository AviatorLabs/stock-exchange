import { validateInputs, validatePass } from "./validators.js";
import { state, addStock } from "../state/state.js";
import loading from "../components/loading.js";

export async function signUpUser(type) {
    const name = document.getElementById("user-name").value.trim()
    const email = document.getElementById("email").value.trim()
    const role = type;
    const pass = document.getElementById("password").value.trim()
    const cPass = document.getElementById("confirm-password").value.trim()

    // if (validatePass()) {
    //     state.currentUser.name = name;
    //     state.currentUser.email = email;
    //     state.currentUser.pass = pass;
    //     state.isLoggedIn = true;
    // }

    const user = {
        name,
        email,
        role,
        password: pass
    };

    const response = await fetch(
        "/api/signUp.php",
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to register user");
    }

    return await response.json();
}

export async function getLogInInputValue(role) {
    const email = document.getElementById("login-email").value.trim()
    const pass = document.getElementById("login-pass").value.trim()
    // state.currentUser = { email, pass };
    // state.isLoggedIn = true;

    const user = {
        email,
        password: pass,
        role
    };

    const response = await fetch(
        "/api/login.php",
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to log in");
    }

    return await response.json();
}

export async function setStockInput() {

    const stockName = document.getElementById("stock-name").value.trim();
    const quantityPer = document.getElementById("quantity-per").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value.trim();
    const imgInput = document.getElementById("front");
    const file = imgInput.files[0];

    if (!file) {
        console.log("No file found");
        alert("No file found. Please select an image.");
        return;
    }

    const formData = new FormData();
    formData.append("stockImage", file);
    formData.append("stockName", stockName);
    formData.append("quantityPer", quantityPer);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("description", description);

    const response = await fetch(
        "/api/uploadStock.php",
        {
            method: "POST",
            credentials: "include",
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("Failed to upload Stock");
    }

    return await response.json();
}

export async function getProfileInputs() {

    const ownerName = document.getElementById("owner-name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const nationality = document.getElementById("nationality").value.trim();
    const region = document.getElementById("region").value.trim();
    const city = document.getElementById("city").value.trim();
    const subcity = document.getElementById("subcity").value.trim();
    const woreda = document.getElementById("woreda").value.trim();
    const kebele = document.getElementById("kebele").value.trim();

    // state.currentUser.ownerName = ownerName;
    // state.currentUser.phone = phone;
    // state.currentUser.nationality = nationality;
    const address = {
        phone,
        region,
        city,
        subcity,
        woreda,
        kebele
    };

    console.log(address);
    const response = await fetch(
        "/api/profile.php",
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(address)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to register user");
    }

    return await response.json();
}

export async function uploadUserProfilePic(file) {
    const formData = new FormData();

    formData.append("profilePicture", file);
    formData.append("userId", state.currentUser.id);

    const response = await fetch(
        "/api/uploadProfilePicture.php",
        {
            method: "POST",
            credentials: "include",
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("Failed to upload profile picture");
    }

    return await response.json();
}

export async function logoutUser() {
    const response = await fetch(
        "/api/logout.php",
        {
            method: "POST",
            credentials: "include"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to log out");
    }

    return await response.json();
}

export async function deleteStock() {

}

export async function getAvailableStock() {
    const response = await fetch(
        "/api/market.php",
        {
            credentials: "include"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to Fetch Stocks");
    }

    return await response.json();
}

export async function getStockHolders(){
    const response = await fetch(
        "/api/getStockHolders.php",
        {
            credentials: "include"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to Fetch Stock Holders");
    }

    return await response.json();
}

export async function getBuyerHoldings(){
    const response = await fetch(
        "/api/getBuyerHoldings.php",
        {
            credentials: "include"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to Fetch Stock Holders");
    }

    return await response.json();
}

export async function setBuyOrder(stockHolder){

    const response = await fetch(
        "/api/setStockHolder.php",
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(stockHolder)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to register user");
    }

    return await response.json();
}