"use strict";
// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
// Storing the name of person in a variable of string data type
let Person_name = "Albert einstein";
// Displaying the person name in lower case first by using toLowerCase Method
console.log("Person name in Lower Case: " + Person_name.toLowerCase());
// Displaying the person name in upper case by using toUpperCase Method
console.log("Person name in Upper Case: " + Person_name.toUpperCase());
// Converting the name that is stored in Person_name variable and converting it to Title Case and then
// Storing it to new variable newname
let newname = Person_name.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");
// Displaying the person name in title case which was stored in newname variable
console.log("Person name in Title Case: " + newname);
