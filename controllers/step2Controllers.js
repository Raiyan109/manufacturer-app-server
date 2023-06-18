const Step2 = require('../models/step2Models')
const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({ filename: 'logs.log' }), // Log to a file
    ],
});

// Get all parts
const getStep2 = async (req, res) => {
    const step2 = await Step2.find({}).sort({ createdAt: -1 })

    if (!step2) {
        return res.status(404).json('No such consumptions')
    }
    res.status(200).json(step2)
}

// Get a single part


// Create a new part
const createStep2 = async (req, res) => {
    const { consumptionValues, consumptionTitles } = req.body
    logger.info(consumptionValues, consumptionTitles);
    try {
        const step2 = await Step2.create({ consumptionValues, consumptionTitles })
        res.status(200).json(step2)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// Delete a single part


// Update a single part



module.exports = {
    createStep2,
    getStep2,
}