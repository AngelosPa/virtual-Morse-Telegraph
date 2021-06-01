import React, { useState } from "react";

import "./scss/Main.scss";
import Result from "./components/Result.js";

function App() {
  //ksekianme to hook mas k stelnoume se string to use state mas
  const [userInput, setUserInput] = useState("");
  function changeHandle(e) {
    //WE GOT WHAT HE WRITES
    setUserInput(e.target.value);
  }

  return (
    <div className="body-container">
      <h1>Telegraph</h1>
      <input
        type="text"
        placeholder="send your message"
        // ananewnoume to value me oti grafei o user
        value={userInput}
        onChange={changeHandle}
      ></input>

      <div>
        <p>your coded signal is:</p>
        {
          //stelnoume san parametro to userInput sto function mas k to pairnei ws props
        }
        <Result userInput={userInput} />
      </div>
    </div>
  );
}

export default App;
