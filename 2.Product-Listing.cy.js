/// <reference types= "Cypress" />

    // Navigate to the login page.              
    describe('Product Listing Page', () => {
   it('should display products after successful login', () => {
   cy.visit('https://www.saucedemo.com');
   // Enter username and password.
   cy.get('[data-test=username]').type('standard_user');
   cy.get('[data-test=password]').type('secret_sauce');
           
   // Submit the form.
   cy.get('[data-test="login-button"]').click()
    
   // verify that a list of product is display.
   cy.get('[data-test="inventory-container"]').should('be.visible');
    
   // Check that each product has a name, price, and an "Add to Cart" button.
   cy.get('.inventory_item').each(($product) => {
   cy.wrap($product).within(() => {
    
   // Check that each product has a name.
   cy.get('.inventory_item_name').should('exist');
    
   // Check that each product has a price.
   cy.get('.inventory_item_price').should('exist');
              
   // Check that each product has an "Add to Cart" button.
   cy.get('.btn_inventory').each(($btn) => {
   cy.wrap($btn).should('have.attr','id');
    
   // Verify that the products are sorted by default.
   it('should verify products are sorted by name by default', () => {
               
   // Get all product names in the default order.
   cy.get('.inventory_item .inventory_item_name')
    .invoke('text')
    .then((productNames) => {
    const names = productNames.trim().split('\n');
    
   // Check if the names array is sorted in ascending order.
   expect(names).to.deep.equal([...names].sort());  
         
    it('should verify products are sorted by price by default', () => {
    // Get all product prices in the default order
    cy.get('.inventory_item .inventory_item_price')
   .invoke('text')
   .then((productPrices) => {
    const prices = productPrices.trim().split('\n').map(price => parseFloat(price.replace('$', '').trim()));
   // Check if the prices array is sorted in ascending order
   expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
    
    
    });
    });
   });
  });
 });
 });
  });
  });
  });