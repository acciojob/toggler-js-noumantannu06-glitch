describe('Check for checkboxes - COMPLETE SOLUTION', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(2000);
  });

  it('1) check if three checkboxes are present', () => {
    cy.get('input[type="checkbox"]').should('have.length', 3);
  });

  it('2) check if text present in all spans of checkboxes is correct', () => {
    cy.get('input[type="checkbox"]').should('have.length', 3);
    
    cy.get('input[type="checkbox"]').each(($checkbox, index) => {
      // Find span associated with this checkbox
      cy.wrap($checkbox)
        .closest('label')  // Common pattern
        .find('span')
        .or($checkbox.siblings('span'))  // Alternative
        .invoke('text')
        .should('not.be.empty')
        .then((text) => {
          cy.log(`Checkbox ${index + 1}: "${text.trim()}"`);
        });
    });
  });

  it('3) check if clicking on checkbox is working fine', () => {
    cy.get('input[type="checkbox"]:eq(0)')
      .click()
      .should('be.checked');
  });

  it('4) check if all three checkboxes are active at a time or not', () => {
    // Uncheck all
    cy.get('input[type="checkbox"]').uncheck();
    
    // Check all three
    cy.get('input[type="checkbox"]').each(($cb) => {
      cy.wrap($cb).check();
    });
    
    // All should be checked
    cy.get('input[type="checkbox"]:checked').should('have.length', 3);
  });
});