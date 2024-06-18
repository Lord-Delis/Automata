
export class RevenueReportPage {

    navigateToRevenueReportModule() {
        return cy.get('.list-item-active > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .menu-item-link > .menu-item').click()
    }
    initiateReportingRunBtn() {
        return cy.get('.btn > .ng-tns-c68-2').click()
    }
    cardProgramNameInput() {
        return cy.get('#mat-input-18').type('adb').select()
    }
    revenueRunDateInput() {
        return cy.get('#mat-input-19').type('12/13/2023')
    }
    clickProceedBtn() {
        return cy.get('.btn').click()
    }
    revenueSuccessMessage() {
        return cy.get('.snack-content > .d-flex > :nth-child(2)').should('contain', 'Revenue Report Initiated Successfully')
    }
    revenueReportUrl() {
        return cy.url()
    }

}



