/// <reference types = "cypress" /

describe('All Role Tests', function () {

    it('should view role details', function () {
        cy.validLogin()
        cy.viewAllRoles()
    })

})