const myArrayA = [1, 2, 3, 4, 5];
// Вызов метода возвращает новую длину массива
console.log(myArrayA.push(6)); // => 6
console.log(myArrayA); // => [1, 2, 3, 4, 5, 6]


const myArrayB = ['Paul', 'Tommy', 'Sean', 'Danny', 'Sean'];
// Вызов метода возвращает вырезанный элемент
console.log(myArrayB.pop()); // => 'Sean'
console.log(myArrayB); // => ['Paul', 'Tommy', 'Sean', 'Danny']


const myArrayC = [1, 2, 3];
// Вызов метода возвращает новую длину массива
console.log(myArrayC.unshift(5)); // => 4
console.log(myArrayC); // => [5, 1, 2, 3]


const myArrayD = [7, 2, 3];
// Вызов метода возвращает вырезанный элемент
console.log(myArrayD.shift()); // => 7
console.log(myArrayD); // => [2, 3]


const myArrayE = [1, 2, 3, 4, 5, 6];
// в качестве первого аргумента
// необходимо передать индекс элемента,
// с которого надо удалить элементы
console.log(myArrayE.splice(3)); // => [4, 5, 6]
console.log(myArrayE); // => [1, 2, 3]


const myArrayG = [1, 2, 3, 4, 5, 6];
console.log(myArrayG.splice(3, 2)); // => [4, 5]
console.log(myArrayG); // => [1, 2, 3, 6]


/**
* Аргументы начиная с 3 добавляются вместо удаленных
*/
const myArrayI = [1, 2, 3, 4, 5, 6];
console.log(
    myArrayI.splice(3, 2, 'John', 'Sean', 'Tommy')
); // => [4,5]
console.log(myArrayI); // => [1, 2, 3, 'John', 'Sean', 'Tommy', 6]


/**
* Если надо только добавить элементы, второй аргумент должен быть 0:
*/
const myArrayQ = [1, 2, 3, 4, 5, 6];
console.log(
    myArrayQ.splice(3, 0, 'John', 'Sean', 'Tommy')
); // => []
console.log(myArrayQ); // => [1, 2, 3, 'John', 'Sean', 'Tommy', 4, 5, 6]


const myArrayW = ['Paul', 'Tommy', 'Sean', 'Danny', 'Sean'];
const partOfArray = myArrayW.slice(3);
console.log(partOfArray); // => ['Danny', 'Sean']
