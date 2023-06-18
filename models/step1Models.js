const mongoose = require('mongoose')

const Schema = mongoose.Schema

const step1Schema = new Schema({
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    peopleCount: {
        type: Number,
        required: true
    },
    units: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
    },
    userTotal: {
        type: Number,
    },
    stateTotal: {
        type: Number
    }
}, { timestamps: true })


module.exports = mongoose.model('Step1', step1Schema)