const express = require('express')

const router = express.Router()

const { createStep1,
    getStep1
} = require('../controllers/step1Controllers');

// Get all parts
router.get('/', getStep1)

// Get a single part


// Create a new part
router.post('/', createStep1)

// Delete a single part


// Update a single part





module.exports = router