
export class RolePage {

    navigateToRoleModule() {
        return cy.get('.mat-mdc-nav-list > :nth-child(7)')
    }
    roleActionBtn() {
        return cy.get('tbody > :nth-child(1) > :nth-child(6)')
    }
    viewRoleDetails() {
        return cy.get('.mat-mdc-menu-content > :nth-child(1)')
    }
    returnRoleUrl() {
        return cy.url()
    }
}