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

test("button should be enabled and the checkbox starts unchecked when initial render", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("check button is disabled when the checkbox is checked and enabled when unchecked", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
});
