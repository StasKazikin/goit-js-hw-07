let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

const render = () => { counter.textContent = counterValue };
const decrement = () => { counterValue -= 1; render() };
const increment = () => { counterValue += 1; render() };
 

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);
