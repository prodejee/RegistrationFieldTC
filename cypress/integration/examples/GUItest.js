/// <reference types="Cypress" />

describe('GUI testing', function()
{
    it('Hobby checkboxes', function()
        {
            cy.visit('http://demo.automationtesting.in/Register.html')
            cy.get('#checkbox1').should('not.be.checked').check().should('be.checked').and('have.value', 'Cricket')
            cy.get('#checkbox2').should('not.be.checked').check().should('be.checked').and('have.value', 'Movies')
            cy.get('#checkbox3').should('not.be.checked').check().should('be.checked').and('have.value', 'Hockey')


            cy.get('input[type=checkbox]').uncheck(['Cricket', 'Movies', 'Hockey']).should('not.be.checked', ['Cricket', 'Movies', 'Hockey'])
            cy.get('input[type=checkbox]').check(['Cricket', 'Hockey'])

            /*cy.get('input[value=FeMale]').should('be.visible').should('be.not.checked').check()*/
        }
    )

    it('Skills dropdown', function()
    {
        cy.get('#Skills').select('Android').should('have.value', 'Android')
    }
    )

    it('Languages', function()
    {
        cy.get('.ui-autocomplete-multiselect.ui-state-default.ui-widget').click()
        cy.get('.ui-corner-all').contains('Lithuanian').click()
        cy.get('.ui-corner-all').contains('Russian').click()


    }
    )

    it('Countries searchable dropdown', function()
    {
        cy.get('.select2-selection__arrow').click()
        cy.get('.select2-search__field').type('Jap').click().type('{enter}')


    }
    )

})