const User = require('../models/userModels.js')

// login user
const loginUser = async (req, res) => {
    res.json({ msg: 'logging in' })
}

// signup user
const signupUser = async (req, res) => {
    res.json({ msg: 'Signed up' })
}


module.exports = { loginUser, signupUser }