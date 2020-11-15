
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


const ref = {
  buttonDecrement: document.querySelector('button[data-action="decrement"'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  htmlValue: document.querySelector('#value'),
};

ref.buttonDecrement.addEventListener('click', decremenet);
ref.buttonIncrement.addEventListener('click', incremenet);



