import '../style/components/navbar.css'

export default function navbar() {
    return `
        <header class="home-header">
            <div class="logo">Stock Exchange Market</div>
            <nav class="navigation">
                <ul class="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#create-account">Create Account</a></li>
                </ul>
                <button class="nav-login-btn nav-btn">Log In</button>
            </nav>
        </header>
    `;
}