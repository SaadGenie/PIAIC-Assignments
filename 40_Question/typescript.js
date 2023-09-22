"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums without specifying the number of tracks
const album1 = make_album("Adele", "21");
const album2 = make_album("Ed Sheeran", "x");
const album3 = make_album("Taylor Swift", "1989");
console.log(album1);
console.log(album2);
console.log(album3);
// Create an album with a specified number of tracks
const album4 = make_album("Bruno Mars", "24K Magic", 9);
console.log(album4);
