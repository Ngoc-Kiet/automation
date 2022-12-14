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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { AuthHelper } from "../utils/api/data-preparation/auth-helper";
import 'cypress-file-upload'
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("loginByApi", function (user) {
    cy.fixture("user.json").then((user) => {
        let username = user["userName"];
        let password = user["password"]
        let userid = user["userID"]
        let isbn = user["isbn"]
        AuthHelper.login(username,password);
        let userinfo = {
            username:username,
            password:password,
            userid:userid,
            isbn:isbn
        }
        cy.wrap(userinfo).as("userinfo")
    })
});