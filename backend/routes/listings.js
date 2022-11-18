const express = require('express')
const {
    getListings,
    getListing,
    createListing,
    deleteListing,
} = require('../controllers/listingController')

// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require auth for all listing routes
// !! OBS !! Ta bort kommentaren nedanför efter implementation av lägga till annons sidan
// router.use(requireAuth)

// Get all recipes
router.get('/', getListings)

// Get a single listing
router.get('/:id', getListing)

// Add a new listing
router.post('/', createListing)

// Delete a listing
router.delete('/:id', deleteListing)

module.exports = router
