const inputControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputControlRef.addEventListener('input', handleRange);

function handleRange(event) {
    textRef.style.fontSize = `${event.target.value}px`;
}