const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()

const step1Routes = require('./routes/step1.js')


const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/step1', step1Routes)


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, (req, res) => {
            console.log(`connected db & vedic_new_2 server listening on ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })





