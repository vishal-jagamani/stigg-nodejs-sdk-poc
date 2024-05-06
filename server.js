// Import necessary modules
const express = require('express');
const { join } = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

// Create Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Set the port for the server
const PORT = process.env.PORT || 8080;

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(express.static(join(__dirname, '/'))); // Serve static files from the '/' directory

// Import services
const stiggService = require('./services/stiggService');

// Start the server
app.listen(PORT, () => {
    console.log(`Stigg NodeJS SDK POC server is running on port ${PORT}`);
});

// Test endpoint
app.get('/testEndpoint', (req, res) => {
    res.send('Stigg NodeJS SDK POC service test endpoint');
});

// Add rest of the endpoints here
app.get('/getProducts', async (req, res) => {
    try {
        const response = await stiggService.getProducts();
        res.status(200).send(response);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Middleware to handle any errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({
        error: {
            code: 404,
            message: 'Not Found',
            description: 'The requested resource was not found on the server.',
            suggestedAction: 'Check the resource URL or verify that the resource exists.',
        },
    });
});
