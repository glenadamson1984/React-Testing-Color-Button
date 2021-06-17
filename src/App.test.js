import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has the correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(button.textContent).toBe("Change to Medium Violet Red");
});

test("button should be enabled and the checkbox starts unchecked when initial render", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("check button is disabled when the checkbox is checked and enabled when unchecked", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
});

test("check button is colored gray when disable and red when enabled", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("check when button is changed to blue, then disabled it turns to grey and re-enabled its back to blue", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

// this is a unit test
describe("spaces before camel case capital letter", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
