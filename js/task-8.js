const inputNumber = document.querySelector('#controls > input');
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const boxBlock = document.querySelector('#boxes');

function getColor() {
    return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
};

function createBoxes(amount) {
    for(let i = 0; i < amount; i += 1){
        let box = document.createElement('div');
        box.setAttribute('style', `width: ${30+i*10}px; height:${30+i*10}px; background-color: ${getColor()}`);
        inputNumber.boxBlock.appendChild(box);
    }
};

