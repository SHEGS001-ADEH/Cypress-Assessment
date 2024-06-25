/// <reference types= "Cypress" />

     // Navigate to the login page.              
     describe('Product Listing Page', () => {
     It('should display products after successful login', () => {
     cy.visit('https://www.saucedemo.com');
       
     // Enter username and password.
     cy.get('[data-test=username]').type('standard_user');
     cy.get('[data-test=password]').type('secret_sauce');
            
     // Submit the form.
     cy.get('[data-test="login-button"]').click()
 
     // From the product listing page, add a product to the cart.
     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
 
     cy.get('[data-test="shopping-cart-link"]')
     .should('be.visible') // Ensure the cart icon is visible before clicking
     .click(); // Click on the cart icon
 
     cy.get('[data-test="item-quantity"]')
     .should('be.visible') // Ensure the cart quantity element is visible
     .invoke('text')
     .then(quantityText => {
     const cartQuantity = parseInt(quantityText.trim(), 10);
         
     expect(cartQuantity).to.equal(1); // cart count should be 1 after clicking
    });
  });
 })    