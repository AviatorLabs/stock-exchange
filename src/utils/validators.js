// Updated class names to follow kebab-case naming convention
export function validateInputs() {
    const inputs = document.querySelectorAll("input[required]");

    for (const input of inputs) {
        if (!input.checkValidity()) {

            input.reportValidity();
            return false;
        }    
    }
    return true;
}

export function validatePass() {

    const passInput = document.getElementById("password");
    const confirmInput = document.getElementById("confirm-password"); // previous: "confirmPassword"

    if (!passInput || !confirmInput) {
        return true;
    }

    return passInput.value.trim() ===
           confirmInput.value.trim();
}