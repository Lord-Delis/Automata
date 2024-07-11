/// <reference types = "cypress" />

describe('All Login Tests', function () {

    it.only('should login with valid username and password', function () {
        cy.validLogin()

    })

    it('should not login with invalid username and password', function () {  
        cy.invalidLogin()

    })

})
