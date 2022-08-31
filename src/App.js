import { useState } from "react";
import "./App.css";

// this function separates characters - goes from camelcase to spaces (for example, MediumVioletRed -> Medium Violet Red)
export function replaceCamelWithSpaces(colorName) {
  /*
   * /\B([A-Z])\B/g - regular expression. It says:
   * if you find a capital letter `[A-Z]` in the middle of a word `\B...\B`
   * and even if you find it multiple times `g`,
   * do this for every time you find it - replace it with whatever letter you found `$1` preceded by a space (перед яким стоїть пробіл)
   */
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "grey" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled} // for accessibility (screenreaders can see whether or not it checked)
        onClick={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
