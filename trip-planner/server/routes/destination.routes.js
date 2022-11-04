const express = require('express');

const {
    handleCreateDestination,
    handleGetAllDestinations,
    handleGetDestinationById,
    handleDeleteDestinationById,
    handleUpdateDestinationById
} = require('../controllers/destination.controller')


const router = express.Router();


router.get('/', handleGetAllDestinations)
router.post('/', handleCreateDestination)
router.get('/:id', handleGetDestinationById)
router.delete('/:id', handleDeleteDestinationById)
router.put('/:id', handleUpdateDestinationById)


module.exports = { destinationRouter: router }