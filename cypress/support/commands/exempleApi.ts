/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Added documentation here
			 */
			exemplePost(): Chainable<any>;
		}
	}
}

Cypress.Commands.add("exemplePost", () => {
			cy.request({
				method: "POST",
				url: `***`,
				headers: {
					Authorization: `***`,
					"Content-Type": "application/json",
				},
			}).should(({ status, body }) => {
				expect(status).eq(201);
			});
});