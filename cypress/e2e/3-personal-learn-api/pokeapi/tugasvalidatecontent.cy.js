///<reference types="cypress" />


describe('Automation API with Pokeapi', () => {  


    it('Successfully validate content abilities', () => {
        var pokemon = {
            "abilities": [
                {
                    "ability": {
                        "name": "limber",
                        "url": "https://pokeapi.co/api/v2/ability/7/"
                    },
                }
            ],
        }

        cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/', pokemon).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilieties).to.eq(pokemon.abilieties)
          })
    });
})
