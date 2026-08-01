import { state } from "../state/state";
import defaultPic from "../assets/defaultPic.png"
import '../style/components/portfolioDash.css';
export default function portfolioDash(){
    return `
        <div class="portfolio-dash-container">
            <section class="account-card portfolio-card">
                <div class="portfolio-img-container">
                    <img class="portfolio-img" src="${defaultPic}" alt="profile picture"/>
                </div>
                <div class="portfolio-info-container">
                    <h3>Name:</h3>
                    <p class="portfolio-info user-name">${state.currentUser.name}</p>
                    <h3>Email:</h3>
                    <p class="portfolio-info user-email">${state.currentUser.email}</p>
                    <h3>Additional Info:</h3>
                    <p class="portfolio-info">${state.currentUser.pass}</p>
                    <h3>Total Investment:</h3>
                    <p class="portfolio-info">${calcTotalInvestment()}</p>
                </div>
            </section>
            <section class="possession-card portfolio-card">
                <table class="possession-card-table">
                    <thead>
                        <tr>
                            <th>Stock Title</th>
                            <th>Stock Owned</th>
                            <th>Stock Price</th>
                            <th>Total Investment</th>
                            <th>Current Price</th>
                        </tr>
                    </thead>
                    <tbody class="table-body"></tbody>
                </table>
            </section>
            <section class="suggestion-card portfolio-card">
                <h3>Market Suggestions: 
                Personalized stock recommendations will appear here once market data is available.</h3>
            </section>
        </div>
    `
}

function calcTotalInvestment(){
    let total = 0;
    for(let stock of state.stocks){
        let amountPerStock = stock.quantity * stock.price;
        total+= amountPerStock;
    }
    return total;
}
