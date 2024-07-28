// Jan 1st, 1970

let myData = new Date();
// different ways to represent date
console.log(myData.toString());
console.log(myData.toISOString());
console.log(myData.toJSON());
console.log(myData.toLocaleDateString());
console.log(myData.toLocaleString());
// and much more

let myDate =  new Date(2023, 0, 23);
console.log(myDate.toDateString());

let myDate2 =  new Date("2024-07-28"); // yy/mm/dd
console.log(myDate2.toDateString());

let myDate3 =  new Date("07-29-2024"); // mm/dd/yy
console.log(myDate3.toDateString());

let myTimestamp = Date.now(); // return a long long integer representing miliseconds 
console.log(myTimestamp); 

console.log(Date.now()); // returns time in miliseconds since Jan 1st, 1970
console.log(Math.floor(Date.now()/100)); // to get time in seconds

 
// for extracting only specific info from date
let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth()); // months start from 0, i.e. Jan -> 0, Feb -> 1 ...
console.log(newDate.getDay()); // days start from 0, i.e. Sun -> 0, Mon -> 1 ...
// etc.