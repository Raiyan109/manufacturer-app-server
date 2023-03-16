const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()
const stripe = require('./routes/stripe.js')
const partRoutes = require('./routes/parts.js')
const reviewRoutes = require('./routes/reviews.js')
const testimonialRoutes = require('./routes/testimonials.js')
const userRoutes = require('./routes/users.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/parts', partRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/testimonials', testimonialRoutes)
app.use('/api/users', userRoutes)
app.use('/api/stripe', stripe)

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, (req, res) => {
            console.log(`connected db & manufacturer server listening on ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })





