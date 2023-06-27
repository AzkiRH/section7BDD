/// <reference types="cypress" />

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');


Given('I open the feedback page', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
})


When('I input feedback form and submit', () => {
    cy.get('#name').type('azki');
    cy.get('#email').type('azkirh@gmail.com');
    cy.get('#subject').type('give the feedback');
    cy.get('#comment').type('this is some feedback');
    cy.contains('Send Message').click();
})

Then('I should see the message that the feedback i gave, succses and will be reviewed by CS staff', () => {
    cy.get('#feedback-title').should('be.visible');
})

//Scenario: Submit something for feedback
        //Given I open the feedback page
        //When I input feedback form and submit
        //Then I should see the message that the feedback i gave, succses and will be reviewed by CS staff