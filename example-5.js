const myArray = [
    'Paul', // 0
    'Tommy', // 1
    'Sean', // 2
    'Danny',
    'Sean'
];


/**
* indexOf(foo) индекс первого вхождения foo, если нет -1
*/
console.log(myArray.indexOf('Sean')); // => 2
console.log(myArray.indexOf('Jack')); // => -1 (Значит его там нет)

/**
* indexOf(foo) индекс последнего вхождения foo, если нет -1
*/
console.log(myArray.lastIndexOf('Sean')); // => 4
console.log(myArray.lastIndexOf('Jack')); // => -1


/**
* Выбирает элементы из первого массива которые встречаются во втором массиве
* т.е. совпадающие элементы
*/
const myArrayOne = [1, 2, 3, 4];
const myArrayTwo = [2, 3, 5, 6];
const result = [];
for (let i = 0; i < myArrayOne.length; i++) {
    // Проверяем совпадение элементов массивов
    if (myArrayTwo.indexOf(myArrayOne[i]) !== -1) {
        // Если индекс текущего элемента не равен -1,
        // мы отправим найденный элемент в новый массив
        result[result.length] = myArrayOne[i];
    }
}
console.log(result); // => [2, 3]


const myNamesArray = ['Paul', 'Tommy', 'Sean', 'Danny', 'Sean'];
console.log(myNamesArray.includes('Tommy')); // => true
console.log(myNamesArray.includes('Jack')); // => false


/**
* То же что и в 23, только через includes (ES6)
*/
const newResult = [];
for (let i = 0; i < myArrayOne.length; i++) {
    // Проверяем совпадение элементов массивов
    if (myArrayTwo.includes(myArrayOne[i])) {
        newResult[newResult.length] = myArrayOne[i];
    }
}
console.log(newResult); // => [2, 3]
