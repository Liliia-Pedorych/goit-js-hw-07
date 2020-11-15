// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputNameRef = document.querySelector('#name-input');
console.log(inputNameRef);

const outputNameRef = document.querySelector('#name-output');
console.log(outputNameRef);

inputNameRef.addEventListener('input', e => outputNameRef.textContent = e.target.value);

// inputNameRef.addEventListener('keydown', e => {
//   if (e.code === 'Enter') {
// outputNameRef.textContent = e;
//   }
// });

// inputNameRef.addEventListener('input', e => {
//     if (inputNameRef.textContent === e) {
//         outputNameRef.textContent = e.target.value
//     };
//     outputNameRef.textContent = inputNameRef.textContent;
// });