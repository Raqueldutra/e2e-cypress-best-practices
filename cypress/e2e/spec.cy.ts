describe('template spec', () => {
  beforeEach(() => {
    cy.exemplePost();
  });

  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.getByRole("button",'name');
    cy.getByPlaceholder("Placeholder");
    cy.getByText("text");
    cy.getByAllText("text");
    cy.getContains("a","text");
    cy.getByDataTestId("DataTestId");
    cy.exemple();
  })
});