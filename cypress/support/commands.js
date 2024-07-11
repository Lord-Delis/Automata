/// <reference types= "cypress" />

// Import the pages and the test data
import { LoginPage } from "../pages/login_page";
import { RolePage } from "../pages/role_page";
import { CardProgramPage } from "../pages/cardProgram_page";
import automataData from "../fixtures/automataData.json";

// Create objects of the pages to make the methods accessible
const loginAction = new LoginPage()
const roleAction = new RolePage()
const cardProgramAction = new CardProgramPage()

const WELCOME_MESSAGE_ALIAS = '@welcomeMessageText';
// Login steps
Cypress.Commands.add('validLogin', function () {
    loginAction.emailInput().type(automataData.valid_login_data.username)
    loginAction.passwordInput().type(automataData.valid_login_data.password)
    loginAction.getloginBtn().click()
    loginAction.loginSuccess().should('contain', automataData.valid_login_data.loginSuccessMessage);
})

// Invalid login steps
Cypress.Commands.add('invalidLogin', function () {
    loginAction.emailInput().type(automataData.invalid_login_data.username)
    loginAction.passwordInput().type(automataData.invalid_login_data.password)
    loginAction.getloginBtn().click()
    loginAction.getLoginError().should('be.visible')
    loginAction.getLoginError().should('contain', automataData.invalid_login_data.loginError)
})

// View role steps
Cypress.Commands.add('viewRoleDetails', function () {
    roleAction.navigateToRoleModule().click()
    roleAction.returnRoleUrl().should('include', automataData.role_data.urlContent)
    roleAction.roleActionBtn().click()
    roleAction.viewRoleDetails().click()
})

// Disable role
Cypress.Commands.add('disableRole', function () {
    roleAction.roleDisableButton().click()
    //roleAction.disableRoleSuccessPopup().should('include', automataData.role_data.roleDisableSuccessMessage)
})

// Search card program steps
Cypress.Commands.add('searchCardPrograms', function () {
    cardProgramAction.navigateToCardProgramModule().click()
    cardProgramAction.returnCardProgramUrl().should('include', automataData.cardProgram_data.urlContent)
    cardProgramAction.cardProgramNameInput().type(automataData.cardProgram_data.cardProgramName)

})