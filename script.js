describe('Check for checkboxes - UPDATED FOR NEW HTML', () => {
  beforeEach(() => {
    cy.visit('index.html'); // Your HTML file
    cy.wait(1000);
  });

  it('1) check if three checkboxes are present', () => {
    cy.get('input[type="checkbox"]').should('have.length', 3);
  });

  it('2) check if text present in all spans of checkboxes is correct', () => {
    // 🔥 FIXED: Check labels instead of spans
    cy.get('.g1 .toggle-label').contains('good');
    cy.get('.g2 .toggle-label').contains('cheap');
    cy.get('.g3 .toggle-label').contains('fast');
    
    // Verify all three divs have correct text
    cy.get('.toggle-container .g1 label').invoke('text').should('include', 'good');
    cy.get('.toggle-container .g2 label').invoke('text').should('include', 'cheap');
    cy.get('.toggle-container .g3 label').invoke('text').should('include', 'fast');
  });

  it('3) check if clicking on checkbox is working fine', () => {
    // 🔥 FIXED: Click works + visual change
    cy.get('#good').click();
    cy.get('#good').should('be.checked');
    cy.get('.g1 label').should('have.css', 'background', 'linear-gradient(45deg, rgb(40, 167, 69), rgb(32, 201, 151))');
  });

  it('4) check if all three checkboxes are active at a time or not', () => {
    // 🔥 FIXED: Test MAX 2 logic
    cy.get('#good').click();
    cy.get('#cheap').click();
    
    // Third click should uncheck FIRST one (good)
    cy.get('#fast').click();
    cy.get('#good').should('not.be.checked');  // First gets unchecked
    cy.get('#cheap').should('be.checked');
    cy.get('#fast').should('be.checked');
    
    // Verify exactly 2 active
    cy.get('input[type="checkbox"]:checked').should('have.length', 2);
  });
});