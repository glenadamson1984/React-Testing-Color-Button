import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

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
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" checked={disabled} onChange={onCheckHandler} />
    </div>
  );
}

export default App;
