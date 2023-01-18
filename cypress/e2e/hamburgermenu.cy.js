/* eslint-disable no-undef */
describe("Hamburger Menu Test", () => {

    it("Hamburger Menu test", () => {
      cy.viewport(899, 1080);
      cy.visit("http://localhost:3000/");
      cy.get("#nav1").should("have.css", "display", "none");
      cy.get("#nav2").should("not.have.css", "display", "none");
    });

    it("Hamburger Menu Click Test", () => {
      cy.viewport(899, 1080);
      cy.visit("http://localhost:3000/");
      cy.get("#nav2 > div.hamburgerFlexContainer > svg").click();
      cy.get("#nav2 > div:nth-child(2)").should("not.have.css", "display", "none")
    });

    it("Hamburger Menu Click Close Test", () => {
      cy.viewport(899, 1080);
      cy.visit("http://localhost:3000/");
      cy.get("#nav2 > div.hamburgerFlexContainer > svg").click();
      cy.get("#nav2 > div.hamburgerFlexContainer > svg").click();
      cy.get("#nav2 > div:nth-child(2)").should('not.exist')
    });

    it("Hamburger Menu Click Close Test 2", () => {
      cy.viewport(899, 1080);
      cy.visit("http://localhost:3000/");
      cy.get("#nav2 > div.hamburgerFlexContainer > svg").click();
      cy.get("#nav2 > div.hamburgerFlexContainer > svg").click();
      cy.get("#nav2 > div.hamburgerFlexContainer > svg").click();
      cy.get("#nav2 > div:nth-child(2)").should('be.visible')
    });

  });
  