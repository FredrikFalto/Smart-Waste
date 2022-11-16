const express = require('express')

const router = express.Router()

// controller functions
const {
    signupUser,
    loginUser,
    getUser,
} = require('../controllers/userController')

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// Get a user
router.get('/:id', getUser)

module.exports = router
