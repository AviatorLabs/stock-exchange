import "../style/pages/profile.css"
import sellerBg from '../components/sellerBackground.js'
import buyerBg from '../components/buyerBackground.js'

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
            <h1>Profile Page</h1>
            <p>This is the profile page.</p>
        </main>
    `;
}