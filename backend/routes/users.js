const express = require('express');
const {
    createUser,
    getUser,
    getUsers,
} = require('../controllers/userController');

const router = express.Router();

// Get all users
router.get('/', getUsers);

// Get a recipe
router.get('/:id', getUser);

// Add a new recipe
router.post('/', createUser);

module.exports = router;
