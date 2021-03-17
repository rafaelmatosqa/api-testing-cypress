/// <reference types="cypress" />
const payloadAddBook = require('../payloads/add-book.json');

function deleteBook(idBook) {

    return cy.request({

        method:'DELETE',
        url:`/v1/Books/${idBook}`,
        failOnStatusCode: false,
       
        
    })

}

export { deleteBook };