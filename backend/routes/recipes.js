const express = require('express');
const {
    createRecipe,
    getRecipe,
    getRecipes,
} = require('../controllers/recipeController');

const router = express.Router();

// Get all recipes
router.get('/', getRecipes);

// Get a recipe
router.get('/:id', getRecipe);

// Add a new recipe
router.post('/', createRecipe);

module.exports = router;
