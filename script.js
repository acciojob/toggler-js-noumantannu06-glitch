describe('Checkbox Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Adjust to your test page
  });

  it('1) Verifies clicking checkbox works', () => {
    // Ensure element is visible/actionable first
    cy.get('#good.toggle')
      .should('be.visible')
      .should('not.be.checked') // Confirm initial unchecked state
      .click({ force: true });  // Click to toggle on
    
    // Assert it becomes checked (with longer timeout for async)
    cy.get('#good.toggle')
      .should('be.checked', { timeout: 10000 });
    
    // Optional: Toggle off and verify
    cy.get('#good.toggle').click({ force: true });
    cy.get('#good.toggle').should('not.be.checked');
  });

  it('2) Checks if all three checkboxes can be active simultaneously', () => {
    // Define all checkboxes (adjust selectors if different)
    const checkboxes = ['#good.toggle', '#better.toggle', '#best.toggle'];
    
    // Click all three
    checkboxes.forEach(id => {
      cy.get(id).click({ force: true });
    });
    
    // Wait briefly for any async updates
    cy.wait(500);
    
    // Assert each is checked (fails if app prevents all three)
    checkboxes.forEach(id => {
      cy.get(id).should('be.checked', { timeout: 8000 });
    });
    
    // Alternative: Verify actual state (handles mutual exclusivity)
    // cy.get('input[id$=".toggle"]:checked').should('have.length', 3);
    // Or check max 2: cy.get('input[id$=".toggle"]:checked').should('have.length.lte', 2);
  });
});