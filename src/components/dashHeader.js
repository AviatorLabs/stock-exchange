export default function dashHeader(){
    return `
        <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
            ☰
        </button>
        <h2 class="dash-header-txt">Welcome</h2>
        <button id="profile-link" class="profile-link" type="button" aria-label="Profile"><i class="fa-solid fa-user icon"></i></button>
    `;
}
