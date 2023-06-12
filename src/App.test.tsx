import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders title", () => {
  render(<App />);
  const titleElement = screen.getByText(/nearmap test/i);
  expect(titleElement).toBeInTheDocument();
});
