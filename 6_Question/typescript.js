"use strict";
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed. Then print the name after
striping the white spaces. */
// Storing Person name in a variable Name with some escape sequence characters
let Name = " \t \n Ahmed  \t \n";
// Displaying the Name with spaces on the user screen
console.log("Name with WhiteSpaces :" + Name);
// Removing the spaces from the name by using the trim method and storing it to new variable Newname
let Newname = Name.trim();
// Displaying the new Name on the screen without spaces 
console.log("Name without Whitespaces: " + Newname);
