class Test{
    getLoginEmail()
    {
return cy.get('#Email')
    }
    getLoginPassword()
    {
return cy.get('#Password')
    }
    getLoginButton()
    {
return cy.get('#btnLogin')
    }
}
export default Test;