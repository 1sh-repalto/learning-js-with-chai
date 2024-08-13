// for-of loop -> gives values in return
const arr = [1, 2, 3, 4, 5];
for(const num of arr){
    console.log(num);
};

const book = 'Dark Matter by Blake Crouch';
for(const char of book){
    console.log(char);
};

// for-of in Maps
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States Of America');
map.set('JPN', 'JAPAN');

for(const [key, value] of map){
    console.log(`Key is ${key} and value is ${value}`);
}

//for-of in objects -> can't do