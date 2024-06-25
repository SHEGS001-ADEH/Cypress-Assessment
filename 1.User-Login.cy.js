/// <reference types= "Cypress" />

     // Navigate to the login page.
     describe('User Login', () => {
     it('should successfully log in with valid credentials', () => {
     cy.visit('https://www.saucedemo.com');
 
     // Fill in the login form with valid credentials (standard_user and secret_sauce).
     cy.get('[data-test=username]').type('standard_user');
     cy.get('[data-test=password]').type('secret_sauce');
 
     // Submit the form.
     cy.get('[data-test=login-button]').click();
 
     // Verify that the user is redirected to the product listing page.
     cy.get('.inventory_list').should('be.visible');
   
     // Verify that the URL is correct and the page title is "Swag Labs".
     cy.url().should('include','/inventory.html');
     cy.title().should('be.equals','Swag Labs');
 
     // Log out and verify the user is redirected back to the login page.
     cy.get('#react-burger-menu-btn').click({ force: true });
     cy.get('[data-test="logout-sidebar-link"]').click({ force: true });
     cy.url().should('include','www.saucedemo.com/');
 
   });
 });