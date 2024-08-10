// singletons ???

// object literals (not singleton)
const user = {
    first_name: 'Vansh',
    last_name: 'Repalto',
    email: 'vansh@123.com',
    adult: true
};

// console.log(user["email"]);  // another way -> console.log(user.first_name);

// user.email = 'vansh@abc.com'; // to change value of a key in object
// console.log(user);

// Object.freeze(user); // doesn't allow any changes to be made on the object

// user.email = 'vansh@xyz.com'; // won't change due to freeze
// console.log(user);

user.greeting = function(){
    console.log(`Hello ${this.first_name}`);
}

console.log(user.greeting());