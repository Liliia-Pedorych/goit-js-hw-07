// Напиши скрипт для создания галлереи изображений по массиву данных.

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и 
// insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const createGalleryItem = image => {

    const itemListRef = document.createElement('li');
    itemListRef.classList.add("js-gallery-item");

    const imageRef = document.createElement('img');
    imageRef.src = image.url;
    imageRef.alt = image.alt;
    imageRef.textContent = image.alt;
    imageRef.classList.add("js-gallery-img");

    itemListRef.appendChild(imageRef);

    return itemListRef;
};

const createGallery = images.map(image => createGalleryItem(image));

const galleryListRef = document.querySelector('#gallery');
galleryListRef.append(...createGallery);
    




    // const image =
    // {
    //     url:
    //         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    //     alt: 'White and Black Long Fur Cat',
    // };

    // const galleryRef = document.querySelector('#gallery');

    // const itemListRef = document.createElement('li');

    // const imageRef = document.createElement('img');

    // imageRef.src = image.url;
    // imageRef.alt = image.alt;
    // imageRef.textContent = image.alt;
    // console.log(imageRef);
        
    // itemListRef.appendChild(imageRef);
    // console.log(itemListRef);

    // galleryRef.appendChild(itemListRef);




