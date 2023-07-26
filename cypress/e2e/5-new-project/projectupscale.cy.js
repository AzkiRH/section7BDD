/// <reference types="cypress" />

describe('End-to-End Testing - Validate Login',{ testIsolation: false }, () => {
  //beforeEach('Open application', () => {
    //cy.visit('https://upscale.id/')
    //cy.reload()
  //})
  it('Access to Website Upscale.id', () => {
    cy.visit('https://upscale.id/')
  })

  it('Trying to Login With Unregistered Account', () => {
    cy.get('[class="btn btn-border btn-login btn-xs light"]').click()
    cy.get('[class="modal-content"]').should('be.visible')
    cy.get('#email').type('arrrrah99@gmail.com')
    cy.get('#Password').type('azkiboys22')
    cy.get('#login').click()
    cy.contains('Invalid username or password!').should('be.visible')
    cy.get('#email').clear()
    cy.get('#Password').clear()
  })

  it('Trying to Login With Registered Account', () => {
    //cy.get('[class="btn btn-border btn-login btn-xs light"]').click()
    //cy.get('[class="modal-content"]').should('be.visible')
    cy.get('#email').type('azkirh.jobs@gmail.com')
    cy.get('#Password').type('azkiboys22')
    cy.get('#login').click()
    cy.contains('Hello Azki Rafsanjani Hermawan').should('be.visible')
  })

  it('Trying to Logout from the application', () => {
    // cy.get('[class="btn btn-border btn-login btn-xs light"]').click()
    // cy.get('[class="modal-content"]').should('be.visible')
    // cy.get('#email').type('azkirh.jobs@gmail.com')
    // cy.get('#Password').type('azkiboys22')
    // cy.get('#login').click()
    // cy.contains('Hello Azki Rafsanjani Hermawan').should('be.visible')
    //cy.get('[class="menu-custom-area"]').find('class="dropdown"').trigger('mouseover').then((menu) => {
    //cy.get('Logout').click()
    cy.get('[class="menu-custom-area"]').find('class="menu-right"').then((menuRight) => {

    })
  })

describe('Navbar test', function() {
    before(() => {
        cy.visit('https://upscale.id/')
    })

  it('Should display For Business content', () => {
      cy.contains('For Business').click()
      cy.url().should('include', 'help-business')
      cy.get('h1').should('be.visible')
      cy.get('[class="slide-title3"]').should('include.text', ' Service kami cocok untuk membantu berbagai skala perusahaan')
    })
  
  it('Should display For Talent content', () => {
      cy.contains('For Talent').click()
      cy.url().should('include', 'help-talent')
      cy.get('h1').should('be.visible')
      cy.get('#desc-talent').should('include.text', 'Upgrade kemampuan dan networkmu')
    })

  it('Should display Home content', () => {
      cy.contains('Home').click()
      cy.url().should('include', 'https://upscale.id/')
      cy.get('h2').should('be.visible')
      cy.get('[class="slide-title2"]').should('include.text', 'Kami membantu meng-handle semua urusan "talent", agar anda dapat fokus pada pengembangan bisnis')
    })
  })
})