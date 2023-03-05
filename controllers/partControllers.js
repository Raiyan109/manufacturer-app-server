const Part = require('../models/partModels')
const mongoose = require('mongoose');


// Get all parts
const getParts = async (req, res) => {
    const part = await Part.find({}).sort({ createdAt: -1 })

    if (!part) {
        return res.status(404).json('No such parts')
    }
    res.status(200).json(part)
}

// Get a single part
const getPart = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such part')
    }
    const part = await Part.findById(id)

    if (!part) {
        return res.status(404).json('No such part')
    }
    res.status(200).json(part)
}

// Create a new part
const createPart = async (req, res) => {
    const { name, price, desc } = req.body

    try {
        const part = await Part.create({ name, price, desc })
        res.status(200).json(part)
    }
    catch (error) {
        res.status(400).json(error)
    }
}

// Delete a single part
const deletePart = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such part')
    }

    const part = await Part.findOneAndDelete({ _id: id })

    if (!part) {
        return res.status(404).json('No such part')
    }
    res.status(200).json(part)

}

// Update a single part
const updatePart = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such part')
    }

    const part = await Part.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!part) {
        return res.status(404).json('No such part')
    }
    res.status(200).json(part)
}



module.exports = {
    createPart,
    getParts,
    getPart,
    deletePart,
    updatePart
}