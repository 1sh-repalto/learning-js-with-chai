const marvel = ['thor', 'loki', 'spidey']; 
const dc = ['flash', 'superman', 'batman'];

const allHeroes = marvel.concat(dc); // concatenates two arrays, returns new array without changing original arrays
console.log(allHeroes);

// another way
const allHeroesNew = [...marvel, ...dc]; // spread operator
console.log(allHeroesNew);

console.log(Array.isArray('Vansh')); // returns bool
console.log(Array.from('Vansh')); // converts given input to an array

let el1 = 1;
let el2 = 2;
let el3 = 3;
console.log(Array.of(el1, el2, el3));