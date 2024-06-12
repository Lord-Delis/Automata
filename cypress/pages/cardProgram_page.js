
export class CardProgramPage {

    navigateToCardProgramModule() {
        return cy.get(':nth-child(3) > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .menu-item-link > .menu-item')
    }
    cardProgramNameInput() {
        return cy.get('.form-control')
    }
    returnCardProgramUrl() {
        return cy.url()
    }

}

