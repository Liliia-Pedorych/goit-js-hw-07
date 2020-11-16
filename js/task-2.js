const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ul = document.querySelector('#ingredients');

const createIngredientItem = ingredient => {
  const itemListRef = document.createElement('li');
  itemListRef.textContent = ingredient;

  return itemListRef;
}

const createIngredientsList = ingredients.map(ingredient => createIngredientItem(ingredient));

ul.append(...createIngredientsList);










//=================== альтернативний варіант 1===================

// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// const li4 = document.createElement('li');
// const li5 = document.createElement('li');
// const li6 = document.createElement('li');


// li1.textContent = 'Картошка';
// li2.textContent = 'Грибы';
// li3.textContent = 'Чеснок';
// li4.textContent = 'Помидоры';
// li5.textContent = 'Зелень';
// li6.textContent = 'Приправы';

// ul.append(li1, li2, li3, li4, li5, li6);

// console.log(ul);


//=================== альтернативний варіант 2===================

// li1.innerHTML = 'Картошка';
// li2.innerHTML = 'Грибы';
// li3.innerHTML = 'Чеснок';
// li4.innerHTML = 'Помидоры';
// li5.innerHTML = 'Зелень';
// li6.innerHTML = 'Приправы';

// const list = [li1, li2, li3, li4, li5, li6];

// ul.append(...list);
