const myNamesArray = [
    'John', 'Paul', 'Tommy', 'Michael', 'Danny'
];
console.log(myNamesArray[0]); // => 'John'
console.log(myNamesArray[3]); // => 'Michael'


myNamesArray[0] = 'George';
myNamesArray[3] = 'Sean';
console.log(myNamesArray);


myNamesArray[myNamesArray.length] = 'Vasy';
console.log(
    myNamesArray.length, // last element index == 5, length == 6
    myNamesArray
);


const myArray = [1, 2, 3];
console.log(myArray.length); // => 3
myArray[6] = 10;
console.log(
    myArray,
    myArray.length
); // => [ 1, 2, 3, <3 empty items>, 10 ] 7
