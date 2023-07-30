
// Storing five locations in the array
let array:string[] = [" Italy ", " Canada ", " Hungary ", " Germany " , " United Kingdom"];

// printing the original array
console.log("Array in its Original Order: " + array);

// Printing the array in alphabetical order
console.log("Array in Alphabetical Order: " , array.slice().sort());

// again printing the original array
console.log("Array in its Original Order: " + array);

// printing the array in reverse alphabetical order without changing the original order
console.log("Array in Reverse Alphabetical Order: " + array.slice().sort().reverse());

// again printing the original array
console.log("Array in its Original Order: " + array);

// printing the array in reverse order 
console.log("Array in Reverse Order: " + array.reverse());

// Again converting the array in reverse order and it will be in original form
console.log("Array Back to Original Order: " + array.reverse());

// Sorting the array
array.sort()
console.log("Array in Alphabetical Order: " + array);

// Reversing the array
array.reverse();
console.log("Array in Reverse Order: " + array);


export{};