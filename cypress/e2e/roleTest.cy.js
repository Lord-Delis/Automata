/// <reference types = "cypress" /

describe('All Role Tests', function () {

    it('should view role details', function () {
        cy.validLogin()
        cy.viewRoleDetails()
    })

    it('should disable a role', function () {
        cy.validLogin()
        cy.viewRoleDetails()
        cy.disableRole()
    })

})