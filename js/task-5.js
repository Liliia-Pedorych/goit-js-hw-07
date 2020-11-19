
const inputNameRef = document.querySelector('#name-input');

const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', e => outputNameRef.textContent.trim() = e.target.value);









//=================== не брати до уваги ===================

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