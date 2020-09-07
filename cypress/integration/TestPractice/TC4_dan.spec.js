// / <reference types="cypress" />


import { Register } from "../../support/Register/register";
import { RegisterLocators } from "../../support/Register/locators/registerLocators";

describe('Create and marks-unmark as favorite', function () {
    var hob = 'Hobbies';

    before(() => {
        cy.visit("http://demo.automationtesting.in/Register.html")
    });

    context('1. Check CheckBoxes and verify CheckBoxes names.', () => {
        it('All CheckBoxes are checked. CheckBoxes names are as expected.', function () {
            // RegisterSample.clickCheckBox();            
            // RegisterSample.verifyCheckBoxName1();
            // RegisterSample.verifyCheckBoxName2();
            // RegisterSample.verifyCheckBoxName3(hob);
        });
    });

    context('2. Verify CheckBoxes names.', () => {
        it('CheckBoxes names are as expected.', function () {
            RegisterSample.verifyCheckBoxName1();
            RegisterSample.verifyCheckBoxName2();
            // RegisterSample.verifyCheckBoxName3(hob);
        });
    });

    context('3. Type in all input fields', () => {
        it('....', function () {
            // var fieldNumber = [0, 1, 2];
            // var data = {
            //     name: 'Vardas',
            //     lastName: 'Pavarde',
            //     address: 'Adress',
            //     test: 'Test'
            // }
            
            // RegisterSample.typeInField(data.name, fieldNumber[0]);
            // RegisterSample.typeInField(data.lastName, fieldNumber[1]);
            // RegisterSample.typeInField(data.address, fieldNumber[2]);

            // for (var i = 0; i < 5; i ++) {
            //     RegisterSample.typeInField(data.test, i);
            //     cy.get(RegisterSample.inputFields).eq(i).should('have.text', data.test);
            // }
        });
    });
});