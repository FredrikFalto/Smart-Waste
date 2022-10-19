require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');
const listingRoutes = require('./routes/listings');

//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/listings', listingRoutes);

// Connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // Lyssna efter requests först när vi är anslutna till databasen
        app.listen(process.env.PORT, () => {
            console.log(
                `Connected to db & listening on port ${process.env.PORT}`
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
