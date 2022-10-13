const express = require('express');

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
router.post('/', (req, res) => {
    res.json({ mssg: 'POST a new recipe' });
});

// Ta bort ett recept
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a recipe' });
});

// Uppdatera ett recept
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a recipe' });
});

module.exports = router;
