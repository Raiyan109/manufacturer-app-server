const mongoose = require('mongoose')

const Schema = mongoose.Schema

const partSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    minimumOrderQuantity: Number,
    availableQuantity: Number

}, { timestamps: true })


module.exports = mongoose.model('Part', partSchema)