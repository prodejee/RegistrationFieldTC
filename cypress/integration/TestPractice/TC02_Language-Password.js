const { Register } = require("../../support/Register/Register");
const { RegisterLocators } = require("../../support/Register/Locators/RegisterLocators");


describe('Registration page TC02', () => {
    before(() => {
      // Preconditions
      cy.signIn({email: 'a@b.com', password: 'Abc123'});
    });
 
    context(`1. Verify 'Languages' field and select 'Lithuanian'.`, () => {
        it(`'Languages' field is visible and 'Lithuanian' language is selected.`, () => {
            var data = {
                russian: 'Russian',
                lithuanian: 'Lithuanian',
                english: 'English'
            }

            Register.verifyElement(RegisterLocators.languageMenu, '');
            Register.selectFromMenu(RegisterLocators.languageSelector, data.lithuanian);
            Register.clickLabel(RegisterLocators.languages);
            // cy.get(`${RegisterLocators.bandymas}:contains(${data.catalan})`).click()
            // cy.get('.ui-autocomplete.ui-front.ui-menu li').contains(data.arabic);
        });
    });
 


    context(`2. Verify 'Skills' field and select 'Android'.`, () => {
        it(`'Skills' field is visible and 'Android' is selected.`, () => {
            Register.selectFromDrop(RegisterLocators.skillsDropdown, 'Web Page Design');

        });
    });

    context(`3. Verify 'Country' field and select 'Lithuania'.`, () => {
        it(`'Country' field is visible and 'Lithuania' is selected.`, () => {
            Register.selectFromDrop(RegisterLocators.countryDropdown, 'Lithuania');

        });
    });

    context(`4. Verify 'Select Country' field and select 'New Zealand'.`, () => {
        it(`'Select Country' field is visible and 'New Zealand' is selected.`, () => {
            Register.verifyElement(RegisterLocators.selectCountryBox, '');
            Register.search(RegisterLocators.selectCountrySearch, 'New');
            Register.verifySelection(RegisterLocators.selectCountryBox, 'New Zealand');

        });
    });

    context(`5. Verify 'Year', 'Month', 'Date' fields and select '1998', 'July' and '15' respectively.`, () => {
        it(`'Year', 'Month', 'Date' fields are visible and respective values are selected.`, () => {
            Register.selectFromDrop(RegisterLocators.year, '1998');
            Register.selectFromDrop(RegisterLocators.month, 'July');
            Register.selectFromDrop(RegisterLocators.day, '15');

        });
    });

    context(`6. Verify Password fields and generate a matching password into both.`, () => {
        it(`'Password fields are present and applicable password is generate.`, () => {
            Register.createPassword();
            Register.enterPassword(RegisterLocators.firstPassword);
            Register.enterPassword(RegisterLocators.secondPassword);

        });
    });

});