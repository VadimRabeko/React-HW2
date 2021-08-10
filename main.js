'use strict';

// TASK 1

/*
* Напишите функцию, которая принимает массив объектов и строку в качестве аргументов
* Добавьте свойство с ключом "континент" и значением, равным строке, к каждому из объектов
* Возвращает новый массив объектов
* p.s. старайтесь не изменять исходный массив

примеры:

AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia') -->
[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

AddContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe') -->
[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]
*/

const addContinent = (array, string) => {
  const newArray = JSON.parse(JSON.stringify(array));
  newArray.map((item) => {
    item.continent = string;
  });
  return newArray;
};

// TASK 2

/*
 * Напишите функцию, которая принимает массив строк в качестве аргумента
 * Возвращает самую длинную строку

getTheLongestString(['help', 'me']) --> 'help'
getTheLongestString(['I', 'need', 'candy']) --> 'candy'
*/

const getTheLongestString = (array) => {
  let string = '';
  const maxQuantity = array.reduce((previousValue, currentValue) =>
    previousValue.length > currentValue.length
      ? previousValue
      : currentValue.length
  );
  const longest = array.filter((item) => item.length == maxQuantity);
  longest.forEach((item) => {
    string += `, ${item}`;
  });
  const result = string.substring(2);
  return result;
};

// TASK 3

/*
 * Напишите функцию, которая принимает массив из числ, скажем num, в качестве аргументов
 * Суммируйте все элементы массива со значением больше num
 * Верните сумму

sum([1, 2, 3, 4, 5, 6, 7], 2) --> 25
sum([-10, -11, -3, 1, -4], -3) --> 1
sum([78, 99, 100, 101, 401], 99) --> 602
*/

const sum = (array, num) => {
  const newArray = array.filter((item) => item > num);
  const result = newArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return result;
};

module.exports = {
  addContinent,
  getTheLongestString,
  sum,
};
