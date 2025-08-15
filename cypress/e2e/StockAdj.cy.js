describe('Stock Adjustment - Positive Test Case', () => {
    it(' Increase stock for a single product by a valid number', () => {
        cy.visit("/"); // Uses baseUrl from config

        cy.contains('Hi')
        cy.get('div > .sc-dGCmGc')

        //Enter a Valid Email
        cy.get('.leKEhR > .sc-gdyeKB > .sc-ecPEgm').type('key@mailinator.com', { delay: 200 })

        //Enter a Valid Password
        cy.get('.iSACPt > .sc-gdyeKB > .sc-ecPEgm').type('123', { delay: 200 })

        //Forgot Paswword? Recover

        //  cy.get('.bBmdoj') 
        //  cy.get('.bBmdoj > .sc-gEvEer').click()
        //  cy.get('.sc-dGCmGc > .sc-gEvEer')
        //  cy.get('.sc-dGCmGc > .sc-bkSUFG')
        //  cy.get('[for="email"]')
        //  cy.get('.sc-eyvILC').type('kutigi@mailinator.com' , { delay:200 } )
        //  cy.get('.sc-kYxDKI').click()
        //  cy.get('.sc-fXSgeo').click()

        //Login Button
        cy.get('.sc-kAyceB').click()
        cy.wait(3000)

        // Enter MAZDA Shop
        cy.get(':nth-child(9) > [style="display: flex; justify-content: space-between; width: 90%;"] > .bLOynP > p').click()

        //Enter Stock Adjustment
        cy.get(':nth-child(4) > .kaPnLv > .dOaKbF > svg')
                

        
    });
});
