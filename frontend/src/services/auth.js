import { state, setCurrentUser, setUserProfilePic, addStock, addMarket } from "../state/state";
import { getAvailableStock } from "../utils/api.js"
export async function initApp() {

    try {

        const response = await fetch("/api/me.php", {
            credentials: "include"
        });

        const result = await response.json();
        await initAvailableStock()
        if (result.success) {

            await setCurrentUser(result.user);
            await setUserProfilePic(result.user.profilePicture);
            if(result.user.role === "seller"){
                await initStocks()
            }
            state.isLoggedIn = true;
        }

    } catch (err) {

        console.log(err);
    }

}

async function initStocks() {

    const response = await fetch("/api/myStock.php", {
        credentials: "include"
    });

    const result = await response.json();

    if (result.success) {
        addStock(result.stocks);
    }
}

async function initAvailableStock() {
    const result = await getAvailableStock();
    const path = window.location.pathname;
    console.log(path)

    if (result.success && path === "/guest") {
        addMarket(result.stocks);
    }
}
