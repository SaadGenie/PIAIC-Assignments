"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array = ["Ali", "Saad", "Ahmed"];
// Intentional error 
console.log("Creating error Intenionally :");
for (let i = 0; i < 4; i++) {
    console.log(array[i]);
}
// there is error when accessing 3 index of array now fixing it
console.log("After the fixing the error :");
for (let i = 0; i < 3; i++) {
    console.log(array[i]);
}
