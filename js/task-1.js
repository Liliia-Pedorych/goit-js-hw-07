// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и 

// количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categories = document.querySelectorAll(".item");
const countCategories = (array)=>(`В списке ${array.length} категории.`)
console.log(countCategories(categories));

// const categoriesTitle = document.querySelectorAll('h2');
// categoriesTitle.forEach(item => console.log(`Категория: ${item.textContent}`));

// const categoriesList = categories.forEach(item => console.log("Количество элементов:" + item.querySelectorAll('li').length));

categories.forEach(item => console.log(`Категория: ${item.firstElementChild.textContent} \nКоличество элементов: ${item.querySelectorAll('li').length}`));








// const result = categories.forEach(item => console.log("Категория:" + item.querySelectorAll('h2').textContent + "Количество элементов:" + item.querySelectorAll('li').length));

// const categoriesList = document.querySelectorAll('li ~ li');
// const countCategoriesList = (array)=>(`Количество элементов: ${array.length}`)
// console.log(countCategoriesList(categoriesList));


// const title = categoriesTitle.forEach(item => console.log(`Категория: ${item.textContent}`));
// categories.forEach(item=> console.log("Количество элементов:" + item.querySelectorAll("li").lenght))


// categoriesTitle.querySelectorAll('li');
// const categoriesList = (array) => array.map(element => element.child);
// console.log(categoriesList([...categories]));

// const categoriesList = document.querySelectorAll('.item ~ li');
// console.log(categoriesList);


// const title = (categories) => categories.querySelector('h2');

// console.log(title);

// const result = categories.forEach(item => console.log(`Категория: ${item.textContent}`));