const express = require('express');
const { getReviews, createReview } = require('../controllers/reviewControllers.js')
const router = express.Router()

// GET
router.get('/', getReviews)

// POST
router.post('/', createReview)

module.exports = router
