/// <reference types="cypress" />

describe('End-to-End Testing - Midtrans Demo', () => {
    beforeEach('Open application', () => {
      cy.visit('https://demo.midtrans.com/')
      cy.reload()
    })
  
    it('Test GoPay Payment Method', {defaultCommandTimeout: 20000},() => {
        cy.wait(1000)
        cy.get('[class="btn buy"]').click()

        cy.get('[class="cart-content buying"]').should('be.visible')
        // cy.get('[class="cart-checkout"]').click({force: true, waitForAnimations: false, animationDistanceThreshold: 20})
        cy.get('[class="cart-checkout"]').click()

        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            // cy.log($body)
            // Gopay
            let stripe = cy.wrap($body)
            cy.log(stripe)
            stripe.find('[alt="GoPay"]').click()

            // Click button "Back to merchant"
            stripe = cy.wrap($body)
            stripe.find('[class="btn full primary  btn-theme"]').click()
        })

    })

    it('Test Shopeepay Payment Method', {defaultCommandTimeout: 20000},() => {
        cy.wait(1000)
        cy.get('[class="btn buy"]').click()

        cy.get('[class="cart-content buying"]').should('be.visible')
        // cy.get('[class="cart-checkout"]').click({force: true, waitForAnimations: false, animationDistanceThreshold: 20})
        cy.get('[class="cart-checkout"]').click()

        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            // cy.log($body)
            // Gopay
            let stripe = cy.wrap($body)
            cy.log(stripe)
            stripe.find('[alt="ShopeePay"]').click()

            // Click button "Back to merchant"
            stripe = cy.wrap($body)
            stripe.find('[class="btn full primary  btn-theme"]').click()
        })

    })

    it('Test BNI Payment Method', {defaultCommandTimeout: 20000},() => {
        cy.wait(1000)
        cy.get('[class="btn buy"]').click()

        cy.get('[class="cart-content buying"]').should('be.visible')
        // cy.get('[class="cart-checkout"]').click({force: true, waitForAnimations: false, animationDistanceThreshold: 20})
        cy.get('[class="cart-checkout"]').click()

        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)

            // BCA
            stripe.find('[alt="BNI"]').click()
            stripe = cy.wrap($body)
            stripe.find('[class="bank-list-layout"]').then(paymentList => {
                cy.get(paymentList).find('[class="bank-list"]').eq(0).then(bni => {
                    cy.get(bni).click()
                    cy.wait(2000)

                    // Click button "Back to merchant"
                    stripe = cy.wrap($body)
                    stripe.find('[class="btn full primary  btn-theme"]').click() 
                })
            })
        })  
    })
})