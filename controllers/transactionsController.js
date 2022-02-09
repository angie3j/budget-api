// Dependencies
const express = require('express');

// A new controller that handles a sub-route.
const transactions = express.Router();

// Files
const transactionsData = require('../models/transactions');

// ROUTES

// SENDS the transactions array:
// INDEX
transactions.get('/', (request, response) => {
    // console.log ('GET request to /transactions');
    response.json(transactionsData);
});

// SHOW 
// Sends the corresponding log when a valid id is given
transactions.get('/:id', (request, response) => {
    const arrayId = request.params.id;
    if(transactionsData[arrayId]) {
        response.json(transactionsData[arrayId]);
// Sends a redirect when an individual id is given: 
    } else {
        response.redirect('/', 302);
    };
});

// CREATE
// Adds a new transaction to the end of the transaction's array:
transactions.post('/', (request, response) => {
    const newTransaction = request.body;
    transactionsData.push(newTransaction)
    // console.log(newTransaction)
    response.json(transactionsData);
    // response.send(request.body);
});


// DELETE
transactions.delete("/:arrayId", (req, res) => {
    const deletedTransaction = transactionsData.splice(req.params.arrayId, 1);
    //console.log(req.params.arrayId);
    res.status(200).json(deletedTransaction);
  });
  
// UPDATE 
// Replaces the index in the transactions' array:
transactions.put('/:id', (request, response) => {
    const arrayId= request.params.id;
    transactionsData[arrayId] = request.body;
    console.log('success')
    response.status(200).json(transactionsData[arrayId]);
});


module.exports = transactions; 
