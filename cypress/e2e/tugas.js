/// <reference types="cypress" />

import tugaspage from './tugas.page.js';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');


Given('I open the feedback page', () => {
    tugaspage.visit();
})


When('I input feedback form and submit', () => {
    tugaspage.fillName();
    tugaspage.fillEmail();
    tugaspage.fillSubject();
    tugaspage.fillComment();
    tugaspage.submit123();

})

Then('I should see the message that the feedback i gave, succses and will be reviewed by CS staff', () => {
    cy.get('#feedback-title').should('be.visible');
})

//Scenario: Submit something for feedback
        //Given I open the feedback page
        //When I input feedback form and submit
        //Then I should see the message that the feedback i gave, succses and will be reviewed by CS staff