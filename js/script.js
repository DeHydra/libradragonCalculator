console.log('Hello Gulp!');;
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});
;

const dragonCells = document.querySelector('.grid'),
      calculate = document.querySelector('.grid__button'),
      modalContainer = document.querySelector('.modal-container'),
      buttonGold = document.querySelector('.button-gold'),
      gold = document.querySelector('.gold'),
      cost = document.querySelector('.cost'),
      costText = document.querySelector('.cost-text');

let dragonCount = [[0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0]];
let dragons = 0;

modalContainer.style.display = 'none';

dragonCells.addEventListener('click', (event)=>{
    const target = event.target;
    if(!target.classList.contains('grid__button') && target.classList.contains('grid__item')){
        if(target.textContent === '0'){
            target.textContent = '1';
        } else{
            target.textContent = '0';
        }
    }    
});

calculate.addEventListener('click', () => {
    let counter = 0;
    dragons = 1024;
    for(let i = 0; i < dragonCount.length; i++){
        for(let j = 0; j < dragonCount[i].length; j++){
            dragonCount[i][j] = Number.parseInt(dragonCells.children[counter].textContent);
            counter++;
        }
    }

    counter = 0;

    for(let i = 0; i < dragonCount.length; i++){
        for(let j = 0; j < dragonCount[i].length; j++){
            dragons = dragons - dragonCount[j][i] * Math.pow(2, 9-counter);
            counter++;
        }
    }

    console.log(dragons);
    modalContainer.style.display = '';
})

buttonGold.addEventListener('click', () => {
    let neededGold = Number.parseInt(gold.value) - Number.parseInt(cost.value) * dragons;
    if(neededGold < 0){
        costText.textContent = 'You need another ' + neededGold*-1 + ' gold';
    } else {
        costText.textContent = 'You have enough gold';
    }
});

modalContainer.addEventListener('click', (event) => {
    const target = event.target;
    if(!target.classList.contains('modal-container__item'))
        modalContainer.style.display = 'none';
});




