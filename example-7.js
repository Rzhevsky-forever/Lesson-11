const myMap = new Map();

// Заполним Map и Object свойствами:
const myStringKey = 'my super string';
const myObjectKey = {};
const myFunctionKey = function () {};

myMap.set(myStringKey, 'значение для строки');
myMap.set(myObjectKey, 'значение для объекта');
myMap.set(myFunctionKey, 'значение для функции');

console.log(myMap);