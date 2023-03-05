const express = require('express')

const router = express.Router()

const { createPart, getParts, getPart, deletePart, updatePart } = require('../controllers/partControllers.js')

// Get all parts
router.get('/', getParts)

// Get a single part
router.get('/:id', getPart)

// Create a new part
router.post('/', createPart)

// Delete a single part
router.delete('/:id', deletePart)

// Update a single part
router.patch('/:id', updatePart)




module.exports = router