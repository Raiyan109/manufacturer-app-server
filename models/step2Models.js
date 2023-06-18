const mongoose = require('mongoose')

const Schema = mongoose.Schema

const step2Schema = new Schema({
    consumptionValues: {
        type: Array
    },
    consumptionTitles: {
        type: Array
    }
}, { timestamps: true })


module.exports = mongoose.model('Step2', step2Schema)