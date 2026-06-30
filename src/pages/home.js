import '../style/pages/home.css'
import glob from '../assets/glob.svg'
import img_dec from '../assets/image-decrease.svg'
import img_inc from '../assets/image-increase.svg'
import img_d_data from '../assets/image-dynamic-data.jpg'
import img_n_bull from '../assets/image-neon-bull.jpg'
import img_f_card from '../assets/card-img1.webp'
import img_s_card from '../assets/card-img2.webp'
import img_t_card from '../assets/card-img3.webp'
import img_fr_card from '../assets/card-img4.webp'
import header from '../components/navbar.js'
import { router } from '../router.js'

export default {
    render,
    init
}
function init() {
    const navBtn = document.querySelector(".nav-login-btn");

    navBtn.addEventListener("click", () => {
        history.pushState(null, null, "/main-login");
        router();
    });
}
function render() {
    console.log("Home page initialized.");

    // Updated class names to follow kebab-case naming convention and corrected spelling errors
    return ` 
    ${header()}
     <main>
        <section id="hero">
            <div class="hero-glow"></div>
            <img src="${glob}"alt="Green Globe" class="green-globe">
            <h1 class="hero-header">Stock Exchange Market</h1>
        </section>
        <section id="features">
            <h2 class="section-title">Features</h2>
            <div class="images">
                <img src="${img_dec}" alt="red" class="red">
                <img src="${img_inc}" alt="green" class="green">
            </div>

            <div class="feature-flex">

                <div class="feature-column">

                    <h2>Seller Can</h2>

                    <div class="feature-card">
                        <img src="${img_f_card}" alt="negotiation image" class="feature-card-img" /> ${/* previous: alt="negotation image" */ ''} 
                        <h3 class="feature-card-title">Feature A</h3>
                        <p>Broad space to sell any amount of stock set price Track live price</p>
                    </div>

                    <div class="feature-card">
                        <img src="${img_s_card}" alt="negotiation image" class="feature-card-img" />
                        <h3 class="feature-card-title">Feature B</h3>
                        <p>Create sell order instantly Set custom or market price See full trade history Receive
                            trade notification</p>
                    </div>

                </div>

                <div class="feature-column">

                    <h2>Buyer Can</h2>

                    <div class="feature-card">
                        <img src="${img_t_card}" alt="negotiation image" class="feature-card-img" />
                        <h3 class="feature-card-title">Feature C</h3>
                        <p>Browse available stock place instant buy orders set limit price track investment
                            portfolio</p>
                    </div>

                    <div class="feature-card">
                        <img src="${img_fr_card}" alt="negotiation image" class="feature-card-img" />
                        <h3 class="feature-card-title">Feature D</h3>
                        <p>Analyze market demand Check purchase history Monitor asset performance</p>
                    </div>

                </div>

            </div>
        </section>
        <section id="about">
            <h2 class="section-title">About Us</h2>
            <div class="about-container">
                <article class="main-text">
                    <p>A website where you can Buy And Sell Stocks.</p>
                </article>

                <img src="${img_d_data}" alt="Numbers" class="numbers images-abt" width="50">
                <img src="${img_n_bull}" alt="Balance" class="balance images-abt" width="50">
                <article class="mission">
                    <h1>Our Mission</h1>
                    <p>We are a digital stock exchange platform that connects buyers and sellers in a fast, secure,
                        and
                        transparent trading environment. </p>
                </article>
            </div>
        </section>
        <section id="create-account">
            <h2 class="section-title">Create Account</h2>
            <h3 class="account-header">Feel Free to Explore And Choose Any Account You Want.</h3>
            <button data-link data-href="/stocks" class="browse-btn">Browse as a Guest</button> ${/* previous: class="browseBtn" */ ''}
            <div class="account-bg">
                <div class="background-glow-account-red"></div>
                <div class="background-glow-account-green"></div>
            </div>
            <div class="card-container">
                <article class="card-seller">
                    <h3>Seller</h3>
                    <ul>
                        <li>Broad space to sell any amount of stock</li>
                        <li>Set price</li>
                        <li>Track live price</li>
                    </ul>
                    <a href="/seller-sign-up" data-link>SELL</a>

                </article>
                <article class="card-buyer">
                    <h3>Buyer</h3>
                    <ul>
                        <li>Browse available stock</li>
                        <li>Place instant buy orders</li>
                        <li>Set limit price</li>
                        <li>Track investment portfolio</li>
                    </ul>
                    <a href="/buyer-sign-up" data-link>BUY</a>
                </article>
            </div>
        </section>
        
    </main> `;
}