// validators.js
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