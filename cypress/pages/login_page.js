
export class LoginPage {

    emailInput() {
        return cy.get(':nth-child(2) > .group-input > .form-control')
    }
    passwordInput() {
        return cy.get(':nth-child(3) > .group-input > .form-control')
    }
    getloginBtn() {
        return cy.get('.btn')
    }
    getWelcomeMessage() {
        return cy.get('.display-3')
    }
    getLoginError() {
        return cy.get('.d-flex')
    }
}
