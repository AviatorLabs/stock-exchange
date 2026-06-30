import '../style/components/navbar.css'

// Updated class names to follow kebab-case naming convention and functions to use camelCase naming convention
export default function navbar() { // previous: Navbar()

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
             <button class="nav-login-btn nav-btn">Log In</button> ${/* previous: class="nav-logIn-BTN nav-BTN"*/ ''}
        </nav>
    </header>`;
}