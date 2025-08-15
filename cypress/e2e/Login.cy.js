describe('Login Page - Positive Test Case', () => {
  it('should log in successfully with valid credentials', () => {
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
  })
})


describe('Login Page - Negative Test Case', () => {
  it('should display an error message for invalid credentials', () => {
    cy.visit("/"); // Uses baseUrl from config

    cy.contains('Hi')
    cy.get('.sc-dGCmGc > img')
    cy.get('div > .sc-gEvEer')

    //Enter an Invalid Email 
    cy.get('.leKEhR > .sc-gdyeKB > .sc-ecPEgm').type('kui@mailinator.com', { delay: 200 })


    //Enter an Invalid Password
    cy.get('.iSACPt > .sc-gdyeKB > .sc-ecPEgm').type('1234', { delay: 200 })

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

     // Verify the error message is displayed
     cy.contains('Incorrect email or password')

  })
})


