const mongoose = require('mongoose')

const Schema = mongoose.Schema

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
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    extrainfo: {
        type: String,
        required: false,
    },
    portions: {
        type: Number,
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
    imglink: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Listing', listingSchema)
