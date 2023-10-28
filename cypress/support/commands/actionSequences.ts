/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";
import	"./utils"
import { Text } from "../types/selectors";

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Add documentation here
			 */
			exemple(term: Text): Chainable<any>;
		}
	}
}

Cypress.Commands.add("exemple", (term) => {
	cy.getByPlaceholder("Placeholder").type(`${term}`);
	cy.intercept("GET", `***${term}`).as(
		"getApi"
	);
	cy.wait("@getApi");
});