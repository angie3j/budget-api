// Dependencies
const dotenv = require('dotenv');

// Pull in app.js
const app = require('./app');

// Configuration
dotenv.config();
process.env;
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});