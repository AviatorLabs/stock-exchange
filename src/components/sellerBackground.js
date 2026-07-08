import img_map from '../assets/map.svg'
export default function sellerBg (){
    return ` 
        <div class="seller-circle circle top-left"></div> 
        <div class="seller-circle circle top-right"></div>
        <div class="seller-circle circle bottom-left"></div>
        <div class="seller-circle circle bottom-right"></div>
                        
        <img src="${img_map}" alt="Map Image" class="dash-bg-image">
    `;
}