describe('Home E2E', () => {
  it('Supports navigation to docs', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a h2').contains("Docs").parent().click();
  });
});