/**
 * UnSuccessfully books a room in the same sesssion twice. 
 * 
 */
function setCalendar(){
    let date = new Date();
    let day1 = date.getDate() +1
    let day2 = date.getDate()+2
    return [day1, day2];
}


describe('Booking a Room ',() => {
    var days = setCalendar();

    it('Verifies a rooms can be booked twice by same user', () => {
      cy.visit('/')
      cy.url().should('contains','automationintesting')
  
        cy.get('button').contains('Book this room').click()
        //Load the calendar in edit mode
        //go back and forward through the applciation
        // check the contact info opens in edit mode
        cy.get('.rbc-calendar').within(($el)=>{
            //Check the user move back and forward with calendar
            cy.get('button').contains('Back').click()
            cy.get('button').contains('Next').click()
            cy.get('button').contains('Next').click()
            cy.get('button').contains(days[0]).click()
            cy.get('button').contains(days[1]).click()
        })
        cy.get('[placeholder="Firstname"]').type('Jane')
        cy.get('[placeholder="Lastname"]').type('Doe')
        cy.get('[placeholder="Email"]').first().type('janeDoe@gmail.com')
        cy.get('[placeholder="Phone"]').first().type('19999999999')
        cy.get('button').contains('Book').click()
        //Verifies the confrimation modal appears , tester to-do: data-test-id
        cy.get('.confirmation-modal').within(($el)=>{
            cy.contains('Booking Successful!')
           //confirm the dates 
            cy.get($el).contains(days)
            cy.get('button').contains('Close').click()
        })
        
        cy.get('.rbc-calendar').within(($el)=>{
            //Check the user move back and forward with calendar
            cy.get('button').contains('Back').click()
            cy.get('button').contains('Next').click()
            cy.get('rbc-row-content').within(($el)=>{
                cy.get('.el').trigger('mousedown', { button: 0 })
            cy.get('button').contains(days[0]).click()
            cy.get('button').contains(days[1]).click()
            })
        })
        cy.get('[placeholder="Firstname"]').type('Jane')
        cy.get('[placeholder="Lastname"]').type('Doe')
        cy.get('[placeholder="Email"]').first().type('janeDoe@gmail.com')
        cy.get('[placeholder="Phone"]').first().type('19999999999')
        cy.get('button').contains('Book').click()
        
        cy.get('.confirmation-modal').within(($el)=>{
            cy.contains('Booking Successful!')
           //confirm the dates 
            cy.get($el).contains(days)
            cy.get('button').contains('Close').click()
        })
    })
  })