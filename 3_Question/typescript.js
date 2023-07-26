"use strict";
// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
let Person_name = "Albert einstein";
console.log("Person name in Lower Case: " + Person_name.toLowerCase());
console.log("Person name in Upper Case: " + Person_name.toUpperCase());
let newname = Person_name.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log("Person name in Title Case: " + newname);
