console.log(typeof[]==='object');

const myArray=[1,2];
myArray.key='value';
console.log(myArray.key);
console.log(myArray);
myArray.getValue = function() {
    return `key is ${this.key}`;
}
console.log(myArray.getValue());
console.log(myArray);
