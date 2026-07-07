import img_grid from '../assets/glob-gred.svg'
export default function buyerBg (){
    return ` 
        <div class="buyer-circle circle top-left"></div> 
        <div class="buyer-circle circle top-right"></div>
        <div class="buyer-circle circle bottom-left"></div>
        <div class="buyer-circle circle bottom-right"></div>
    
        <img src="${img_grid}" alt="Map Image" class="dash-bg-image"> 
    `;
}