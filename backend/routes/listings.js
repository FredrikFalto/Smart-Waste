const express = require('express');
const {
    getListings,
    getListing,
    createListing,
} = require('../controllers/listingController');

const router = express.Router();

// Get all recipes
router.get('/', getListings);

// Get a single listing
router.get('/:id', getListing);

// Add a new listing
router.post('/', createListing);

module.exports = router;
