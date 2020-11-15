// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


let value = 0;

function decremenet() {
  value -= 1;

  render();
}

function incremenet() {
  value += 1;

  render();
}

function render() {
  ref.htmlValue.textContent = value;
}


// const buttonIncrement = document.querySelector('button[data-action="decrement"]');
// const buttonDecrement = document.querySelector('button[data-action="increment"]');


// const htmlValue = document.querySelector('#value');

const ref = {
  buttonDecrement: document.querySelector('button[data-action="decrement"'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  htmlValue: document.querySelector('#value'),
};

ref.buttonDecrement.addEventListener('click', decremenet);
ref.buttonIncrement.addEventListener('click', incremenet);
