const express = require('express');
const {
    createRecipe,
    getRecipe,
    getRecipes,
} = require('../controllers/recipeController');

const router = express.Router();

// Hämta alla recept
router.get('/', getRecipes);

// Hämta ett recept
router.get('/:id', getRecipe);

// Lägga till ett recept
router.post('/', createRecipe);

module.exports = router;
