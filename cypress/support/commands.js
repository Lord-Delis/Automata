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
// Valid login
Cypress.Commands.add('validLogin', function () {
    loginAction.emailInput().type(automataData.valid_login_data.makerUsername)
    loginAction.passwordInput().type(automataData.valid_login_data.makerPassword)
    loginAction.getloginBtn().click()
    loginAction.loginSuccess().should('contain', automataData.valid_login_data.loginSuccessMessage)
})

// checker login and approval
Cypress.Commands.add('checkerLogin', function () {
    loginAction.emailInput().type(automataData.valid_login_data.checkerUsername)
    loginAction.passwordInput().type(automataData.valid_login_data.checkerPassword)
    loginAction.getloginBtn().click()
    loginAction.approvalScreen().should('contain', automataData.valid_login_data.approvalScreenMessage);
    roleAction.viewDisableRequest().click()
    roleAction.approveBtn().click()
    roleAction.approveRoleSuccessPopup().should('contain', automataData.role_data.approveRoleSuccessMessage)
})

// Invalid login
Cypress.Commands.add('invalidLogin', function () {
    loginAction.emailInput().type(automataData.invalid_login_data.username)
    loginAction.passwordInput().type(automataData.invalid_login_data.password)
    loginAction.getloginBtn().click()
    loginAction.getLoginError().should('be.visible')
    loginAction.getLoginError().should('contain', automataData.invalid_login_data.loginError)
})

// View role details
Cypress.Commands.add('roleDetail', function () {
    roleAction.navigateToRoleModule().click()
    roleAction.returnRoleUrl().should('include', automataData.role_data.urlContent)
    roleAction.roleActionBtn().click()
    roleAction.viewRoleDetails().click()
})

Cypress.Commands.add('createRole', function () {

    let counter = 1; // Generate a unique timestamp
    const uniqueRoleName = `Automata Role_${counter}`; // Create a role name with the serial number
    counter += 1; // Increment the counter for the next test

    roleAction.navigateToRoleModule().click()
    roleAction.returnRoleUrl().should('include', automataData.role_data.urlContent)
    roleAction.addRoleBtn().click()
    roleAction.addRoleText().should('contain', automataData.role_data.addRoleText)
    roleAction.roleNameInput().type(uniqueRoleName)
    roleAction.roleDescriptionInput().type(automataData.role_data.roleDescription)
    roleAction.permissionDropdown_one().click()
    roleAction.permission_one().click()
    roleAction.permission_two().click()
    roleAction.permissionDropdown_two().click()
    roleAction.permission_three().click()
    roleAction.permission_four().click()
    //roleAction.createRoleBtn().click()
    cy.get('#navbarSupportedContent > ul > li:nth-child(1) > a').click()

})

// Disable role
Cypress.Commands.add('disableRoleRequest', function () {
    roleAction.roleDisableButton().click()
    roleAction.disableRoleSuccessPopup().should('contain', automataData.role_data.roleDisableSuccessMessage)
})

// Search card program steps
Cypress.Commands.add('searchCardPrograms', function () {
    cardProgramAction.navigateToCardProgramModule().click()
    cardProgramAction.returnCardProgramUrl().should('include', automataData.cardProgram_data.urlContent)
    cardProgramAction.cardProgramNameInput().type(automataData.cardProgram_data.cardProgramName)
})