import { AlertsLocators, alertTab } from "./Locators/AlertsLocators";

// My Class
export class Alerts {
    // My Methods

    static clickAlertNavBar(text) {
        cy.get(`${AlertsLocators.navBarAlerts}:contains(${text})`).click();
        
    }

    static verifyAlertButton(locator, text, alertTxt) {
        cy.get(locator).should('have.text', text).click({force:true});
        cy.on('window:confirm', (str) =>
        {
            expect(str).to.equal(alertTxt)
        })
    }


}

