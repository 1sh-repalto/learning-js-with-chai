// Immediately Invoked Function Expressions (IIFE)
// Usecase -> avoid polluting the global namespace

// named iife
(function greet(){
    console.log('Hello');    // ()() -> first paranthesis is for function definition, second is for fucntion execution
})(); // ; is important

// unnamed iife
((name) => {
    console.log(`Hello ${name}`);
})('Vansh');
