import { PlayList } from "./SLLPrep.mjs"
// inside the playlist class create methods to add songList to the playlist class 
// Take the song list and add it to the PlayList class
// create a method to display all the songs
// create a method to remove a song from the playlist by title.
// create a method return the total duration from the playlist


const songList = [
    {
        title: "Welcome to the jungle",
        artist: "Guns and Roses",
        duration: "3:30"
    },
    {
        title: "Do or Die",
        artist: "30 seconds to mars",
        duration: "4:42"
    },
    {
        title: "I'm Full of Steak, and Cannot Dance",
        artist: "Sidney Gish",
        duration: "2:37"
    },
    {
        title: "My Lucky Pants Failed Me Again",
        artist: "Tom Rosenthal",
        duration: "3:45"
    },
]



const playlist = new PlayList();
playlist.addToPlaylist(songList);
console.log(playlist.totalPlaylistRuntime())
// console.log(playlist.displayAllSongs())
// playlist.removeSongByTitle("I'm Full of Steak, and Cannot Dance");
// console.log("**************************************")
// console.log(playlist.displayAllSongs())

