// Dependencies
const { response } = require('express');
const express = require('express');

// A new controller that handles a sub-route.
const transactions = express.Router();

// Files
const transactionsArray = require('../models/transactions');

// ROUTES

// SENDS the transactions array:
transactions.get('/', (request, response) => {
    // console.log ('GET request to /transactions');
    response.json(transactionsArray);
});

// SHOW 
// Sends the corresponding log when a valid id is given
transactions.get('/:id', (request, response) => {
    const id = request.params.id;
    if(transactionsArray[arrayId]) {
        response.json(transactionsArray[arrayId]);
// Sends a redirect when an individual id is given: 
    } else {
        response.redirect('/', 302);
    };
});

// CREATE
// Adds a new transaction to the end of the transaction's array:
transactions.post('/', (request, response) => {
    const newTransaction = request.body;
    transactionsArray.push(newTransaction)
    // console.log(newTransaction)
    response.json(transactionsArray);
    response.send(request.body);
});

// DELETE
// Deletes at the id in the transaction's array:
transactions.delete('/:id', (request, response) => {
    const { id } = request.params;
    // console.log(transactionsArray)
    if(transactionsArray[id]) {
        //transactionsArray.filter( transactions, i) => id !== i )
        const deletedTransaction = transactionsArray.splice(index, 1)[0]
        response.status(200).json(deletedTransaction);
    } else {
        response.status(404).json({ error: 'Page Not Found'})
    };
});

// UPDATE 
// Replaces the index in the transactions' array:
transactions.put('/:id', (request, response) => {
    const arrayId = request.params;
    transactionsArray[arrayId] = request.body;
    response.status(404).json(transactionsArray[arrayId]);
});


module.exports = transactions; 
