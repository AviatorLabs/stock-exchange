import { state, setCurrentUser, setUserProfilePic } from "../state/state";

export async function initApp() {

    try {

        const response = await fetch("/api/me.php",{
            credentials:"include"
        });

        const result = await response.json();

        if(result.success){

            setCurrentUser(result.user);
            setUserProfilePic(result.user.profilePicture);
            state.isLoggedIn = true;
        }

    } catch(err){

        console.log(err);
    }

}
