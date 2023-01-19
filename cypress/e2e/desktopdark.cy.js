/* eslint-disable no-undef */
describe("Desktop Dark Mode Test", () => {
  it("Menu Dark Mode", () => {
    cy.visit("http://localhost:3000/#");
    cy.get("#nav1").should(
      "have.css",
      "background",
      'rgba(0, 0, 0, 0) -webkit-linear-gradient(58deg, rgb(2, 0, 37) 0%, rgb(0, 37, 108) 54%, rgb(0, 16, 94) 100%) repeat scroll 0% 0% / auto padding-box border-box'
    );
  });
  it("Profile Dark Mode", () => {
    cy.visit("http://localhost:3000/#profile");
    cy.get("#profile").should(
      "have.css",
      "background",
      'rgba(0, 0, 0, 0) -webkit-linear-gradient(66deg, rgb(122, 35, 35) 0%, rgb(75, 4, 59) 51%, rgb(95, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box'
    );
  });
  it("Skills Dark Mode", () => {
    cy.visit("http://localhost:3000/#skills");
    cy.get("#skills").should(
      "have.css",
      "background",
      'rgba(0, 0, 0, 0) -webkit-linear-gradient(90deg, rgb(92, 25, 209) 0%, rgb(36, 0, 128) 43%, rgb(3, 0, 59) 100%) repeat scroll 0% 0% / auto padding-box border-box'
    );
  });
  it("About Me Dark Mode", () => {
    cy.visit("http://localhost:3000/#about");
    cy.get("#about").should(
      "have.css",
      "background",
      'rgba(0, 0, 0, 0) -webkit-linear-gradient(66deg, rgb(65, 19, 19) 0%, rgb(66, 0, 52) 51%, rgb(126, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box'
    );
  });
  it("Projects Dark Mode", () => {
    cy.visit("http://localhost:3000/#projects");
    cy.get("#projects").should(
      "have.css",
      "background",
      'rgba(0, 0, 0, 0) -webkit-linear-gradient(60deg, rgb(0, 58, 48) 0%, rgb(36, 0, 128) 43%, rgb(49, 0, 47) 100%) repeat scroll 0% 0% / auto padding-box border-box'
    );
  });
  it("Hire Me Dark Mode", () => {
    cy.visit("http://localhost:3000/#contact");
    cy.get("#contact").should(
      "have.css",
      "background",
      'rgb(35, 34, 40) none repeat scroll 0% 0% / auto padding-box border-box'
    );
  });
});
