import { state, setCurrentUser, setUserProfilePic, addStock } from "../state/state";

export async function initApp() {

    try {

        const response = await fetch("/api/me.php", {
            credentials: "include"
        });

        const result = await response.json();

        if (result.success) {

            setCurrentUser(result.user);
            setUserProfilePic(result.user.profilePicture);
            initStocks()
            state.isLoggedIn = true;
        }

    } catch(err){

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
