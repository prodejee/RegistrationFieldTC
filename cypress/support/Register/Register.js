import { RegisterLocators } from "./Locators/RegisterLocators";

// My Class
export class Register {
    // My Methods

    static verifyElement(locator, value){
        cy.get(locator).should('be.visible').and['have.value', [value]];
    }

    static typeText(locator, text) {
        cy.get(locator).type(text);

    } 

    static markSelection(locator, value) {
        cy.get(locator).should('not.be.checked', [value]).check(value);
    }




    static secondMethod() {
        // TODO
        cy.get(RegisterLocators.lastName).should('be.visible').type('Radvilavicius');
        // cy.get(RegisterLocators.FullName).click();
        // cy.get(RegisterLocators.LastName).contains('Radvilavicius');

    }

    static thirdMethod() {
        // TODO
        cy.get(RegisterLocators.AddressField).should('be.visible');

    }

    static fourthMethod() {
        // TODO
        cy.get(RegisterLocators.AddressField).click().type('TESTDATA');

    }

    static fifthMethod() {
        cy.get(RegisterLocators.EmailAddress).should('be.visible');
        // cy.get(RegisterLocators.EmailAddress).trigger('mouseover').wait(6000);
        // cy.get(RegisterLocators.EmailTooltip).contains('Provide a valid email id for further updates');

    }

    static sixthMethod() {
        cy.get(RegisterLocators.EmailAddress).click().type('a@a.com');

    }

    static seventhMethod() {
        cy.get(RegisterLocators.Phone).should('be.visible');

    }


    static eightMethod() {
        cy.get(RegisterLocators.Phone).click().type('+37000000000');

    }

    static ninthMethod() {
        cy.get(RegisterLocators.Male).should('be.visible').and('not.be.checked');
        cy.get(RegisterLocators.FeMale).should('be.visible').and('not.be.checked');

    }

    static Method10() {
        cy.get(RegisterLocators.male).check().should('be.checked')
        cy.get(RegisterLocators.female).should('not.be.checked');

    }

    static Method11(){
        cy.get(RegisterLocators.checkbox).should('be.visible').and('not.be.checked', ['Cricket', 'Movies', 'Hockey'])

    }

 

    static Method12() {
        cy.get(RegisterLocators.checkbox).check(['Movies', 'Hockey']).should('be.checked', ['Movies', 'Hockey']).and('not.be.checked', ' Cricket ');

    }

    
}
