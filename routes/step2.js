const express = require('express')

const router = express.Router()

const { createStep2,
    getStep2
} = require('../controllers/step2Controllers');

// Get all parts
router.get('/', getStep2)

// Get a single part


// Create a new part
router.post('/', createStep2)

// Delete a single part


// Update a single part





module.exports = router