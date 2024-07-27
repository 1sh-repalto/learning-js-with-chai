let num1 = "123abc";
num1 = Number(num1);
console.log(typeof num1);
console.log(num1);
//"123" -> Number() -> 33
//"123abc" -> Number() -> NaN

//true -> 1
//false -> 0

//String(), Boolean() ...


console.log(1 + 2 + "3");
// output -> 33

console.log("1" + 2 + 3);
// output -> 123
// if string is in leftmost, all the other values are also converted to string


//equality check(==) works different than comparisons (>, <, >=, <=)
// null == 0 -> false
// null >= 0 -> true, comparison converts null to number, treating it as 0