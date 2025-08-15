describe('Forgot Password - Negative Test Case', () => {
  it('should display an error when an invalid email is provided', () => {
    cy.visit("/"); // Uses baseUrl from config

    cy.get('.kXsFMo')//Forgot Password
    cy.contains('Forgot Password')
    cy.get('.kXsFMo > .sc-gEvEer') // To click on the Forgot Password
    cy.get('.kXsFMo > .sc-gEvEer').click()

    // Redirects you to the recover page
    cy.get('.sc-leSDtu > .sc-gEvEer')
    cy.contains('Recover Password')
    cy.get('.sc-leSDtu > .sc-dGCmGc')
    cy.contains('Enter your registered email, a password reset link will be sent to your email')
    cy.get('[for="email"]')
    cy.get('.sc-ecPEgm').type('Musa02@mailinator.com', { delay: 200 })// Input Incorrect Email
    cy.get('.sc-kAyceB', { delay: 200 }).click() // Click on the Recover Button
    
    // Wait to allow the error notification to appear
    cy.wait(2000); // Delay for 2 seconds

    // cy.contains('Error! No account for the email or mobile phone number')// Error message displayed
   
    cy.get('.message > p')// Error message displayed

    //Forgot Paswword? Recover

    //  cy.get('.bBmdoj') 
    //  cy.get('.bBmdoj > .sc-gEvEer').click()
    //  cy.get('.sc-dGCmGc > .sc-gEvEer')
    //  cy.get('.sc-dGCmGc > .sc-bkSUFG')
    //  cy.get('[for="email"]')
    //  cy.get('.sc-eyvILC').type('kutigi@mailinator.com' , { delay:200 } )
    //  cy.get('.sc-kYxDKI').click()
    //  cy.get('.sc-fXSgeo').click()


  })
})


describe('Forgot Password - Positive Test Case', () => {
  it('should display a password reset link when a valid email is provided', () => {
    cy.visit("/"); // Uses baseUrl from config

    cy.get('.kXsFMo')//Forgot Password
    cy.contains('Forgot Password')
    cy.get('.kXsFMo > .sc-gEvEer') // To click on the Forgot Password
    cy.get('.kXsFMo > .sc-gEvEer').click()

    // Redirects you to the recover page
    cy.get('.sc-leSDtu > .sc-gEvEer')
    cy.contains('Recover Password')
    cy.get('.sc-leSDtu > .sc-dGCmGc')
    cy.contains('Enter your registered email, a password reset link will be sent to your email')
    cy.get('[for="email"]')
    cy.get('.sc-ecPEgm').type('auna@mailinator.com', { delay: 200 })// Input Incorrect Email
    cy.get('.sc-kAyceB', { delay: 200 }).click() // Click on the Recover Button
    
    // Wait to allow the error notification to appear
    cy.wait(2000); // Delay for 2 seconds

    // cy.contains('Error! No account for the email or mobile phone number')// Error message displayed
   
    cy.get('.message > p')//  message displayed

    //Forgot Paswword? Recover

    //  cy.get('.bBmdoj') 
    //  cy.get('.bBmdoj > .sc-gEvEer').click()
    //  cy.get('.sc-dGCmGc > .sc-gEvEer')
    //  cy.get('.sc-dGCmGc > .sc-bkSUFG')
    //  cy.get('[for="email"]')
    //  cy.get('.sc-eyvILC').type('kutigi@mailinator.com' , { delay:200 } )
    //  cy.get('.sc-kYxDKI').click()
    //  cy.get('.sc-fXSgeo').click()


  })
})
