describe('Checkbox Tests', () => {
  beforeEach(() => {
    // Visit your page with checkboxes
    cy.visit('/your-checkbox-page'); // Replace with your actual page URL
    
    // Wait for the checkboxes container to load
    cy.get('#checkbox-container', { timeout: 10000 }).should('be.visible');
  });

  it('2) Check if text present in all spans of checkboxes is correct', () => {
    // Check if checkbox spans exist and have correct text
    cy.get('#g1 span', { timeout: 10000 }).should('be.visible').and('have.length.greaterThan', 0);
    
    // Replace these expected texts with your actual checkbox labels
    const expectedTexts = [
      'Checkbox 1 Label',
      'Checkbox 2 Label', 
      'Checkbox 3 Label'
    ];

    cy.get('#g1 span').each(($span, index) => {
      cy.wrap($span)
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.equal(expectedTexts[index]);
        });
    });
  });

  it('3) Check if clicking on checkbox is working fine', () => {
    // First verify the checkbox container exists
    cy.get('#g1', { timeout: 10000 }).should('exist');
    
    // Click on each checkbox and verify it toggles
    cy.get('#g1 input[type="checkbox"]').each(($checkbox) => {
      cy.wrap($checkbox)
        .should('be.visible')
        .then(($el) => {
          const isChecked = $el.prop('checked');
          
          // Click the checkbox
          cy.wrap($el).click();
          
          // Verify it toggled state
          cy.wrap($el).should('have.prop', 'checked', !isChecked);
        });
    });
  });

  it('4) Check if all three checkboxes are active at a time or not', () => {
    // Reset all checkboxes to unchecked state first
    cy.get('#g1 input[type="checkbox"]').each(($checkbox) => {
      if ($checkbox.prop('checked')) {
        cy.wrap($checkbox).click();
      }
    });

    // Verify all are unchecked initially
    cy.get('#g1 input[type="checkbox"]').should('have.length', 3);
    cy.get('#g1 input[type="checkbox"]').should('not.be.checked');

    // Try to check all three checkboxes
    cy.get('#g1 input[type="checkbox"]').each(($checkbox) => {
      cy.wrap($checkbox).click();
    });

    // Check if all are checked (or verify your specific behavior)
    cy.get('#g1 input[type="checkbox"]').should('all.be.checked');

    // Test if they can all remain active simultaneously
    cy.get('#g1 input[type="checkbox"]').should('have.length', 3);
    cy.get('#g1 input[type="checkbox"]:checked').should('have.length', 3);
  });

  // Bonus: Additional robust checkbox tests
  it('Bonus: Comprehensive checkbox functionality test', () => {
    // Test individual toggle functionality
    cy.get('#g1 input[type="checkbox"]:eq(0)').as('firstCheckbox');
    cy.get('#g1 input[type="checkbox"]:eq(1)').as('secondCheckbox');
    cy.get('#g1 input[type="checkbox"]:eq(2)').as('thirdCheckbox');

    // Test first checkbox toggle
    cy.get('@firstCheckbox').click().should('be.checked');
    cy.get('@firstCheckbox').click().should('not.be.checked');

    // Test second checkbox toggle
    cy.get('@secondCheckbox').click().should('be.checked');
    
    // Test third checkbox toggle  
    cy.get('@thirdCheckbox').click().should('be.checked');

    // Verify all can be checked independently
    cy.get('@firstCheckbox').click().should('be.checked');
    cy.get('#g1 input[type="checkbox"]:checked').should('have.length', 3);
  });
});