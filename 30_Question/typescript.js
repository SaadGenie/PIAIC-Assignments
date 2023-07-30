"use strict";
let usernames = ["admin", "Saad", "Ahmed", "Ali", "Adil"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello admin , would you like see a status report?");
    }
    else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again.");
    }
}
