/// <reference types= "Cypress" />

   // Navigate to the Product page.
   describe('User should be able to filter and sort product after login', () => {
    it('should successfully log in with valid credentials', () => {
      //login
    cy.visit('https://www.saucedemo.com');
      
   // Fill in the login form with valid credentials (standard_user and secret_sauce).
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
      
    // Submit the form.
    cy.get('[data-test=login-button]').click(); 
     
    // Select 'Price (low to high)' from the dropdown menu.
    cy.get('[data-test="product-sort-container"]')
   .should('be.visible')
   .select('Price (low to high)')

    // Verify that the products are displayed in ascending order of price
    cy.get('[data-test="inventory-item-name"]').then($prices => {
    
   // Array of prices from the inventory items 
    const prices = $prices.toArray().map(element => {
    return Cypress.$(element).text().trim(); // Assuming prices are already in correct format ('$X.XX')
  });

    // Sort numeric prices in ascending order
   const sortedPrices = [...prices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')));

    // Log sorted prices
     cy.log('Sorted Prices:');
    sortedPrices.forEach(price => {
     cy.log(`$${price}`); // Log each price formatted with a dollar sign
  });

    // Assertion: Compare original prices with sorted prices
    expect(prices).to.deep.equal(sortedPrices);
});
});
});