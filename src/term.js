import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import "./styles/term.css";

import CLI from "./cli.js";


function Term(props) {

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

  const historyValue = props.history.location.pathname;
  let cli = document.querySelector(".cli");
  let history = document.querySelector(".cli-history");

  useEffect(() => {
    history = document.querySelector(".cli-history");
    cli = document.querySelector(".cli");
  }, [])

  let cliText;
  const setCliText = (ref) => {
    cliText = ref;
  }

  const focusCLI = (e) => {
    cliText.focus();
  }

  const inputHistory = (iV) => {
    const point = document.createElement("div");
    point.append(`~/alexchui${historyValue}`);
    point.classList.add("cli-location");

    const point2 = document.createElement("div");
    point2.append(`> ${iV}`);

    history.append(point, point2);
  }

  const inputGap = () => {
    const br = document.createElement("br");
    history.append(br);

    cli.scrollTop = cli.scrollHeight;
  }

  const pushRoot = (e) => {
    e.preventDefault();
    inputHistory("root");

    inputGap();
    props.history.push("/")
  }

  const pushProjects = (e) => {
    e.preventDefault();
    inputHistory("projects");
    const point = document.createElement("div");
    point.innerHTML = "Opening projects...";
    history.append(point);

    inputGap();
    props.history.push("/projects")
  }

  const pushChangeLog = (e) => {
    e.preventDefault();
    inputHistory("changelog");
    const point = document.createElement("div");
    point.innerHTML = "Opening changelog...";
    history.append(point);

    inputGap();
    props.history.push("/changelog")
  }

  const pushContact = (e) => {
    e.preventDefault();
    inputHistory("contact");
    const point = document.createElement("div");
    point.innerHTML = "Opening contact information...";
    history.append(point);
    
    inputGap();
    props.history.push("/contact")
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
          "<span className="link" onMouseDown={pushRoot}>Root</span>":
            {` {`}
              "<span className="link" onMouseDown={pushProjects}>Projects</span>",
              "<span className="link" onMouseDown={pushChangeLog}>Changelog</span>",
              "<span className="link" onMouseDown={pushContact}>Contact</span>"
            {`}`}
        {` }`}
      </div>

      <CLI setCliText={setCliText} />

    </div>
  )
}

export default withRouter(Term);
