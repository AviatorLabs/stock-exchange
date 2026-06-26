import img_grid from '../assets/glob-gred.svg'
export default function buyerBg (){
    return `
    ${/* Updated class names to follow kebab-case naming convention and corrected spelling errors */ ''} 
                <div class="buyer-circle circle top-left"></div> ${/* previous: class="buyerCircle" */ ''}
                <div class="buyer-circle circle top-right"></div>
                <div class="buyer-circle circle bottom-left"></div>
                <div class="buyer-circle circle bottom-right"></div>
    
                <img src="${img_grid}" alt="Map Image" class="dash-bg-image"> ${/* previous: class="Dush-bg-image" */ ''}`
}