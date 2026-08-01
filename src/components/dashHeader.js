export default function dashHeader(){
    return `
        <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
            ☰
        </button>
        <h2 class="dash-header-txt">Welcome</h2>
        <div class="header-right">
            <i class="fa-solid fa-user icon"></i>
            <button type="button" id="logout-btn" class="logout-btn">
                Logout
            </button>
        </div>
    `;
}
