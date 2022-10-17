const User = require('../models/userModel');
const mongoose = require('mongoose');

// Get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({});

    res.status(200).json(users);
};

// Get a single user
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' });
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({ error: 'No such user' });
    }

    res.status(200).json(user);
};

// Create new user
const createUser = async (req, res) => {
    const { username, password, name, phone } = req.body;

    try {
        const user = await User.create({
            username,
            password,
            name,
            phone,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUser,
    getUsers,
};
