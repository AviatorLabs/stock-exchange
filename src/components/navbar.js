import '../style/components/navbar.css'

export default function navbar() {
    return `
        <header class="home-header">
            <div class="logo">Stock Exchange Market</div>
            <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
                ☰
            </button>
            <nav class="navigation">
                <ul class="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#create-account">Create Account</a></li>
                </ul>
                <div class="nav-button-container">
                    <button class="nav-login-btn nav-btn">Log In</button>
                </div>
            </nav>
        </header>
    `;
}

export function initializeNavbar() {
    const header = document.querySelector(".home-header");

    const menuToggle = header.querySelector(".menu-toggle");
    const navigation = header.querySelector(".navigation");
    const navLinks = header.querySelectorAll(".nav-links a");

    if (!menuToggle || !navigation) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (event) => {
        if (
            navigation.classList.contains("active") &&
            !header.contains(event.target)
        ) {
            navigation.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            navigation.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}