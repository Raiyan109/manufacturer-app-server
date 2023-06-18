const Step1 = require('../models/step1Models')
const mongoose = require('mongoose');


// Get all parts
const getStep1 = async (req, res) => {
    const step1 = await Step1.find({}).sort({ createdAt: -1 })

    if (!step1) {
        return res.status(404).json('No such calculations')
    }
    res.status(200).json(step1)
}

// Get a single part


// Create a new part
const createStep1 = async (req, res) => {
    const { state, city, peopleCount, units, amount, userTotal, stateTotal } = req.body

    try {
        const step1 = await Step1.create({ state, city, peopleCount, units, amount, userTotal, stateTotal })
        res.status(200).json(step1)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// Delete a single part


// Update a single part



module.exports = {
    createStep1,
    getStep1,
}