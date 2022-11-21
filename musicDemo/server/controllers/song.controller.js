const {
    createSong,
    getAllSongs,
    getSongById,
    deleteSongById,
    getSongByIdAndUpdate,
    createManySongs
} = require('../services/song.service');


const handleCreateSong = async (req, res) => {
    console.log('controller: handleCreateSong req.body:', req.body);
    try {
        const song = await createSong(req.body);
        return res.json(song)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllSongs = async (req, res) => {
    console.log('controller: handleGetAllSongs');
    try {
        const songs = await getAllSongs();
        return res.json(songs)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetSongById = async (req, res) => {
    console.log('controller: handleGetSongById req.params: ', req.params.id);
    try {
        const song = await getSongById(req.params.id);
        return res.json(song)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteSongById = async (req, res) => {
    console.log('controller: handleDeleteSongById req.params: ', req.params.id);
    try {
        const song = await deleteSongById(req.params.id);
        return res.json(song)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateSongById = async (req, res) => {
    console.log('controller: handleUpdateSongById req.params: ', req.params.id, "\n req.body :", req.body);
    try {
        const song = await getSongByIdAndUpdate(req.params.id, req.body);
        return res.json(song)
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Not needed on exam, used to seed lot's of data into the DB so we can travel
const handleCreateManySongs = async (req, res) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new Error('The request body must be an array.');
        }
        const settledOutcomes = await createManySongs(req.body);
        return res.json(settledOutcomes);
    } catch (error) {
        return res.status(400).json(error);
    }
}

    module.exports = {
        handleCreateSong: handleCreateSong,
        handleGetAllSongs,
        handleGetSongById,
        handleDeleteSongById,
        handleUpdateSongById,
        handleCreateManySongs
    }