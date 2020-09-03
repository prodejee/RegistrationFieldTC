/// <reference types="Cypress" />

const { Register } = require("../../support/Register/Register");
const { RegisterLocators } = require("../../support/Register/Locators/RegisterLocators");

describe('Registration page TC', () => {
    before(() => {
      // pries testa
      cy.visit('http://demo.automationtesting.in/Register.html')
    });
 
    context(`1. Verify 'First Name' field and enter a value.`, () => {
        it(`'First Name' field is visible and value is entered.`, () => {
            // TODO
            Register.verifyElement(RegisterLocators.firstName);
            Register.typeText(RegisterLocators.firstName, 'Danielius');
        });
    });
 
    context(`2. Verify 'Last Name' field and enter a value`, () => {
        it(`'Last Name' field is visible and value is entered`, () => {
            // TODO
            Register.verifyElement(RegisterLocators.lastName);
            Register.typeText(RegisterLocators.lastName, 'Radvilavicius');

        });
    });
 
    context(`3. Verify 'Address' field and enter a value`, () => {
        it(`'Address field' is visible and value is entered`, () => {
            // TODO
            Register.verifyElement(RegisterLocators.addressField);
            Register.typeText(RegisterLocators.addressField, 'TEST DATA');
 
        });
    });


    context(`4. Verify 'Email Adress' field and enter a valid email`, () => {
        it(`Email address field is visible and Email adress is entered`, () => {
            // TODO
            Register.verifyElement(RegisterLocators.emailAddress);
            Register.typeText(RegisterLocators.emailAddress, 'test@test.com');

        });
    });



    context(`5. Verify 'Phone Number' field and enter a valid phone number`, () => {
        it(`'Phone Number' field is visible and number is entered`, () => {
            // TODO
            Register.verifyElement(RegisterLocators.phone);
            Register.typeText(RegisterLocators.phone, '3701234567');        
        
        });
    });

    context(`6. Verify 'Gender' radio buttons and select Male.`, () => {
        it(`Radio buttons are present, gender is selected.`, () => {
            // TODO
            Register.verifyElement(RegisterLocators.gender, ['Male', 'FeMale']);
            Register.markSelection(RegisterLocators.gender, 'Male');
        
        });
    });

    context(`7. Verify 'Hobbies' checkbox and select all the elements `, () => {
        it(`Hobby checkboxes are present, hobbies are selected`, () => {
            // TODO
            Register.verifyElement(RegisterLocators.checkbox, ['Hockey', 'Cricket', 'Movies']);
            Register.markSelection(RegisterLocators.checkbox, ['Hockey', 'Cricket', 'Movies']);
        
        
        });
    });



});