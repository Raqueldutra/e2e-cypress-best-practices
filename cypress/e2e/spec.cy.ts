/// <reference types="cypress" />
describe("template spec", () => {
  beforeEach(() => {
    //cy.exemplePost();
  });

  it("passes", () => {
    cy.step("open home page");
    cy.visit("https://example.cypress.io/todo");

    cy.step("check if todo have a length and is visible");
    cy.getByPlaceholder("What needs to be done?")
      .should("have.length", 1)
      .and("be.visible");

    cy.step("check if todo-text is visible");
    cy.getByText("Pay electric bill").should("be.visible");

    cy.step("check todo");
    cy.get(".toggle").first().check();
  });
});
