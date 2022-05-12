const images = document.getElementsByClassName('img-place');
const subtextContainer = document.querySelector('.subtext2');
const imageSrc = [
    ["img/sexbomb_review 1.jpg" ,"자스민, 클레리, 일랑일랑 꽃이 가득! 사랑스러운 하루를 보내고 싶으신가요? 사랑스러운 비밀을 알려드릴게요. 욕조에 피어오르는 꽃 한 송이는 사랑을 이루어주고, 로맨틱한 순간을 선사합니다."],
    ["img/intergalactic_use.jpg" ,"싱그러운 페퍼민트와 자몽이 입욕에 상쾌함을!빛나는 별, 환상적인 우주 폭발, 빛의 소용돌이 속에서 안락함을 느껴 보세요.산뜻한 기분을 선사하는 페퍼민트와 샌달우드는 환상적인 입욕 시간을 선물해 줍니다."], 
    ["img/atomheartmother_img.jpg", "새벽부터 해가 떠오르는 시간, 당신의 욕조에서 싱그러운 여름날의 풍경과 향기를 즐기세요. 한 입 베어 물면 터져 나오는 오렌지 과즙 향이 물씬!"]
]

for(let i = 0 ; i < images.length; i++) {
    images[i].src = imageSrc[i][0];
}

for(let i = 0 ; i < images.length; i++) {
    images[i].addEventListener('click', () =>{
        [images[i].src, images[0].src]=[images[0].src, images[i].src]
        subtextContainer.innerText = imageSrc[i][1];
    })
}


const saTriggerMargin = 300;
const saElementList = document.querySelectorAll('.treatment');

const saFunc = function() {
for (const element of saElementList) {
    if (!element.classList.contains('show')) {
    if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
            element.classList.add('show');
            }
        }
    }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);
