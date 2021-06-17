import "./App.css";
import { useState } from "react";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const onClickHandler = () => {
    setButtonColor(newButtonColor);
  };

  const onCheckHandler = () => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClickHandler}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        checked={disabled}
        aria-checked={disabled}
        onChange={onCheckHandler}
      />
      <label htmlFor={"disable-button-checkbox"}>Disable Button</label>
    </div>
  );
}

export default App;
