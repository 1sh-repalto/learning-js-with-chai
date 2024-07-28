//can be declared in two ways
// 1st 
const name = "Vansh";

// 2nd, provides many methods
const email = new String("vansh@abc.com");
console.log(email.toUpperCase());
console.log(email.charAt(5));

// string interpolation -> using variables in string using `...${}...`
console.log(`Hi, I'm ${name} and my email is ${email}`);


const fullName = "Vansh Repalto";
const firstName = fullName.substring(0, 5); // index 5 is not included
console.log(firstName);


const lastName = fullName.slice(-7); // unlike subtring(), we can pass negtive indexes to slice()
console.log(lastName);


const str = "   hello    ";
console.log(str.trim()); // removes whitespaces from start and end

const str2 = "Vansh Negi";
console.log(str2.replace('Negi', 'Repalto'));

const str3 = "veni vidi vici";
console.log(str3.includes('vidi'));