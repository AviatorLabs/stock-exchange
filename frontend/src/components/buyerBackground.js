import img_grid from '../assets/glob-gred.svg'
import '../style/components/buyerBackground.css'
export default function buyerBg (){
    return ` 
        <div class="buyer-circle top-left"></div> 
        <div class="buyer-circle top-right"></div>
        <div class="buyer-circle bottom-left"></div>
        <div class="buyer-circle bottom-right"></div>
    
        <img src="${img_grid}" alt="Map Image" class="buyer-bg-image"> 
    `;
}
