import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has the correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button.textContent).toBe("Change to red");
});
