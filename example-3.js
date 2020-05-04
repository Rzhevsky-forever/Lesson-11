/**
* @return Boolean
*/
function isEmptyArray (array) {
    return array.length === 0;
}
const myArray = [1, 2, 3];
const myEmptyArray = [];
console.log(isEmptyArray(myArray)); // => false
console.log(isEmptyArray(myEmptyArray)); // => true


function multiplyArray(array, value) {
    if (array.length !== 0) {
        const nextArray = [];
        for (let i = 0; i < array.length; i++) {
            nextArray[i] = array[i] * value;
        }
        return nextArray;
    }
    return array;
}
console.log(multiplyArray(myArray, 2)); // => [2, 4, 6]
console.log(multiplyArray(myEmptyArray, 2)); // => []


const myAnotherArray = [1, 2, 3, 4, 5];
console.log(myAnotherArray.length); // => 5
myAnotherArray.length = 3; // Уменьшим длину массива
console.log(myAnotherArray.length); // => 3
console.log(myAnotherArray); // => [1, 2, 3]


const myNextArray = [1, 2, 3, 4, 5];
console.log(myNextArray.length); // => 5
myNextArray.length = 3; // Уменьшим длину массива
console.log(myNextArray.length); // => 3
console.log(myNextArray); // => [1, 2, 3]
myNextArray.length = 5; // Увеличим до 5
console.log(myNextArray.length); // => 5
console.log(myNextArray); // => [ 1, 2, 3, <2 empty items> ]
