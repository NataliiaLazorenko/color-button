import { render, screen } from "@testing-library/react";
import App from "./App";

/*
 * global test method has two arguments:
 * - string description
 * - test function
 * Test fails if error is thrown when running function
 * - assertions throw errors when expectation fails
 * No error -> tests pass
 * - Empty test passes! - it doesn't matter if there is nothing in the test. As long as no error is thrown, the test will pass
 
 * render
 * - Create virtual DOM for argument JSX
 * - Access virtual DOM via screen global object
 */

test("renders learn react link", () => {
  render(<App />);
  /* 
   * screen.getByText()
   * - Find element by display text

   * /learn react/i
   * - regular expression
   * - case insentitive (i) - all the letters can be either uppercase or lowercase
   * - could be string 'Learn React' - if we don't want to use a regular expression, we are more than welcome to use an actual string
   
   * expect().toBeInTheDocument()
   * - assertion (твердження), causes test to succeed or fail
   */

  const linkElement = screen.getByText("Learn React");

  /*
   * expect
   * - Jest global method, starts the assertion
   
   * expect argument (here linkElement)
   * - subject of the assertion - this is what jest will examining to see if it meets our expectations

   * matcher (відповідник) (here toBeInTheDocument)
   * - type of assertion
   * - toBeInTheDocument - this matcher comes from Jest-DOM
   
   * matcher argument - sometimes there is an argument to the matcher
   * - refines matcher
   
   * toBeInTheDocument - doesn't have an argument (the element is in document or not)
   */
  expect(linkElement).toBeInTheDocument();
});
