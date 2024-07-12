/// <reference types = "cypress" />

describe('All Login Tests', function () {

    it('should login with valid username and password', function () {
        cy.validLogin()

    })


    it.skip('should not login with invalid username and password', function () {
        cy.invalidLogin()

    })

})
