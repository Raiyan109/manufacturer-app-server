const Testimonial = require('../models/testimonialModels.js')


// GET all testimonials
const getTestimonials = async (req, res) => {
    const testimonial = await Testimonial.find({}).sort({ createdAt: -1 })

    if (!testimonial) {
        return res.status(404).json({ error: 'No such testimonial' })
    }
    res.status(200).json(testimonial)
}

// POST
const createTestimonial = async (req, res) => {
    const { name, review, location } = req.body

    const testimonial = await Testimonial.create({ name, review, location })

    if (!testimonial) {
        return res.status(404).json({ error: 'No such testimonial' })
    }
    res.status(200).json(testimonial)
}


module.exports = {
    getTestimonials,
    createTestimonial
}