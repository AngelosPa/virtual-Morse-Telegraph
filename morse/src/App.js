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
      <div className="header">
        
        <h1>Telegraph</h1>
      </div>
      <div className="intro">
        <textarea
          //type="text"
          rows="5"
          cols="18"
          placeholder="send your message"
          // ananewnoume to value me oti grafei o user
          value={userInput}
          onChange={changeHandle}
        ></textarea>
      </div>
      <div className="outputi">
        {
          //stelnoume san parametro to userInput sto function mas k to pairnei ws props
        }
        <Result userInput={userInput} />
      </div>
      <div className="anim">
        <div className="telegraph animated fadeInDown">
          <div className="telegraph__tapper"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
