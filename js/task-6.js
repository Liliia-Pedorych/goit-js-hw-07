// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
console.log(inputRef.textContent.length);
console.log(Number(inputRef.dataset.length));

// const inputTextLengthRef = document.querySelector('input[data-length]');
// console.log(inputTextLengthRef.dataset.length);

// inputRef.textContent.length === inputTextLengthRef.dataset.length?inputRef.classList.add("valid"):inputRef.classList.add("invalid")

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
// const inputRefFocus = inputRef.addEventListener('focus', () => inputRef.classList.remove("valid") && inputRef.classList.remove("invalid"));


