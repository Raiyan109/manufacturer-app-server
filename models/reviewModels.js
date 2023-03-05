const mongoose = require('mongoose');

const Schema = mongoose.Schema


const reviewSchema = new Schema({
    name: String,
    review: String,
    ratings: Number
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)




