// 2 ways to declare
const arr1 = [0, true, 'two', 3];
const arr2 = new Array(false, 1, 2, 'three');


// array methods

arr1.push('four'); // adds element in end
console.log(arr1);

arr2.pop(); // removes element from end
console.log(arr2);

arr1.unshift(-1); // adds element in front
console.log(arr1);

arr1.shift(); // removes element from front
console.log(arr1);

console.log(arr2.includes(2)); // return boolean

console.log(arr1.indexOf('two')); // return index if element exists, else returns -1

const arr3 = 'numbers -> ' + arr2.join(); // converts array to a string
console.log(arr3);

const arr4 = [0, 1, 2, 3, 4, 5];
const arrSlice = arr4.slice(1, 3); // creates a new array but doesn't affect the original array
console.log(arrSlice);             // ending index is not included
console.log(arr4);

const arrSplice = arr4.splice(1, 3);
console.log(arrSplice); // creates a new array and changes the original array
console.log(arr4);      // ending index is included 