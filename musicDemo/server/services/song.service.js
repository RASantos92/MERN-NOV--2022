const { Song } = require("../models/song.model");

const createSong = async (data) => {
    console.log('service: createSong');
    const song = await Song.create(data);
    return song;
}

const getAllSongs = async () => {
    console.log('service: getAllSongs');
    const songs = await Song.find();
    return songs;
}

const getSongById = async (id) => {
    console.log('service: getSongById');
    const song = await Song.findById(id);
    return song;
}

const deleteSongById = async (id) => {
    console.log('service: deleteSongById');
    const song = await Song.findByIdAndDelete(id);
    return song;
}

const getSongByIdAndUpdate = async (id, data) => {
    console.log('service: getSongByIdAndUpdate');
    const song = await Song.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated song.
        new: true
    });
    return song;
}

const createManySongs = async (documents) => {
    // Don't await inside a loop, it will delay iteration.
    const createPromises = documents.map((document) =>
        createSong(document)
    );
    // The one resulting promise will be awaited by the caller of this function.
    return Promise.allSettled(createPromises);
};

module.exports = {
    createSong: createSong,
    getAllSongs,
    getSongById,
    deleteSongById,
    getSongByIdAndUpdate,
    createManySongs
};