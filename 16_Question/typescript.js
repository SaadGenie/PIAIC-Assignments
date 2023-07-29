"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creating an array of string data type and storing the names 
let array = ["Saad", "Ali", "Ahmed", "Awais"];
// Storing a message for the persons
let message = " Would you like to come to the dinner?";
// counting the index of array
let arraylength = array.length;
// displaying the person name and message
for (let i = 0; i < arraylength; i++) {
    console.log(array[i] + message);
}
console.log(`\nOh ${array[2]} cannot make it to the dinner\n`);
let new_person_name = "Huzaifa";
array[2] = new_person_name;
for (let i = 0; i < 4; i++) {
    console.log(array[i] + message);
}
console.log("\nGood news! We found a bigger dinner table, so more space is available.\n");
// calculating the middle index of array 
let middleindex = Math.floor(array.length / 2);
// adding a new guest in the middle of array
array.splice(middleindex, 0, "Abdullah");
// adding a new guest at the starting of array
array.unshift("Farooq");
// adding a new guest at the ending of array
array.push("Adil");
// new message for the all the guests
let newmessage = " you are invited to the dinner. Please join us!";
// calculating the index of new array
arraylength = array.length;
// Displaying invitation message to all members once again.
for (let i = 0; i < arraylength; i++) {
    console.log(array[i] + message);
}
