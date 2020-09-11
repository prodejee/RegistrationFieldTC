import { Commands } from "../../support/commands.js";
import { navButtons } from "../../support/Common/Locators/CommonLocators.js";
import { Alerts } from "../../support/Alerts/Alerts.js";
import { AlertsLocators, alertTab, buttonText } from "../../support/Alerts/Locators/AlertsLocators.js";

describe('Alerts page TC', () => {
    before(() => {
        cy.signIn({email: 'a@b.com', password: 'Abc123'});
        Commands.openPageFromDrop(navButtons.switchTo, navButtons.alerts);
    });

    context(`1. Press on the first Alert Box button 'Alert with OK', and close it.`, () => {
        it(`Alert Box is opened, containing 'OK' button and is closed.`, () => {
            Alerts.verifyAlertButton(AlertsLocators.buttonOk, buttonText.firstBtn, 'I am an alert box!');
        });
    });
    context(`w. Press on the second Alert Box button 'Alert with OK & Cancel', and close it.`, () => {
        it(`Alert Box is opened, containing 'OK' and 'Close' buttons, and is closed.`, () => {
            Alerts.clickAlertNavBar(alertTab.alertOkCancel);
            Alerts.verifyAlertButton(AlertsLocators.buttonOkCancel, buttonText.secondBtn, 'Press a Button !');
        });
    });
});
