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

  // it('Should go to Profile Page', () => {
  //   cy.get('[class="menu-custom-area"]').find('[class="menu-right"]')
  //       .then((menuRight) => {
  //         cy.get(menuRight).find('[class="lan-menu"]').then((lanMenu) => {
  //         cy.get(lanMenu).find('[class="dropdown"]').realHover('mouse').wait(1000)
  //       })
              
  //     })
  //     cy.get('[href="https://upscale.id/profile"]').click()
  //     cy.get('h2').should('be.visible')
  //     cy.get('[id="about"]').should('include.text', 'About')
  //     cy.wait(1000)
  // })

  it('Trying to Logout from the application', () => {
    cy.get('[class="menu-custom-area"]').find('[class="menu-right"]')
        .then((menuRight) => {
          cy.get(menuRight).find('[class="lan-menu"]').then((lanMenu) => {
          cy.get(lanMenu).find('[class="dropdown"]').realHover('mouse').wait(1000)
        })
              
      })
      cy.get('[href="https://upscale.id/member/logout"]').click()
      cy.wait(1000)
    })


describe('Navbar test', function() {

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

  it('Should change the language ID-EN', () => {
      cy.get('[class="menu-cnt"]').find('[class="menu-right"]')
        .then((menuRight) => {
          cy.get(menuRight).find('[class="lan-menu"]').then((lanMenu) => {
          cy.get(lanMenu).find('[class="dropdown"]').realHover('mouse').wait(1000)
        })
              
      })
      cy.get('[href="https://upscale.id?lang=en"]').click()
      cy.wait(1000)
      cy.get('h2').should('be.visible')
      cy.get('[class="slide-title2"]').should('include.text', 'Just focus on scaling your business and let us do the "Talent" things')
    })

  it('Should change the language EN-ID', () => {
      cy.get('[class="menu-cnt"]').find('[class="menu-right"]')
        .then((menuRight) => {
          cy.get(menuRight).find('[class="lan-menu"]').then((lanMenu) => {
          cy.get(lanMenu).find('[class="dropdown"]').realHover('mouse').wait(1000)
        })
              
      })
      cy.get('[href="https://upscale.id?lang=id"]').click()
      cy.wait(1000)
      cy.get('h2').should('be.visible')
      cy.get('[class="slide-title2"]').should('include.text', 'Kami membantu meng-handle semua urusan "talent", agar anda dapat fokus pada pengembangan bisnis')
    })
  })
})