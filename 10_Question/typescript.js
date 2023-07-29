"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//-----------------------------PROGRAM 1------------------------
console.log("-----------------------------PROGRAM 1------------------------");
// Storing a quote in a variable message
let Message = '"A person who never made a mistake never tried anything new."';
// Storing the Name of famous person in variable 
let famous_person = "Albert Einstein ";
// Displaying the value of message variable and famous_person variable on the user screen
console.log(famous_person + "Once said," + Message);
//-----------------------------PROGRAM 2------------------------
console.log("\n");
console.log("-----------------------------PROGRAM 2------------------------");
// Storing Person name in a variable Name with some escape sequence characters
let Name = " \t \n Ahmed  \t \n";
// Displaying the Name with spaces on the user screen
console.log("Name with WhiteSpaces :" + Name);
// Removing the spaces from the name by using the trim method and storing it to new variable Newname
let Newname = Name.trim();
// Displaying the new Name on the screen without spaces 
console.log("Name without Whitespaces: " + Newname);
