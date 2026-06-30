import '../style/pages/dashboard.css'

export default function loading(message = "Loading...") {
    return `
        <div class="loading-container">
            <div class="spinner"></div>
            <p>${message}</p>
        </div>
    `;
}