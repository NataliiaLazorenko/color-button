import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" }); // screen - global object that has access to the virtual DOM, created by render

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton); // fireEvent - helps to interact the elements in Virtual DOM; click method takes an element

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // the specs also specify, that the button should have the correct text after the background color has changed, so we test this too
  // expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial condition", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enable on second click", () => {
  render(<App />);
  // we can use the name option on the checkbox to specify which checkbox we want (we can have more than one checkbox on the page)
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
