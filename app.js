const express = require('express');
const cors= require('cors');

// Files
const transactionsController = require('./controllers/transactionsController');
// Dependencies/Libraries:
// Configuration
const app = express();
app.use((cors()));
// const { application } = require('express');


// Middleware
app.use(express.json());
app.use('/transactions', transactionsController);

app.get('/', (_, response) => {
    response.send('Welcome to Angie\'s App');
});


// Delegate to the transactionsController
app.use('/transactions', transactionsController);


// Export our app for 'server.js'
module.exports = app;