let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let image3 = document.getElementById('img3');
let card = document.getElementsByClassName('card');
let images = document.getElementsByClassName('card-image');

for (let c = 0; c < card.length; c++) {
    card[c].addEventListener('mouseover',function(){
        if(c == 0){
            image1.style.filter='brightness(0.1)';
        }
        if(c == 1){
            image2.style.filter='brightness(0.1)';
        }
        if(c == 2){
            image3.style.filter='brightness(0.1)';
        }
    })
}
for (let c = 0; c < card.length; c++) {
    card[c].addEventListener('mouseout',function(){
        if(c == 0){
            image1.style.filter='brightness(1)';
        }
        if(c == 1){
            image2.style.filter='brightness(1)';
        }
        if(c == 2){
            image3.style.filter='brightness(1)';
        }
    })
}
for (let c = 0; c < images.length; c++) {
    images[c].addEventListener('mouseover',function(){
        if(c == 0){
            image1.style.filter='brightness(0.1)';
            image1.style.transition = 'filter 1s';
            // image1.style.transitionDuration= '1s';
        }
        if(c == 1){
            image2.style.filter='brightness(0.1)';
            image2.style.transition = 'filter 1s';
        }
        if(c == 2){
            image3.style.filter='brightness(0.1)';
            image3.style.transition = 'filter 1s';
        }
    })
}
for (let c = 0; c < images.length; c++) {
    images[c].addEventListener('mouseout',function(){
        if(c == 0){
            image1.style.filter='brightness(1)';
        }
        if(c == 1){
            image2.style.filter='brightness(1)';
        }
        if(c == 2){
            image3.style.filter='brightness(1)';
        }
    })
}