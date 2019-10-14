import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./styles/term.css";

import CLI from "./cli.js";

function Term() {

  const [date, setDate] = useState(new Date());

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

  const projectsLink = () => {
    return (
      <Link to={"/projects"}>Projects</Link>
    )
  }

  return (
    <div className="term">
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
        {`{"${projectsLink()}"}`}
      </div>

      <CLI />

    </div>
  )
}

export default Term;
