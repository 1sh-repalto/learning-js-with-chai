const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter method
let newNums = nums.filter((num) => num > 5);
console.log(newNums);

// map method
newNums = nums.map((num) => {
    return num+10
});
console.log(newNums);

// chaining
newNums = nums
            .map((num) => num*10)
            .map((num) => num+5)
            .filter((num) => num > 40);
console.log(newNums);


// reduce method
newNums = nums.reduce((acc, curr) => acc+curr, 0);
console.log(newNums);