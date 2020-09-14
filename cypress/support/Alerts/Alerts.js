import { AlertsLocators, alertTab } from "./Locators/AlertsLocators";

// My Class
export class Alerts {
    // My Methods

    static clickAlertNavBar(text) {
        cy.get(`${AlertsLocators.navBarAlerts}:contains(${text})`).click();

    }


    static verifyWindowAlert(text, alertTxt) {
        cy.on('window:alert', (str) => {
            expect(str).to.eq(alertTxt);
        })
        cy.get(`${AlertsLocators.buttonOk}`).should('have.text', text).click({ force: true });
    }

    static verifyWindowConfirm(text, alertTxt, bool) {
        cy.on('window:confirm', (str) => {
            expect(str).to.eq(alertTxt);
            return bool;
        })
        cy.get(`${AlertsLocators.buttonOkCancel}`).should('have.text', text).click({ force: true });
        if (bool == true) {
            cy.get(`${AlertsLocators.buttonOkCancelMsg}`).should('have.text', 'You pressed Ok');
        }
        else {
            cy.get(`${AlertsLocators.buttonOkCancelMsg}`).should('have.text', 'You Pressed Cancel');
        }
    }

    static verifyWindowPrompt(text, alertTxt, inputTxt) {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns(inputTxt)
        })
        cy.get(`${AlertsLocators.buttonTextBox}`).should('have.text', text).click({ force: true });
    }
}


