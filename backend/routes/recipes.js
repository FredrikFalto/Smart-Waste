const express = require('express');
const Recipe = require('../models/recipeModel');

const router = express.Router();

// Hämta alla recept
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all recipes' });
});

// Hämta ett recept
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single recipe' });
});

// Lägga till ett recept
router.post('/', async (req, res) => {
    const { dish, ingredients, allergens, category, link } = req.body;

    try {
        const recipe = await Recipe.create({
            dish,
            ingredients,
            allergens,
            category,
            link,
        });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

// !! Används ej, sparat utifall att det behövs senare !!

// // Ta bort ett recept
// router.delete('/:id', (req, res) => {
//     res.json({ mssg: 'DELETE a recipe' });
// });

// // Uppdatera ett recept
// router.patch('/:id', (req, res) => {
//     res.json({ mssg: 'UPDATE a recipe' });
// });
