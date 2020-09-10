// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

import { RegisterLocators } from "./Register/Locators/RegisterLocators";

Cypress.Commands.add('signIn', ({email, password}) => {
    cy.visit('http://demo.automationtesting.in/Index.html');
      cy.on('uncaught:exception', (err) => {
        expect(err.message).to.include('Website error');
        return false;
      });  
      cy.server();
      cy.route('GET', 'https://api.mlab.com/api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X').as("getUserTable");
      cy.get(RegisterLocators.signInButton).click();
      cy.wait("@getUserTable");
      cy.get(RegisterLocators.loginEmail).invoke('val', email);
      cy.get(RegisterLocators.loginPassword).invoke('val', password);
      cy.get(RegisterLocators.enterButton).click();
    });

export class Commands {

    static openPage(button){
        cy.get(`${RegisterLocators.navbar}:contains(${button})`).click();
    }

    static openPageFromDrop(button, buttonFromDrop){
        cy.get(`${RegisterLocators.navbar}:contains(${button})`).click()
        cy.get(`${RegisterLocators.navbar}:contains(${buttonFromDrop})`).click()
    }
}
