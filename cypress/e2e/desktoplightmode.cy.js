/* eslint-disable no-undef */
describe("Desktop Light Mode Test", () => {
  it("Menu Light Mode", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "#nav1 > div.navRight > div.darkmode > svg > path:nth-child(2)"
    ).click();
    cy.get("#nav1").should("have.css", "background-color", "rgb(82, 71, 230)");
  });
  it("Profile Light Mode", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "#nav1 > div.navRight > div.darkmode > svg > path:nth-child(2)"
    ).click();
    cy.get("#profile").should(
      "have.css",
      "background-image",
      "-webkit-linear-gradient(66deg, rgb(184, 179, 179) 0%, rgb(253, 98, 220) 51%, rgb(255, 197, 38) 100%)"
    );
  });
  it("Skills Light Mode", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "#nav1 > div.navRight > div.darkmode > svg > path:nth-child(2)"
    ).click();
    cy.get("#skills").should(
      "have.css",
      "background-image",
      "-webkit-linear-gradient(66deg, rgb(233, 150, 150) 0%, rgb(101, 135, 228) 51%, rgb(91, 3, 192) 100%)"
    );
  });
  it("About Me Light Mode", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "#nav1 > div.navRight > div.darkmode > svg > path:nth-child(2)"
    ).click();
    cy.get("#about").should(
      "have.css",
      "background-image",
      "-webkit-linear-gradient(66deg, rgb(184, 179, 179) 0%, rgb(253, 98, 220) 51%, rgb(255, 197, 38) 100%)"
    );
  });
  it("Projects Light Mode", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "#nav1 > div.navRight > div.darkmode > svg > path:nth-child(2)"
    ).click();
    cy.get("#projects").should(
      "have.css",
      "background-image",
      "-webkit-linear-gradient(66deg, rgb(255, 198, 198) 0%, rgb(127, 160, 253) 51%, rgb(91, 3, 192) 100%)"
    );
  });
  it("Hire Me Light Mode", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "#nav1 > div.navRight > div.darkmode > svg > path:nth-child(2)"
    ).click();
    cy.get("#contact > div").should(
      "have.css",
      "background-image",
      "-webkit-linear-gradient(66deg, rgb(184, 179, 179) 0%, rgb(253, 98, 220) 51%, rgb(255, 197, 38) 100%)"
    );
  });
  it("Text Colors", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "#nav1 > div.navRight > div.darkmode > svg > path:nth-child(2)"
    ).click();
    cy.get("#profile > div > div.leftSide > p").should(
      "have.css",
      "color",
      "rgb(0, 11, 26)"
    );

    cy.get("#profile > div > div.leftSide > h5").should(
      "have.css",
      "color",
      "rgb(0, 11, 26)"
    );

    cy.get(
      "#skills > div.skillsflexContainer > div:nth-child(1) > div.skillsname"
    ).should("have.css", "color", "rgb(255, 255, 255)");

    cy.get("#skills > div:nth-child(1) > h2").should(
      "have.css",
      "color",
      "rgb(4, 0, 63)"
    );

    cy.get("#about > div > div > div.profileBox > h5").should(
      "have.css",
      "color",
      "rgb(26, 0, 11)"
    );

    cy.get("#projects > h2").should(
      "have.css",
      "color",
      "rgb(4, 0, 63)"
    );


  });
});
