/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";
import { DataTestId, Name, Placeholders, Role, Text } from "../types/selectors";

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Get a DOM element based on  placeholder
			 * @param input placeholder text value
			 */
			getByPlaceholder(input: Placeholders): Chainable<any>;
			/**
			 * Get a DOM element based on  text text value
			 * @param input text
			 */
			getByAllText(input: Text): Chainable<any>;
			/**
			 * Get a DOM element based all text text value
			 * @param input text
			 */
			getByText(input: Text): Chainable<any>;
			/**
			 * Get a DOM element based on dataTestId
			 * @param input DataTestId text value
			 */
			getByDataTestId(input: DataTestId): Chainable<any>;
			/**
			 * Get a DOM element based on role
			 * @param elementRole role and elementName name value
			 */
			getByRole(elementRole: Role, elementName: Name): Chainable<any>;
			/**
			 * Get a DOM element based on role and text
			 * @param elementRole role and arg2 text value
			 */
			getContains(
				elementRole: Role | DataTestId,
				containerText: Text
			): Chainable<any>;
		}
	}
}

Cypress.Commands.add("getByPlaceholder", (input: Placeholders) =>
	cy.findByPlaceholderText(`${input}`)
);

Cypress.Commands.add("getByText", (input: Text) => cy.findByText(`${input}`));

Cypress.Commands.add("getByAllText", (input: Text) =>
	cy.findAllByText(`${input}`)
);

Cypress.Commands.add("getByRole", (elementRole: Role, elementName: Name) =>
	cy.findByRole(`${elementRole}`, { name: `${elementName}` })
);

Cypress.Commands.add("getByDataTestId", (input: DataTestId) =>
	cy.findByTestId(`${input}`)
);

Cypress.Commands.add(
	"getContains",
	(elementRole: Role | DataTestId, containerText: Text) =>
		cy.contains(`${elementRole}`, `${containerText}`)
);