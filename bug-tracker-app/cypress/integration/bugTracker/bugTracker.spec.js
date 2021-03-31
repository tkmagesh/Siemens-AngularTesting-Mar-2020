describe("Bug Tracker", () => {
    beforeEach(() =>{
        cy.visit('http://localhost:4200')
    })
    it('Should display the title', () =>{
        cy.get('h1')
            .should('contain', 'Bug Tracker')
    });
    it('Should display 4 bugs', () =>{
        cy.get('li')
            .should('have.length', 4);
    });
    it('should display the bug when added', () =>{
        cy.get('.edit > input[type="text"]')
            .type("Cypress is not working");
        cy.get('.edit > input[value="Add New"]')
            .click();
        cy.get('li')
            .should('have.length', 5);
    })
})