/* eslint-disable no-undef */
describe("Desktop Menu Test", () => {
  it("Desktop test", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
    cy.get("#nav1").should("not.have.css", "display", "none");
  });
  it("Desktop main", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
    cy.get("#nav1 > div.navLeft > h2 > a").click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/#");
    });
  });
  it("Desktop Profile", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
    cy.get("#nav1 > div.navRight > div:nth-child(1) > a").click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/#profile");
    });
  });
  it("Desktop Skills", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
    cy.get("#nav1 > div.navRight > div:nth-child(2) > a").click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/#skills");
    });
  });
  it("Desktop About Me", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
    cy.get("#nav1 > div.navRight > div:nth-child(3) > a").click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/#about");
    });
  });
  it("Desktop Pojects", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
    cy.get("#nav1 > div.navRight > div:nth-child(4) > a").click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/#projects");
    });
  });
  it("Desktop Hire Me", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/");
    cy.get("#nav1 > div.navRight > div:nth-child(5) > a").click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/#contact");
    });
  });
});
