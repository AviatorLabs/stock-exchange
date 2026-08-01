import "../style/pages/profile.css"
import sellerBg from '../components/sellerBackground.js'
import buyerBg from '../components/buyerBackground.js'
import profile_pic from "../assets/defaultPic.png"
import { state } from "../state/state.js"

export default {
    init,
    render,
    //clear
}

function init() {
    const background = document.querySelector(".profile-background");
    if (history.state === "/seller") {
            background.innerHTML = sellerBg();
        } else if (history.state === "/buyer") {
            background.innerHTML = buyerBg();
        }
    console.log(history.state);
}

function render() {
    return `
        <div class="profile-background"></div>
        <main class="profile-main-container">
            <section class="profile-pic-section">
                <div class="profile-pic-container">
                    <img src="${profile_pic}" alt="Profile Picture" class="profile-pic">
                </div>
                <button class="edit-profile-pic-btn">Edit</button>
            </section>
            <section class="personal-info-section">
                <h2 class="personal-info-header">Personal Information</h2>
                <form class="personal-info-form">
                    <label for="owner-name">Owner/Company Name <sup>*</sup></label>
                    <input class="owner-name" id="owner-name" placeholder="John Doe/example PLC" required>
                    <label for="email">Email</label>
                    <input class="email" id="email" value="${state.currentUser.email}" disabled>
                    <label for="phone">Phone <sup>*</sup></label>
                    <input class="phone" id="phone" placeholder="+251 9xx xxx xxx" required>
                    <label for="nationality">Nationality</label>
                    <input class="nationality" id="nationality" value="Ethiopian" disabled>
                    <label for="address">Address</label>
                    <div id="address" class="address-container">
                        <div class="address-section-card">
                            <label for="region">Region <sup>*</sup></label>
                            <input class="region" id="region" value="Addis Ababa" required>
                        </div>
                        <div class="address-section-card">
                            <label for="city">City <sup>*</sup></label>
                            <input class="city" id="city" value="Addis Ababa" required>
                        </div>
                        <div class="address-section-card">
                            <label for="sub-city">Sub-City <sup>*</sup></label>
                            <input class="sub-city" id="sub-city" value="Bole" required>
                        </div>
                        <div class="address-section-card">
                            <label for="woreda">Woreda <sup>*</sup></label>
                            <input class="woreda" id="woreda" value="Woreda 01" required>
                        </div>
                        <div class="address-section-card">
                            <label for="kebele">Kebele <sup>*</sup></label>
                            <input class="kebele" id="kebele" value="Kebele 01" required>
                        </div>
                    </div>
                    <label for="tin">TIN</label>
                    <input class="tin" id="tin" placeholder="1234567890">
                    <button type="submit" class="update-profile-btn">Update Profile</button>
                </form>
            </section>
        </main>
    `;
}