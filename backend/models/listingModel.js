const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
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
    category: {
        type: String,
        required: true,
    },
    extrainfo: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    expirationdate: {
        type: Date,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Listing', listingSchema);
