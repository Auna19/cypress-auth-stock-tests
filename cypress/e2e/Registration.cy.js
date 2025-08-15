
describe.only('Create Account - Positive Test Case', () => {
    it('should create an account successfully with valid inputs', () => {
        cy.visit("/"); // Uses baseUrl from config

        //Click on the "Create Account" button
        // cy.get('.eRUPlV > .sc-gEvEer').click()
        cy.get('.fdaloY > .sc-kAyceB').click() 
            
        //Fill in the registration form with valid details
        cy.get('img')
        cy.contains('Welcome to Timart Business App')
        cy.get('.sc-cuHhuN > .sc-jJcwTH')
        cy.contains('Please create an account to continue')
        cy.get('.sc-fqkvVR > :nth-child(1) > :nth-child(1)')
        cy.get(':nth-child(1) > .sc-gdyeKB > .sc-ecPEgm').type('Joy', { delay: 200 })//Firstname
        cy.get('.sc-fqkvVR > :nth-child(2) > :nth-child(1)')
        cy.get(':nth-child(2) > .sc-gdyeKB > .sc-ecPEgm').type('Ola', { delay: 200 })//Lastname
        cy.get(':nth-child(3) > label')
        cy.get('.form-control').type('08129989231115', { delay: 200 })//Phone Number
        cy.get('[for="email"]')
        cy.get(':nth-child(4) > .sc-gdyeKB > .sc-ecPEgm').type('Joy004@mailinator.com', { delay: 200 })//Email
        cy.get('[for="password"]')
        cy.get(':nth-child(5) > .sc-gdyeKB > .sc-ecPEgm').type('123')//Password
        cy.get('.sc-dSIIpw')//show
        cy.get(':nth-child(6) > :nth-child(1)')//Referral Code
        cy.get(':nth-child(6) > .sc-gdyeKB > .sc-ecPEgm')

        // Submit the form
        cy.get('.sc-kAyceB', { delay: 200 }).click(), { delay: 200 }


        // Verify the user is redirected to a confirmation page

        // cy.get('[style="width: fit-content;"] > .sc-fqkvVR')



    })
})



describe('Create Account - Negative Test Case', () => {
    it('should display an error when passwords do not match', () => {
        cy.visit("/"); // Uses baseUrl from config

        //Click on the "Create Account" button
        cy.get('.eRUPlV > .sc-gEvEer').click()

        //Fill in the registration form with valid details
        
        cy.get('img')
        cy.get('.sc-fUBkdm > .sc-dGCmGc')
        cy.contains('Welcome to Timart Business App')
        cy.get('.sc-fUBkdm > .sc-gEvEer')
        cy.contains('Please create an account to continue')
        cy.get('.sc-fqkvVR > :nth-child(1) > :nth-child(1)')
        cy.get(':nth-child(1) > .sc-gdyeKB > .sc-ecPEgm').type('Joy', { delay: 200 })//Firtname
        cy.get('.sc-fqkvVR > :nth-child(2) > :nth-child(1)')
        cy.get(':nth-child(2) > .sc-gdyeKB > .sc-ecPEgm').type('Ola', { delay: 200 })//Lastname
        cy.get(':nth-child(3) > label')
        cy.get('.form-control').type('0812990223115', { delay: 200 })//Phone Number
        cy.get('[for="email"]')
        cy.get(':nth-child(4) > .sc-gdyeKB > .sc-ecPEgm').type('Joy01npx cypress open2@mailinator.com', { delay: 200 })//Email
        cy.get('[for="password"]')
        cy.get(':nth-child(5) > .sc-gdyeKB > .sc-ecPEgm').type('123')//Password
        cy.get('.sc-dSIIpw')//show
        cy.get(':nth-child(6) > :nth-child(1)')//Referral Code
        cy.get(':nth-child(6) > .sc-gdyeKB > .sc-ecPEgm')

        
      
        // Submit the form
        cy.get('.sc-kAyceB').click()

        //Verify the error message is displayed
        cy.contains('Email already exists')


    })
})

