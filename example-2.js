const myArray = new Array(1,2,3);
console.log(myArray);

const myNewArray = [1, 2, 3];
console.log(myNewArray);

console.log(typeof(myArray) === typeof(myNewArray)); // true


const myWrongArray = new Array(1);
console.log(myWrongArray);

const myOneMoreWrongArray = new Array(4);
console.log(myOneMoreWrongArray);


console.log(
    myNewArray.length, // 3
    myWrongArray.length, // 1
    myOneMoreWrongArray.length // 4
);


const myEmptyArray = [];
console.log(myEmptyArray.length);
console.log(
    myEmptyArray.length == false, // true
    myEmptyArray.length === false, // false
);
