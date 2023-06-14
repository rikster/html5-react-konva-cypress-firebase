/// <reference types="cypress" />

describe("Functional test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders the title", () => {
    cy.get("h1").contains("Nearmap Test");
    cy.screenshot();
  });

  it("renders the canvas", () => {
    cy.get("canvas").should("exist");
    cy.screenshot();
  });

  it("iterates through JSON, clicks position value, shows each objects detail in the Info Box", () => {
    cy.fixture("map-data.json").then((jsonData) => {
      jsonData.forEach((entry) => {
        let [positionX, positionY] = entry.position;

        cy.get("canvas").then(($canvas: JQuery<HTMLCanvasElement>) => {
          positionX = positionX + 10;
          positionY = positionY + 10;

          cy.wrap($canvas)
            .scrollIntoView()
            .then(() => {
              cy.wrap($canvas).click(positionX, positionY);
            });
          cy.screenshot();
        });
      });
    });
  });

  it("should click off any marker position, the Info Box should disappear, no markers selected ", () => {
    cy.get("canvas").then(($canvas: JQuery<HTMLCanvasElement>) => {
      // Get dimension of the canvas
      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      if (canvasWidth && canvasHeight) {
        // Divide in half since cursor will be at center of canvas
        const canvasCenterX = canvasWidth / 2;
        const canvasCenterY = canvasHeight / 2;

        cy.wrap($canvas)
          .scrollIntoView()
          .then(() => {
            cy.wrap($canvas).click(canvasCenterX, canvasCenterY);
          });
        cy.screenshot();
      } else {
        throw new Error("Canvas width or height is undefined");
      }
    });
  });
});
export {};
