/**
 * Verifies test scenairos for the main page.
 *  Cypress encourages the combination of test scenarios 
 *
 */

describe('Verifies the main page', () => {
  it('Verify the Home Page Displays', () => {
    cy.visit('/')
    cy.url().should('contains','automationintesting')
// verify the page title     cy.contains()
    cy.get(".hotel-room-info").each(($el) =>{
      cy.get('button').contains('Book this room').should('be.visible')
    })

//Test the Contact Form with the rest of Main Page 
    cy.get('form').within(($el)=>{
      cy.get('[data-testid="ContactName"]').should('have.attr','placeholder','Name')
      cy.get('[data-testid="ContactName"]').type('Jane Doe')
      cy.get('[data-testid="ContactEmail"]').should('have.attr','placeholder','Email')
      cy.get('[data-testid="ContactEmail"]').type('janeDoe@gmail.com')
      cy.get('[data-testid="ContactPhone"]').should('have.attr','placeholder','Phone')
      cy.get('[data-testid="ContactPhone"]').type( '14434449999')
      cy.get('[data-testid="ContactSubject"]').should('have.attr','placeholder','Subject')
      cy.get('[data-testid="ContactSubject"]').type('Test Email')
      cy.get('[data-testid="ContactDescription"]').should('not.have.attr','placeholder')
      cy.get('[data-testid="ContactDescription"]').type('Aenean porttitor mauris sit amet lacinia molestie. In posuere accumsan aliquet. Maecenas sit amet nisl massa. Interdum et malesuada fames ac ante.')
      cy.get('button').contains('Submit').click()

      
    })

  })
})