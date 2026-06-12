
import img_map from '../assets/map.svg'
export default function sellerBg (){
    return `
            <div class="sellerCircle circle top-left"></div>
            <div class="sellerCircle circle top-right"></div>
            <div class="sellerCircle circle bottom-left"></div>
            <div class="sellerCircle circle bottom-right"></div>
                        
            <img src="${img_map}" alt="Map Image" class="Dush-bg-image">`
}