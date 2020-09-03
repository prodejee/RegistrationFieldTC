/// <reference types="cypress" />

describe('Locating Elements', function()
{
    it('Verify locator types', function()
        {
            cy.visit("https://demo.nopcommerce.com/") /// opens URL
            cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") /// enters value into search box
            cy.get(".search-box-button[value='Search']").click() /// clicks on the search button
            cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()
            cy.get("#product_enteredQuantity_4").clear().type('4')
            cy.get("#add-to-cart-button-4").click()
            cy.get(".ajax-loading-block-window").should('not.be.visible')
            cy.get("#topcartlink > a > span.cart-label").click()
            cy.get(".product-unit-price").contains('$1,800.00')
        }
    )
})

