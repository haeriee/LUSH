const images = [document.querySelector('.big-img'), document.querySelector('.small-img'), document.querySelector('.small-img2')];
const imageSrc = ["./img/sexbomb_review 1.jpg", "./img/intergalactic_use.jpg", "./img/atomheartmother_img.jpg"]

for(let i = 0 ; i < images.length; i++) {
    images[i].src = imageSrc[i];
}

