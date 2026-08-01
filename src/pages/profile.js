import "../style/pages/profile.css"
import sellerBg from '../components/sellerBackground.js'
import buyerBg from '../components/buyerBackground.js'
import profile_pic from "../assets/defaultPic.png"
import { state } from "../state/state.js"
import { validateInputs, validatePass } from "../utils/validators.js";
import { getProfileInputs } from "../utils/getInputs.js"
import { logout } from "../state/state.js";

export default {
    init,
    render,
    //clear
}

function init() {
    const background = document.querySelector(".profile-background");
    const editProfilePicBtn = document.querySelector(".edit-profile-pic-btn");
    const profileUploadInput = document.getElementById("profile-upload");
    const profilePic = document.querySelector(".profile-pic");
    const profileInfoForm = document.querySelector(".personal-info-form");
    const logoutBtn = document.getElementById("logout-btn");


    if (history.state === "/seller") {
        background.innerHTML = sellerBg();
    } else if (history.state === "/buyer") {
        background.innerHTML = buyerBg();
    }
    console.log(history.state);
    editProfilePicBtn.addEventListener("click", (e) => {
        e.preventDefault();
        profileUploadInput.click();
    });

    profileUploadInput.addEventListener("change", () => {

        const file = profileUploadInput.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function () {

            state.currentUser.profilePicture = reader.result;
            profilePic.src = state.currentUser.profilePicture;
        };

        reader.readAsDataURL(file);
    });

    profileInfoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!validateInputs()) {
            console.log("Please fill in all required fields.");
            return;
        }
        getProfileInputs();
    });

    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();

        logout();
        window.location.replace("/");
    });
}

function render() {
    return `
        <div class="profile-background"></div>
        <main class="profile-main-container">
            <section class="profile-pic-section">
                <div class="profile-pic-container">
                    <img src="${state.currentUser.profilePicture || profile_pic}" alt="Profile Picture" class="profile-pic">
                </div>
                <button class="edit-profile-pic-btn">Edit</button>
                <input type="file" id="profile-upload" accept="image/*" hidden>
            </section>
            <section class="personal-info-section">
                <h2 class="personal-info-header">Personal Information</h2>
                <form class="personal-info-form">
                    <label for="owner-name">Owner/Company Name <sup>*</sup></label>
                    <input class="owner-name" id="owner-name" placeholder="John Doe/example PLC" value="${state.currentUser.ownerName || ""}" required>
                    <label for="email">Email</label>
                    <input class="email" id="email" value="${state.currentUser.email}" disabled>
                    <label for="phone">Phone <sup>*</sup></label>
                    <input class="phone" id="phone" placeholder="+251 9xx xxx xxx" value="${state.currentUser.phone || ""}" required>
                    <label for="nationality">Nationality</label>
                    <input class="nationality" id="nationality" value="Ethiopian" disabled>
                    <label for="address">Address</label>
                    <div id="address" class="address-container">
                        <div class="address-section-card">
                            <label for="region">Region <sup>*</sup></label>
                            <input class="region" id="region" value="${state.currentUser.address?.region || "Addis Ababa"}" required>
                        </div>
                        <div class="address-section-card">
                            <label for="city">City <sup>*</sup></label>
                            <input class="city" id="city" value="${state.currentUser.address?.city || "Addis Ababa"}" required>
                        </div>
                        <div class="address-section-card">
                            <label for="subcity">Sub-City <sup>*</sup></label>
                            <input class="sub-city" id="subcity" value="${state.currentUser.address?.subcity || "Bole"}" required>
                        </div>
                        <div class="address-section-card">
                            <label for="woreda">Woreda <sup>*</sup></label>
                            <input class="woreda" id="woreda" value="${state.currentUser.address?.woreda || "Woreda 01"}" required>
                        </div>
                        <div class="address-section-card">
                            <label for="kebele">Kebele <sup>*</sup></label>
                            <input class="kebele" id="kebele" value="${state.currentUser.address?.kebele || "Kebele 01"}" required>
                        </div>
                    </div>
                    <label for="tin">TIN</label>
                    <input class="tin" id="tin" placeholder="1234567890">
                    <button type="submit" class="update-profile-btn">Update Profile</button>
                    <button type="button" id="logout-btn" class="logout-btn">Logout</button>
                </form>
            </section>
        </main>
    `;
}
