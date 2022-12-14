const Listing = require('../models/listingModel')
const mongoose = require('mongoose')

// Get all recipes
const getListings = async (req, res) => {
    const listings = await Listing.find({}).sort({})

    res.status(200).json(listings)
}

// Get a single listing
const getListing = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such listing' })
    }

    const listing = await Listing.findById(id)

    if (!listing) {
        return res.status(404).json({ error: 'No such listing' })
    }

    res.status(200).json(listing)
}

// Create new listing
const createListing = async (req, res) => {
    const {
        dish,
        ingredients,
        allergens,
        category,
        portions,
        extrainfo,
        imglink,
        price,
        expirationdate,
        userid,
    } = req.body

    try {
        const listing = await Listing.create({
            dish,
            ingredients,
            allergens,
            category,
            portions,
            extrainfo,
            imglink,
            price,
            expirationdate,
            userid,
        })
        res.status(200).json(listing)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete a listing
const deleteListing = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such listing' })
    }

    const listing = await Listing.findOneAndDelete({ _id: id })

    if (!listing) {
        return res.status(400).json({ error: 'No such listing' })
    }

    res.status(200).json(listing)
}

module.exports = {
    getListings,
    getListing,
    createListing,
    deleteListing,
}
