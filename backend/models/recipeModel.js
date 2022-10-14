const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    dish: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    allergens: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Recipe', recipeSchema);
