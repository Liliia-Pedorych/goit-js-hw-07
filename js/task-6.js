
const inputRef = document.querySelector('#validation-input');

const inputRefBlur = inputRef.addEventListener('blur', e => {
    if (e.target.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
}
    else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
}
}
)





//=================== не брати до уваги ===================

// const inputTextLengthRef = document.querySelector('input[data-length]');
// console.log(inputTextLengthRef.dataset.length);

// inputRef.textContent.length === inputTextLengthRef.dataset.length?inputRef.classList.add("valid"):inputRef.classList.add("invalid")


// const inputRefFocus = inputRef.addEventListener('focus', () => inputRef.classList.remove("valid") && inputRef.classList.remove("invalid"));


