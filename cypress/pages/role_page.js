
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
    roleDisableButton() {
        return cy.get('.btn-primary-outline')
    }
    disableRoleSuccessPopup() {
        return cy.get('.snack-content > .d-flex > :nth-child(2)')
    }
    viewDisableRequest() {
        return cy.get('tbody > :nth-child(1) > :nth-child(5) > a')
    }
    approveBtn() {
        return cy.get('.btn-primary')
    }
    approveRoleSuccessPopup() {
        return cy.get('.snack-content > .d-flex > :nth-child(2)')
    }
    addRoleBtn() {
        return cy.get('.btn')
    }
    addRoleText() {
        return cy.get('.list-group-item > .card-header > h6')
    }
    roleNameInput() {
        return cy.get(':nth-child(1) > .group-input > .form-control')
    }
    roleDescriptionInput() {
        return cy.get(':nth-child(2) > .group-input > .form-control')
    }
    permissionDropdown_one() {
        return cy.get('#mat-expansion-panel-header-12 > .mat-content > .mat-expansion-panel-header-title > .col-md-9 > .card-title')
    }
    permission_one() {
        return cy.get('#mat-mdc-checkbox-1 > .mdc-form-field > label')
    }
    permission_two() {
        return cy.get('#mat-mdc-checkbox-4 > .mdc-form-field > label')
    }
    permissionDropdown_two() {
        return cy.get('#mat-expansion-panel-header-13 > .mat-content > .mat-expansion-panel-header-title > .col-md-9 > .card-title')
    }
    permission_three() {
        return cy.get('#mat-mdc-checkbox-17 > .mdc-form-field > label')
    }
    permission_four() {
        return cy.get('#mat-mdc-checkbox-20 > .mdc-form-field > label')
    }
    createRoleBtn() {
        return cy.get('.btn')
    }

}
