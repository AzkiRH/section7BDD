/// <reference types="cypress" />

Cypress.Commands.add('loginViaApiSimple', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {
    cy.request('GET', `https://${email}:${password}@${Cypress.env('apiUrl')}/basic_auth`, )
    .then((response) => {
        expect(response.status).to.eq(200)
        cy.get(response.body).should('contain.text', 'Congratulations! You must have the proper credentials')
    })
})

describe('Basic Authentication', function() {
    it('Successfully login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });

    it('Successfully login using headers', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })

    it('Successfully login using cypress API simple custom command', () => {
        cy.loginViaApiSimple();
    })
})