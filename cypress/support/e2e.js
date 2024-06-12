// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

before(function () {
    cy.log('This should execute before all test cases')
})

beforeEach(function () {
    cy.log('This should execute before each test case'),
    cy.visit('/')
})

after(function () {
    cy.log('This should execute after all test cases')
})

afterEach(function () {
    cy.log('This should execute after each test case')
})

// Alternatively you can use CommonJS syntax:
// require('./commands')