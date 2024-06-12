
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