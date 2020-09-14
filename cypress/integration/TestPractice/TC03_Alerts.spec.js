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
            Alerts.verifyWindowAlert(buttonText.firstBtn, 'I am an alert box!');
        });
    });
    context(`2. Press on the second Alert Box button 'Alert with OK & Cancel', and select 'Ok'.`, () => {
        it(`Alert Box is opened, containing 'OK' and 'Close' buttons, 'Ok' is pressed.`, () => {
            Alerts.clickAlertNavBar(alertTab.alertOkCancel);
            Alerts.verifyWindowConfirm(buttonText.secondBtn, 'Press a Button !', false);
        });
    });
    context(`3. Press on the third Alert Box button 'Alert with Text', enter a value and select 'Ok'.`, () => {
        it(`Alert Box is opened, containing 'OK', 'Close' buttons and a text field, text is entered and 'Ok' is pressed.`, () => {
            Alerts.clickAlertNavBar(alertTab.alertTextBox);
            Alerts.verifyWindowPrompt(buttonText.thirdBtn, 'Please enter your name", "Automation Testing user');
        });
    });


    
});
