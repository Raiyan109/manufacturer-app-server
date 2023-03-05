const mongoose = require('mongoose');

const Schema = mongoose.Schema


const testimonialSchema = Schema({
    name: String,
    review: String,
    location: String
}, { timestamps: true })


module.exports = mongoose.model('Testimonial', testimonialSchema)
