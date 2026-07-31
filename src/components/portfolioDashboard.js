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
                    <p class="portfolio-info user-name">${state.currentUser.name}</p>
                    <p class="portfolio-info user-email">${state.currentUser.email}</p>
                    <p class="portfolio-info">${state.currentUser.pass}</p>
                    <p class="portfolio-info">${calcTotalInvestment()}</p>
                </div>
            </section>
            <section class="possession-card portfolio-card">
                <table class="possession-card-table">
                    <thead>
                        <tr>
                            <td>Stock Title</td>
                            <td>Stock Owend</td>
                            <td>Stock Price</td>
                            <td>Total investement</td>
                            <td>Current price</td>
                        </tr>
                    </thead>
                    <tbody class="table-body"></tbody>
                </table>
            </section>
            <section class="suggestion-card portfolio-card">
                <h1>For more stock suggestion after the database</h1>
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
