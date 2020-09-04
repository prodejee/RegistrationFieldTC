const { Register } = require("../../support/Register/Register");
const { RegisterLocators } = require("../../support/Register/Locators/RegisterLocators");


describe('Registration page TC02', () => {
    before(() => {
      // Preconditions
      cy.visit('http://demo.automationtesting.in/Register.html')
    });
 
    context(`1. Verify 'Languages' field and select 4 languages.`, () => {
        it(`'Languages' field is visible and 4 languages are selected.`, () => {
            Register.verifyElement(RegisterLocators.languageMenu);
            Register.selectOption(RegisterLocators.languageSelector, ['Arabic', 'English', 'Lithuanian', 'Japanese']);
        });
    });
 
    context(`2. Verify 'Last Name' field and enter a value`, () => {
        it(`'Last Name' field is visible and value is entered`, () => {
            Register.verifyElement(RegisterLocators.lastName);
            Register.typeText(RegisterLocators.lastName, 'Radvilavicius');

        });
    });

});