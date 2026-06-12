
import img_grid from '../assets/glob-gred.svg'
export default function buyerBg (){
    return `
                <div class="buyerCircle circle top-left"></div>
                <div class="buyerCircle circle top-right"></div>
                <div class="buyerCircle circle bottom-left"></div>
                <div class="buyerCircle circle bottom-right"></div>
    
                <img src="${img_grid}" alt="Map Image" class="Dush-bg-image">`
}