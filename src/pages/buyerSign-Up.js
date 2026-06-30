import '../style/pages/buyerSign-up.css'
import bg_image from '../assets/glob-gred.svg'


export default {
    render,
    //css: "/src/css/buyerSign-Up.css"
};

function render() {
    console.log("Buyer Sign-Up page initialized."); 

    return `
    <main>

    ${/* Updated class names and IDs to follow kebab-case naming convention and corrected spelling errors */ ''} 
    <section class="buyer-background"> ${/* previous: class="buyerBackground" */ ''} 
                <div class="buyer-circle top-left"></div> ${/* previous: class="buyerCircle" */ ''} 
                <div class="buyer-circle top-right"></div>
                <div class="buyer-circle bottom-left"></div>
                <div class="buyer-circle bottom-right"></div>

                <img src="${bg_image}" alt="Map Image" class="buyer-bg-image">
        </section>
        <section class="buyer-main-container"> ${/* previous: class="buyerMain-container" */ ''}
            <h1 class="buyer-sign-up-title">Sign Up</h1> ${/* previous: class="buyerSign-up-title" */ ''} 
            <form class="sign-up-form">
                <label for="user-name" class="buyer-form-label">Name:</label> ${/* previous: class="buyer-form-lable" */ ''}
                <input type="text" id="user-name" name="buyerName" required class="buyer-form-input"> ${/* previous: id="Name" */ ''} 
                <label for="email" class="buyer-form-label">Email:</label>
                <input type="email" id="email" name="email" required class="buyer-form-input">
                <label for="password" class="buyer-form-label">Password:</label>
                <input type="password" id="password" name="password" required class="buyer-form-input">
                
                <label for="confirm-password" class="buyer-form-label">Confirm Password:</label> 
                <input type="password" id="confirm-password" name="confirmPassword" required class="buyer-form-input"> ${/* previous: id="confirmPassword" */ ''} 
                <p class="form-error"></p>
                <button data-link data-href="/dashboard" id="/buyer" type="submit" class="buyer-form-btn">Sign-Up</button> ${/* previous: class="buyer-form-BTN" */ ''} 
            </form>
        </section>
        </main>`;
    }
