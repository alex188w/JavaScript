"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

// массив products переименован в products1 т.к. в файле 3.js уже присутствует const products[]
console.log("Задание 4");
const products1 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const productsPhotos = products1.filter(
  (product) => "photos" in product && product.photos.length !== 0
);
console.log(productsPhotos);

const productsSort = products1.sort(
  (product1, product2) => product1.price - product2.price
);
console.log(productsSort);
