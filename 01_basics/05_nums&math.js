// 2 ways to declare
// 1st 
const num = 69;
console.log(num);

// 2nd , provides many methods
const num2 = new Number(96);
console.log(num2);

const temp = 32.7353414;
console.log(temp.toFixed(2)); // rounds up the number to specified decimal places

console.log(temp.toPrecision(5)); // gives precise value

const money = 33462346423;
console.log(money.toLocaleString('en-IN')); // default is US standard

// MATHS

console.log(Math.abs(-69));

console.log(Math.round(5.4999999)); // other ways -> ceil, floor 

console.log(Math.min(4,6,7,9,1)); //similarly, Math.max()

console.log(Math.random()); // generates a random number between 0 and 1

// trick to get random values in a range
const min = 5;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
