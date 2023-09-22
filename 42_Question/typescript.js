"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magiciansArray = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
make_great(magiciansArray);
show_magicians(magiciansArray);
