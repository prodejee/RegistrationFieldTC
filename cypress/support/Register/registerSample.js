import { RegisterLocators } from "./locators/registerLocators";

export class RegisterSample {
    // TODO
    // static clickCheckBox () {
    //     for (var i = 1; i < 4; i++) {
    //         cy.get(RegisterSampleLocators.checkBox(i)).click();
    //     }
    // }

    static verifyCheckBoxName1 () {
        var hobbies = [' Cricket ', 'Movies ', 'Hockey'];

        cy.get(RegisterSampleLocators.checkBoxName).eq(0).should('have.text', hobbies[0]);
        cy.get(RegisterSampleLocators.checkBoxName).eq(1).should('have.text', hobbies[1]);
        cy.get(RegisterSampleLocators.checkBoxName).eq(2).should('have.text', hobbies[2]);
    }

    static verifyCheckBoxName2 () {
        cy.get(RegisterSampleLocators.checkBoxName).eq(0).should('have.text', ' Cricket ');
        cy.get(RegisterSampleLocators.checkBoxName).eq(1).should('have.text', 'Movies ');
        cy.get(RegisterSampleLocators.checkBoxName).eq(2).should('have.text', 'Hockey');
    }

    // static verifyCheckBoxName3 (elemntName) {
    //     cy.get(RegisterSampleLocators.cssLocatorOfBox).should('have.text', elemntName);
    // }

    // static typeInField (input, number) {
    //     cy.get(RegisterSampleLocators.inputFields).eq(number).type(input);
    // }
}