// Equality and inequality with strings
let city: string = 'New York';

console.log("Is city equal to 'New York'? I predict True.");
console.log(city == 'New York');

console.log("Is city not equal to 'Los Angeles'? I predict False.");
console.log(city != 'New York');

// Lower case function tests
let name: string = 'John';

console.log("Is the lower case of name equal to 'john'? I predict True.");
console.log(name.toLowerCase() == 'john');

console.log("Is the lower case of name not equal to 'john'? I predict False.");
console.log(name.toLowerCase() != 'john');

// Numerical tests
let age: number = 30;

console.log("Is age equal to 30? I predict True.");
console.log(age == 30);

console.log("Is age not equal to 25? I predict False.");
console.log(age != 30);

console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

console.log("Is age less than 40? I predict False.");
console.log(age < 20);

console.log("Is age greater than or equal to 25? I predict True.");
console.log(age >= 25);

console.log("Is age less than or equal to 35? I predict True.");
console.log(age <= 35);

// Tests using "and" and "or" operators
let isStudent: boolean = true;
let hasJob: boolean = false;

console.log("Is the person both a student and has no job? I predict True.");
console.log(isStudent && !hasJob);

console.log("Is the person either a student or has no job? I predict True.");
console.log(isStudent || !hasJob);

console.log("Is the person both a student and has a job? I predict False.");
console.log(isStudent && hasJob);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'orange', 'banana'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));

// Test whether an item is not in an array
let colors: string[] = ['red', 'blue', 'green'];

console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));

console.log("Is 'red' not in the colors array? I predict False.");
console.log(!colors.includes('red'));


export{};