
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
    loginSuccess() {
        return cy.get('.snack-content > .d-flex > :nth-child(2)')
    }
    getLoginError() {
        return cy.get('.d-flex')
    }
    approvalScreen() {
        return cy.get('.pageTitle > .ng-tns-c68-2')
    }

}
