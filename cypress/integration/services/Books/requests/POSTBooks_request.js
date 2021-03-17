/// <reference types="cypress" />
const payloadAddBook = require('../payloads/add-book.json');

function addBooks() {

    return cy.request({

        method:'POST',
        url:'/v1/Books',
        failOnStatusCode: false,
        body: payloadAddBook
        
    })

}

export { addBooks };