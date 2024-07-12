/// <reference types = "cypress" /

describe('All Role Tests', function () {

    it.only('should create a role', function () {
        cy.validLogin()
        cy.createRole()
    })

    it('should view role details', function () {
        cy.validLogin()
        cy.roleDetail()
    })

    it('should disable a role', function () {
        cy.validLogin()
        cy.roleDetail()
        cy.disableRoleRequest()
    })

    it('should approve disable role request', function () {
        cy.checkerLogin()

    })

})