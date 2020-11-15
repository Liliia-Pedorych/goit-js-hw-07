// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}


const inputRef = document.querySelector('#font-size-control');
console.log(Number(inputRef.value));

const spanRef = document.querySelector('#text');


inputRef.addEventListener('input', e => spanRef.style.fontSize = `${inputRef.valueAsNumber}px`);








// const checkSize = function () {
//   spanRef.style.fontSize = `${inputRef.valueAsNumber}px`;
// };
// inputRef.addEventListener('input', () => checkSize());



// let value = Number(inputRef.value);

// inputRef.addEventListener('input', changeFontSize);

// function changeFontSize(e) {
//     spanRef.style.fontSize = `${Number(value)}px`
// };



