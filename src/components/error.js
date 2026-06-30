import '../style/pages/dashboard.css'

export default function error(message = "Something went wrong.") {
    return `
        <div class="error-container">
            <h2></h2>
            <p>${message}</p>
        </div>
    `;
}