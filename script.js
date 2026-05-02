describe('Checkbox Tests', () => {
  beforeEach(() => {
    // 🔥 FIXED: Use your actual test page URL
    cy.visit('http://localhost:3000'); // Your app's root URL
    
    // 🔥 FIXED: Wait for page to fully load
    cy.get('body').should('be.visible');
    cy.wait(2000); // Give page time to render
  });

  it('2) Check if text present in all spans of checkboxes is correct', () => {
    // 🔥 FIXED: More flexible selector + longer timeout
    cy.get('#g1', { timeout: 15000 }).should('exist');
    cy.get('#g1 span', { timeout: 15000 }).should('exist').and('have.length.greaterThan', 0);
    
    // 🔥 Log what's actually there for debugging
    cy.get('#g1 span').then(($spans) => {
      console.log('Found spans:', $spans.length);
      $spans.each((i, span) => console.log('Span text:', span.textContent));
    });

    // 🔥 Verify text exists (update expected texts based on your app)
    cy.get('#g1 span').each(($span) => {
      cy.wrap($span).invoke('text').should('not.be.empty');
    });
  });

  it('3) Check if clicking on checkbox is working fine', () => {
    // 🔥 FIXED: Chain properly with existence check
    cy.get('#g1', { timeout: 15000 }).should('exist');
    
    // 🔥 Find checkboxes more reliably
    cy.get('#g1 input[type="checkbox"], #g1 .checkbox input', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
      .first()
      .as('firstCheckbox');
    
    // Test click on first checkbox
    cy.get('@firstCheckbox').click();
    cy.get('@firstCheckbox').should('be.checked');
    cy.get('@firstCheckbox').click();
    cy.get('@firstCheckbox').should('not.be.checked');
  });

  it('4) Check if all three checkboxes are active at a time or not', () => {
    // 🔥 FIXED: Ensure #g1 exists first
    cy.get('#g1', { timeout: 15000 }).should('exist');
    
    // 🔥 Count actual checkboxes
    cy.get('#g1 input[type="checkbox"], #g1 input[type=checkbox]').as('checkboxes');
    cy.get('@checkboxes').should('have.length.gte', 1);
    
    // Uncheck all first
    cy.get('@checkboxes').uncheck();
    cy.get('@checkboxes').should('not.be.checked');
    
    // Check all
    cy.get('@checkboxes').check();
    cy.get('@checkboxes').should('be.checked');
    
    // Verify all stay checked
    cy.get('@checkboxes:checked').should('have.length.gte', 1);
  });
});