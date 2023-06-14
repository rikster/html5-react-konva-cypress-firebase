/// <reference types="cypress" />
import "@applitools/eyes-cypress/commands";

describe("Functional test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders the title", () => {
    cy.eyesOpen({ appName: "nearmap-test", testName: "Title" });
    cy.get("h1").contains("Nearmap Test");
    cy.screenshot();
    cy.eyesCheckWindow();
    cy.eyesClose();
  });

  it("renders the canvas", () => {
    cy.eyesOpen({ appName: "nearmap-test", testName: "Canvas exists" });
    cy.get("canvas").should("exist");
    cy.screenshot();
    cy.eyesCheckWindow();
    cy.eyesClose();
  });

  it("iterates through JSON, clicks position value, shows each objects detail in the Info Box", () => {
    cy.eyesOpen({
      appName: "nearmap-test",
      testName: "See correct InfoBox and selected Marker",
    });

    cy.fixture("map-data.json").then((jsonData) => {
      jsonData.forEach((entry) => {
        let [positionX, positionY] = entry.position;

        cy.get("canvas").then(($canvas: JQuery<HTMLCanvasElement>) => {
          positionX = positionX + 10;
          positionY = positionY + 10;

          cy.wrap($canvas).scrollIntoView().click(positionX, positionY);
          cy.wrap($canvas).click(positionX, positionY);
          cy.screenshot();
          cy.eyesCheckWindow();
        });
      });
    });

    cy.eyesClose(); // close after all iterations
  });

  it("should click off any marker position, the Info Box should disappear, no markers selected ", () => {
    cy.eyesOpen({
      appName: "nearmap-test",
      testName: "Not see Info Box or selected Marker",
    });

    cy.get("canvas").then(($canvas: JQuery<HTMLCanvasElement>) => {
      // Get dimension of the canvas
      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      if (canvasWidth && canvasHeight) {
        // Divide in half since cursor will be at center of canvas
        const canvasCenterX = canvasWidth / 2;
        const canvasCenterY = canvasHeight / 2;

        cy.wrap($canvas).scrollIntoView().click(canvasCenterX, canvasCenterY);
        cy.wrap($canvas).click(canvasCenterX, canvasCenterY);
        cy.screenshot();
        cy.eyesCheckWindow();
      } else {
        throw new Error("Canvas width or height is undefined");
      }
    });

    cy.eyesClose();
  });
});
export {};
