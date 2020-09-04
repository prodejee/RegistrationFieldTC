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

    static selectOption(locator, text){
        cy.get(locator).should('be.visible').click().and('have.text', [text]).click(text);
    }

    
}
