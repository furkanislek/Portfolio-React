/* eslint-disable no-undef */
describe("Links Test", () => {
  it("Profile Github Link test", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "#profile > div > div.leftSide > div:nth-child(4) > div > a:nth-child(1)"
    )
      .invoke("attr", "target", "_self")
      .click();
    cy.visit("https://github.com/furkanislek");
  });

  it("Project Credit App Github Link test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#projects > div > div:nth-child(1) > div.dataUrls > a:nth-child(1)")
      .invoke("attr", "target", "_self")
      .click();
    cy.visit("https://github.com/furkanislek/Fimple-Credit-Calculate");
  });

  it("Project Credit App Demo Link test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#projects > div > div:nth-child(1) > div.dataUrls > a:nth-child(2)")
      .invoke("attr", "target", "_self")
      .click();
    cy.visit("https://furkancreditcalculate.web.app/");
  });

  it("Project TicTacToe App Github Link test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#projects > div > div:nth-child(2) > div.dataUrls > a:nth-child(1)")
      .invoke("attr", "target", "_self")
      .click();
    cy.visit("https://github.com/furkanislek/Tic-Tac-Toe");
  });

  it("Project TicTacToe App Demo Link test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#projects > div > div:nth-child(2) > div.dataUrls > a:nth-child(2)")
      .invoke("attr", "target", "_self")
      .click();
    cy.visit("https://furkanislek.github.io/Tic-Tac-Toe/");
  });

  it("Project Memory Card App Github Link test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#projects > div > div:nth-child(3) > div.dataUrls > a:nth-child(1)")
      .invoke("attr", "target", "_self")
      .click();
    cy.visit("https://github.com/furkanislek/Memory-Card");
  });

 
});
