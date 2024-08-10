// constructor declaration (is Singleton)
const user = new Object({
    name: 'Vansh',
    age: 19
});
console.log(user);

// combining multiple objects
const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
const obj3 = {5: 'e', 6: 'f'};

// method - 1
const finalObj1 = Object.assign({}, obj1, obj2, obj3);
console.log(finalObj1);

// method - 2
const finalObj2 = {...obj1, ...obj2, ...obj3};
console.log(finalObj2);

console.log(Object.keys(user)); // returns an array of keys in form of strings
console.log(Object.values(user)); // returns an array of values in their respective datatype