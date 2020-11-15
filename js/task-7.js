
const inputRef = document.querySelector('#font-size-control');

const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', e => spanRef.style.fontSize = `${inputRef.valueAsNumber}px`);












//=================== не брати до уваги ===================

// const checkSize = function () {
//   spanRef.style.fontSize = `${inputRef.valueAsNumber}px`;
// };
// inputRef.addEventListener('input', () => checkSize());



// let value = Number(inputRef.value);

// inputRef.addEventListener('input', changeFontSize);

// function changeFontSize(e) {
//     spanRef.style.fontSize = `${Number(value)}px`
// };



