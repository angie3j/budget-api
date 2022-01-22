// Files
const transactionsController = require('./controllers/transactionsController');

// Dependencies/Libraries:
const cors= require('cors');
const express = require('express');
const { application } = require('express');

// Configuration
const app = express();

// Middleware
app.use(express.json());
app.use((cors()));
app.use('/transactions', transactionsController);
app.get('/', (request, response) => {
    response.send('Welcome to Angie\'s App');
});

// Delegate to the transactionsController
app.use('/transactions', transactionsController);


// Export our app for 'server.js'
module.exports = app;