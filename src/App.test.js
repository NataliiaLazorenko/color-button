import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

// test - global method. It has two arguments: string description and test function
test("Button has correct initial color", () => {
  render(<App />);

  // find an element with a role and text of 'Change to Midnight Blue'
  // getByRole has 2 arguments: the role itself and options
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  }); // screen - global object that has access to the virtual DOM, created by render

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" }); // expect - Jest global method, starts the assertion

  // click button
  fireEvent.click(colorButton); // fireEvent - helps to interact the elements in Virtual DOM; click method takes an element

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // the specs also specify, that the button should have the correct text after the background color has changed, so we test this too
  // expect the button text to be "Change to Medium Violet Red"
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("Initial condition", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enable on second click", () => {
  render(<App />);
  // we can use the name option on the checkbox to specify which checkbox we want (we can have more than one checkbox on the page)
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Disabled button has grey background and reverts to MediumVioletRed", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "grey" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "MediumVioletRed" });
});

test("Clicked disabled button has grey background and reverts to MidnightBlue", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // change button to MidnightBlue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "grey" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "MidnightBlue" });
});

// we will use a new concept where we will combine the tests in a describe statement. describe statement is a way of grouping tests. describe has two arguments: string description and function
// all the tests are going to be about - making spaces before camelcase capital letters
describe("Spaces before camel-case capital letters", () => {
  // we put test global inside the function in describe
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red"); // toBe - is a matcher from jest and it just compares two things directly
  });
  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
