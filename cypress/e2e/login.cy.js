/// <reference types = "cypress" />

describe('All Login Tests', function () {

    it('should login with valid username and password', function () {
        cy.validLogin()

    })

    it('should login with invalid username and password', function () {  
        cy.invalidLogin()

    })

})
