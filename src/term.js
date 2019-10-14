import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./styles/term.css";

import CLI from "./cli.js";

function Term() {

  const [date] = useState(new Date());

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  const month = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemer",
    "October",
    "November",
    "December"
  ]

  let cliText;
  const setCliText = (ref) => {
    cliText = ref;
  }

  const focusCLI = (e) => {
    cliText.focus();
  }

  return (
    <div className="term" onClick={focusCLI}>
      <div className="topbar">

        <div className="topbar-buttons">
          <div className="topbar-button exit"></div>
          <div className="topbar-button minimize"></div>
          <div className="topbar-button maximize"></div>
        </div>

        <div className="titlebar">
          Alex Chui | {daysOfWeek[date.getDay()]} - {month[date.getMonth()]} {date.getDate()}
        </div>

        <div className="mac-symbols">&#8997;&#8984;1</div>

      </div>

      <div className="instructions">
        Click or type to navigate.
        <br/>
        Type "help" to see commands, "clear" to clear the terminal.
      </div>

      <div className="links">
        {`{ `}
          "<Link to={"/"}>Root</Link>",
          "<Link to={"/projects"}>Projects</Link>",
          "<Link to={"/changelog"}>Changelog</Link>",
          "<Link to={"/contact"}>Contact</Link>"
        {` }`}
      </div>

      <CLI setCliText={setCliText} />

    </div>
  )
}

export default Term;
