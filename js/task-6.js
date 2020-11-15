const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', inputBlurHandler);

function inputBlurHandler(event) {
    if (event.target.value.length < Number(inputRef.dataset.length)) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
}