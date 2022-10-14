const Recipe = require('../models/recipeModel');
const mongoose = require('mongoose');

// Get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({});

    res.status(200).json(recipes);
};

// Get a single recipe
const getRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such recipe' });
    }

    const recipe = await Recipe.findById(id);

    if (!recipe) {
        return res.status(404).json({ error: 'No such recipe' });
    }

    res.status(200).json(recipe);
};

// Create new recipe
const createRecipe = async (req, res) => {
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
};

module.exports = {
    createRecipe,
    getRecipe,
    getRecipes,
};
