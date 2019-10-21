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
  })

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
    e.stopPropagation();
    e.preventDefault();
    inputHistory("root");

    inputGap();
    props.history.push("/")
  }

  const pushProjects = (e) => {
    e.stopPropagation();
    e.preventDefault();
    inputHistory("projects");
    const point = document.createElement("div");
    point.innerHTML = "Loading projects...";
    history.append(point);

    inputGap();
    props.history.push("/projects")
  }

  const pushSkills = (e) => {
    e.stopPropagation();
    e.preventDefault();
    inputHistory("skills");
    const point = document.createElement("div");
    point.innerHTML = "Getting skills...";
    history.append(point);

    inputGap();
    props.history.push("/skills")
  }

  const pushChangeLog = (e) => {
    e.stopPropagation();
    e.preventDefault();
    inputHistory("changelog");
    const point = document.createElement("div");
    point.innerHTML = "Opening changelog...";
    history.append(point);

    inputGap();
    props.history.push("/changelog")
  }

  const pushContact = (e) => {
    e.stopPropagation();
    e.preventDefault();
    inputHistory("contact");
    const point = document.createElement("div");
    point.innerHTML = "Retrieving contact information...";
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
        Type in the terminal or click on the blue links to navigate.
        <br/>
        Type "help" to see commands, "clear" to clear the terminal.
      </div>

      <div className="links">
        {`{ `}
          "<span className="link" onMouseDown={pushRoot}>Root</span>":
            {` {`}
              "<span className="link" onMouseDown={pushProjects}>Projects</span>",
              "<span className="link" onMouseDown={pushSkills}>Skills</span>",
              "<span className="link" onMouseDown={pushChangeLog}>Changelog</span>",
              "<span className="link" onMouseDown={pushContact}>Contact</span>"
            {`}`}
        {` }`}
      </div>

      <CLI setCliText={setCliText} />

      <div className="term-socials">
          <a href="https://www.linkedin.com/in/alex-chui-075785117/" target="_blank" rel="noopener noreferrer">
            <svg className="linkedin-term" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>

          <a href="https://angel.co/alex-chui-4" target="_blank" rel="noopener noreferrer">
            <svg className="angelist-term" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>AngelList icon</title><path d="M16.465 9.954c.735-2 1.31-3.65 1.723-4.954.41-1.3.618-2.1.618-2.4 0-.315-.07-.564-.21-.738-.135-.174-.324-.264-.567-.264-.31 0-.63.255-.94.765-.32.51-.67 1.334-1.06 2.467l-1.65 4.76 2.08.362h-.01v.002zm-2.193 4.435c-.474-.03-.923-.08-1.344-.15-.42-.08-.83-.19-1.216-.33.177.35.335.7.472 1.05.138.35.25.69.34 1.04.26-.33.54-.63.83-.9.292-.27.6-.51.915-.72zm-1.862-5l-1.78-5.14c-.464-1.31-.82-2.16-1.075-2.57-.25-.4-.525-.6-.822-.6-.23 0-.417.08-.56.26-.144.18-.214.41-.214.7 0 .5.19 1.38.57 2.64.38 1.25.96 2.89 1.73 4.93.06-.12.16-.21.28-.26.12-.05.28-.08.49-.08.06 0 .19.01.39.01.19.02.52.04.97.09zm-1.618 7.96c.188 0 .36-.09.51-.26.15-.18.234-.36.234-.55 0-.21-.15-.7-.452-1.46-.3-.76-.68-1.51-1.13-2.25-.33-.55-.655-.97-.97-1.25-.324-.28-.625-.42-.91-.42-.23 0-.484.14-.767.44-.28.29-.42.56-.42.81 0 .26.14.66.413 1.18.275.53.645 1.09 1.104 1.68.485.65.94 1.15 1.37 1.51.428.36.77.54 1.02.54h-.002zm-4.945-.4c.156.19.37.46.646.82.723 1 1.395 1.5 2.01 1.5.21 0 .397-.07.563-.2.164-.14.247-.27.247-.42 0-.17-.11-.44-.33-.83-.222-.39-.524-.82-.907-1.3-.44-.56-.805-.97-1.098-1.23-.288-.26-.525-.39-.697-.39-.38 0-.74.21-1.06.62-.32.4-.48.9-.48 1.46 0 .45.12.95.35 1.51.23.55.55 1.11.98 1.67.65.87 1.46 1.53 2.42 2 .96.46 2.03.69 3.19.69 2.14 0 3.94-.8 5.38-2.4 1.45-1.6 2.17-3.6 2.17-6.01 0-.74-.05-1.33-.16-1.76-.11-.43-.29-.75-.54-.95-.45-.38-1.33-.71-2.63-1.01-1.3-.3-2.66-.45-4.08-.45-.39 0-.68.07-.84.2-.16.13-.24.36-.24.673 0 .75.42 1.29 1.26 1.626.84.34 2.19.51 4.06.51h.676c.15 0 .28.06.37.174.09.11.15.28.18.52-.19.17-.57.37-1.154.6-.59.22-1.03.45-1.34.665-.66.484-1.19 1.06-1.59 1.724-.4.66-.6 1.29-.6 1.883 0 .36.086.8.258 1.31.17.51.26.823.26.95v.11l-.03.15c-.48-.03-.86-.313-1.14-.85-.287-.53-.42-1.24-.42-2.13v-.15c-.09.075-.176.135-.26.165-.086.034-.178.05-.27.05-.1 0-.198-.006-.29-.02-.09-.016-.18-.04-.29-.075.03.12.057.24.076.353.01.12.02.21.02.27 0 .406-.16.76-.48 1.05-.32.287-.7.43-1.14.43-.69 0-1.397-.34-2.11-1.01-.715-.674-1.07-1.34-1.07-1.985 0-.12.015-.23.04-.323s.075-.17.14-.24zm11.807-6.73c.985.18 1.685.6 2.09 1.25.41.64.61 1.66.61 3.06 0 2.77-.828 5.03-2.492 6.79-1.667 1.76-3.797 2.65-6.387 2.65-1.023 0-2.016-.19-2.976-.56-.97-.37-1.79-.89-2.49-1.54-.79-.73-1.39-1.49-1.78-2.3-.4-.81-.6-1.64-.6-2.48 0-.95.2-1.68.6-2.19.4-.52 1.05-.87 1.93-1.06-.17-.39-.29-.71-.36-.98-.08-.27-.12-.47-.12-.61 0-.5.26-1.01.78-1.52.52-.52 1.01-.78 1.47-.78.19 0 .4.03.62.11.22.07.47.19.75.35-.81-2.35-1.43-4.2-1.81-5.5-.39-1.31-.58-2.2-.58-2.7 0-.68.17-1.23.52-1.63.36-.4.84-.6 1.44-.6 1.03 0 2.34 2.31 3.93 6.923.28.79.48 1.4.63 1.83l.51-1.453c1.59-4.55 2.95-6.83 4.1-6.83.56 0 1.01.19 1.34.57.33.383.5.887.5 1.523 0 .48-.19 1.36-.56 2.65-.367 1.28-.92 2.96-1.67 5.04"/></svg>
          </a>

          <a href="https://github.com/ahhchooey" target="_blank" rel="noopener noreferrer">
            <svg className="github-term" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
      </div>

    </div>
  )
}

export default withRouter(Term);
