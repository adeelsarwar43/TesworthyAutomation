/// <reference types= "Cypress" />
import { each } from "cypress/types/bluebird";
import Test from "../../support/Classes/Test";
describe('Testworthy Smoke Testing', function()
{
     
     beforeEach(function() {
 // runs once before all tests in the block
    cy.visit('https://testworthy.us/')
    cy.fixture('example').then(function(data)
 {
            this.data=data
       })
       })
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
it('Login',function() {
     const test = new Test()
     cy.contains('Log In').click()
test.getLoginEmail().type(this.data.email)
test.getLoginPassword().type(this.data.password)
test.getLoginButton().click()


})
})