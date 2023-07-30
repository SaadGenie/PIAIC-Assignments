"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creating an array of string data type and storing the names 
let array = ["Saad", "Ali", "Ahmed", "Awais"];
// Storing a message for the persons
let message = " Would you like to come to the dinner?";
// displaying the person name and message
let i = 0;
for (i = 0; i < 4; i++) {
    console.log(array[i] + message);
}
console.log("The Number of people in array is : " + i);
