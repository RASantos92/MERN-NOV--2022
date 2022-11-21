const express = require('express');

const {
    handleCreateSong,
    handleGetAllSongs,
    handleGetSongById,
    handleDeleteSongById,
    handleUpdateSongById,
    handleCreateManySongs
} = require('../controllers/song.controller')


const router = express.Router();


router.get('/', handleGetAllSongs)
router.post('/', handleCreateSong)
router.get('/:id', handleGetSongById)
router.delete('/:id', handleDeleteSongById)
router.put('/:id', handleUpdateSongById)
router.post('/many', handleCreateManySongs)


module.exports = { songRouter: router }
