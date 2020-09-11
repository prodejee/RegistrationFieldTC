import { Register } from "../../support/Register/Register";
import { RegisterLocators } from "../../support/Register/Locators/RegisterLocators";
import { Commands } from "../../support/commands.js";
import { navButtons } from "../../support/Common/Locators/CommonLocators";

describe('Registration page TC01', () => {
    before(() => {
        // Preconditions
        cy.signIn({email: 'a@b.com', password: 'Abc123'});
        Commands.openPageFromDrop(navButtons.switchTo, navButtons.alerts);
        Commands.openPage(navButtons.register);        
    });
 
    context(`1. Verify 'First Name' field and enter a value.`, () => {
        it(`'First Name' field is visible and value is entered.`, () => {
            Register.verifyElement(RegisterLocators.firstName, '');
            Register.typeText(RegisterLocators.firstName, 'Danielius');
        });
    });
 
    context(`2. Verify 'Last Name' field and enter a value`, () => {
        it(`'Last Name' field is visible and value is entered`, () => {
            Register.verifyElement(RegisterLocators.lastName, '');
            Register.typeText(RegisterLocators.lastName, 'Radvilavicius');

        });
    });
 
    context(`3. Verify 'Address' field and enter a value`, () => {
        it(`'Address field' is visible and value is entered`, () => {
            Register.verifyElement(RegisterLocators.addressField, '');
            Register.typeText(RegisterLocators.addressField, 'TEST DATA');
 
        });
    });


    context(`4. Verify 'Email Adress' field and enter a valid email`, () => {
        it(`Email address field is visible and Email adress is entered`, () => {
            Register.verifyElement(RegisterLocators.emailAddress, '');
            Register.typeText(RegisterLocators.emailAddress, 'test@test.com');

        });
    });



    context(`5. Verify 'Phone Number' field and enter a valid phone number`, () => {
        it(`'Phone Number' field is visible and number is entered`, () => {
            Register.verifyElement(RegisterLocators.phone, '');
            Register.typeText(RegisterLocators.phone, '3701234567');        
        
        });
    });

    context(`6. Verify 'Gender' radio buttons and select Male.`, () => {
        it(`Radio buttons are present, gender is selected.`, () => {
            Register.verifyRadioButtons();
            Register.markSelection(RegisterLocators.gender, 'Male');
        
        });
    });

    context(`7. Verify 'Hobbies' checkbox and select all the elements `, () => {
        it(`Hobby checkboxes are present, hobbies are selected`, () => {
            Register.verifyCheckBoxNames();
            Register.markSelection(RegisterLocators.checkbox, ['Cricket', 'Movies', 'Hockey']);
        
        });
    });

});