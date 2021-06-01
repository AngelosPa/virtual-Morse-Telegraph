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
      <input
        type="text"
        placeholder="send your message"
        // ananewnoume to value me oti grafei o user
        value={userInput}
        onChange={changeHandle}
      ></input>
      <p>telegraph</p>
      <div>
        <Result userInput={userInput} />
      </div>
    </div>
  );
}

export default App;
