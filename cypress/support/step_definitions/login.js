import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given('I launch the {string} url', (url) => {
    cy.visit(url)
})
When('I type {string} in the {string} field', (inputText, identifier) => {
    cy.get('#' + identifier).type(inputText)

})

When('I click the {string} button', (identifier) => {
    cy.get('#' + identifier).click();
})
Then('I {string} see the URL contains {string} text', (checkCase, assertionText) => {
    switch (checkCase) {
        case "should":
            cy.url().should('include', assertionText);
            break;
        case "should not":
            cy.url().should('not.include', assertionText);
            break;
        default:
            cy.log("Run the default case here")
    }
})

Then('I {string} see the text {string} in the {string} text area', (checkCase, assertionText, identifier) => {
    switch (checkCase) {
        case "should":
            cy.get(identifier).should('contain', assertionText)
            break;
        case "should not":
            cy.get(identifier).should('not.contain', assertionText)
            break;
        default:
            cy.log("Run the default case here")
    }

})
Then('I {string} see the {string} button is present', (checkCase, identifier) => {
    switch (checkCase) {
        case "should":
            cy.contains(identifier).should('be.visible')
            break;
        case "should not":
            cy.contains(identifier).should('not.be.visible')
            break;
        default:
            cy.log("Run the default case here")
    }

})

Then('I {string} see {string} message is displayed', (checkCase, identifier) => {
    switch (checkCase) {
        case "should":
            cy.get('#' + identifier).should('be.visible')
            break;
        case "should not":
            cy.get('#' + identifier).should('not.be.visible')
            break;
        default:
            cy.log("Run the default case here")
    }


})

When('I {string} see {string} message is {string}', (checkCase, identifier, assertionText) => {
    switch (checkCase) {
        case "should":
            cy.get('#' + identifier).should('have.text', assertionText)
            break;
        case "should not":
            cy.get('#' + identifier).should('not.have.text', assertionText)
            break;
        default:
            cy.log("Run the default case here")
    }
})

When('I intercept the {string} request with its url: {string} as {string} alias', (method, url, alias) => {
    cy.intercept({
        method,
        url
    }, (req) => {
        console.log(req.url);
        req.continue()
    }).as(alias)
});

When('I wait for the response to the intercepted request {string}', (request, alias) => {
    let requests = alias ? [request, ...alias.raw().flat()] : request;
    cy.wait(requests);
    cy.wait(1000);
});

When('I wait for {int} seconds',(waitSeconds)=>{
    cy.wait(waitSeconds)
})