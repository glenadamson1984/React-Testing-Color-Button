import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const onClickHandler = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button onClick={onClickHandler} style={{ backgroundColor: buttonColor }}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
