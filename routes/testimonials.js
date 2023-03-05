const express = require('express');
const { getTestimonials, createTestimonial } = require('../controllers/testimonialControllers.js')
const router = express.Router()

// GET all testimonials
router.get('/', getTestimonials)


// POST
router.post('/', createTestimonial)


module.exports = router

