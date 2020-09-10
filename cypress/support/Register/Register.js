import { RegisterLocators } from "./Locators/RegisterLocators";



// My Class
export class Register {
    // My Methods

    static verifyElement(locator, value){
        cy.get(locator).should('be.visible').and('have.value', value).click();
    }

    static verifySelection(locator, text){
        cy.get(locator).should('be.visible').and('have.text', text);
    }

    static verifyCheckBoxNames () {
        var Hobbies = ['Cricket', 'Movies', 'Hockey'];

        cy.get(RegisterLocators.checkbox).eq(0).should('have.value', Hobbies[0]);
        cy.get(RegisterLocators.checkbox).eq(1).should('have.value', Hobbies[1]);
        cy.get(RegisterLocators.checkbox).eq(2).should('have.value', Hobbies[2]);
    }

    static verifyRadioButtons () {
        var Gender = ['Male', 'FeMale'];

        cy.get(RegisterLocators.gender).eq(0).should('have.value', Gender[0]);
        cy.get(RegisterLocators.gender).eq(1).should('have.value', Gender[1]);
    }

    static typeText(locator, text) {
        cy.get(locator).type(text);

    } 

    static markSelection(locator, value) {
        cy.get(locator).should('not.be.checked', value).check(value);
    }

    static clickLabel(locator){
        cy.get(locator).should('be.visible').click();
    }

    static selectFromMenu(locator, text){
        cy.get(locator).contains(text).click();

    }

    static selectFromDrop(locator, value){
        cy.get(locator).select(value).should('have.value', value);
    }

    static search(locator, text){
        cy.get(locator).type(text,).type('{enter}');
    }

    static createPassword(){
        function Password() {
            var text = "";
            var applicable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
            for (var i = 0; i < 10; i++)
            text += applicable.charAt(Math.floor(Math.random() * applicable.length));
        
            return text;
        }
        
         this.randomPass = Password()

    }

    static enterPassword(locator){
        cy.get(locator).type(this.randomPass);
    }
}
    