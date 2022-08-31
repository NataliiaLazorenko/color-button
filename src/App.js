import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled} // for accessibility (screenreaders can see whether or not it checked)
        onClick={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
