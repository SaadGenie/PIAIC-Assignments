"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magiciansArr) {
    const greatMagicians = [];
    for (const magician of magiciansArr) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magiciansArr) {
    for (const magician of magiciansArr) {
        console.log(magician);
    }
}
const magicians = ["Aladdin", "David", "Lalisar", "John"];
// Create a copy of the magicians array and modify it with "Great"
const greatMagicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
