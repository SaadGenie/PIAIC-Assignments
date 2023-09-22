function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magiciansArray: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

make_great(magiciansArray);
show_magicians(magiciansArray);

export { };
