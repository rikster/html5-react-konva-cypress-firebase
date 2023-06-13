/* eslint-disable testing-library/no-container */
/* eslint-disable no-restricted-globals */
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders App component without crashing", () => {
    render(<App />);
  });

  test("renders App Component canvas with correct attributes", () => {
    const { container } = render(<App />);

    const divElement = screen.getByRole("presentation");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass("konvajs-content");

    //const canvasElement = screen.getByTagName('canvas');
    const canvasElement = container.querySelector("canvas");
    expect(canvasElement).toBeInTheDocument();
    expect(canvasElement).toHaveAttribute("width", "799");
    expect(canvasElement).toHaveAttribute("height", "599");
    expect(canvasElement).toHaveStyle({
      padding: "0px",
      margin: "0px",
      border: "0px",
      background: "transparent",
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "799px",
      height: "599px",
      display: "block",
    });
  });
});
