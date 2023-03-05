const Review = require('../models/reviewModels.js');


// GET reviews
const getReviews = async (req, res) => {
    const review = await Review.find({}).sort({ createdAt: - 1 })
    if (!review) {
        return res.status(404).json({ error: 'No such reviews' })
    }
    res.status(200).json(review)
}


// POST Reviews
const createReview = async (req, res) => {
    const { name, review, ratings } = req.body

    try {
        const newReview = await Review.create({ name, review, ratings })
        res.status(200).json(newReview)
    }
    catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getReviews,
    createReview
}