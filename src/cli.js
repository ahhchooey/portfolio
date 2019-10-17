import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import "./styles/term.css";


function CLI(props) {

  useEffect(() => {
    props.history.push("/");
  }, [])

  const [inputValue, setInputValue] = useState("");

  const cli = document.querySelector(".cli");
  const historyValue = props.history.location.pathname;
  const history = document.querySelector(".cli-history");

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleEnter = (e) => {
    e.preventDefault();
    let iV = inputValue.toLowerCase();

    inputHistory(iV);

    switch(iV) {
      case "root":
      case "cd ..":
        inputRoot(iV);
        break;
      case "cd root":
        inputUnknown(iV + `. Did you mean "cd .."?`);
        break;
      case "projects":
      case "cd projects":
        inputProjects(iV);
        break;
      case "skills":
      case "cd skills":
        inputSkills(iV);
        break;
      case "changelog":
      case "cd changelog":
        inputChangelog(iV);
        break;
      case "contact":
      case "cd contact":
        inputContact(iV);
        break;
      case "clear":
        clearHistory();
        break;
      case "help":
        inputHelp();
        break;
      default:
        inputUnknown(iV);
    }

    setInputValue("");

    const br = document.createElement("br");
    history.append(br);

    cli.scrollTop = cli.scrollHeight;
  }

  const clearHistory = () => {
    history.innerHTML = "";
  }

  const inputHelp = () => {
    const point = document.createElement("div");

    const root = document.createElement("div");
    root.innerHTML = "go to root - cd .. or root"
    const projects = document.createElement("div");
    projects.innerHTML = "go to projects - cd projects or projects"
    const skills = document.createElement("div");
    skills.innerHTML = "go to skills - cd skills or skills"
    const changelog = document.createElement("div");
    changelog.innerHTML = "go to changelog - cd changelog or changelog"
    const contacts = document.createElement("div");
    contacts.innerHTML = "go to contact - cd contact or contact"

    const clear = document.createElement("div");
    clear.innerHTML = "clear terminal - clear"

    point.append(root, projects, skills, changelog, contacts, clear);

    history.append(point);
  }

  const inputRoot = (iV) => {
    props.history.push("/");
  }

  const inputProjects = (iV) => {
    const point = document.createElement("div");
    point.innerHTML = "Loading projects...";
    history.append(point);

    props.history.push("/projects");
  }

  const inputSkills = (iV) => {
    const point = document.createElement("div");
    point.innerHTML = "Getting skills...";
    history.append(point);

    props.history.push("/skills");
  }

  const inputChangelog = (iV) => {
    const point = document.createElement("div");
    point.innerHTML = "Opening changelog...";
    history.append(point);

    props.history.push("/changelog");
  }

  const inputContact = (iV) => {
    const point = document.createElement("div");
    point.innerHTML = "Retrieving contact information...";
    history.append(point);

    props.history.push("/contact");
  }

  const inputUnknown = (iV) => {
    const point = document.createElement("div");
    point.append(`zsh: command not found: ${iV}`);

    history.append(point);
  }

  const inputHistory = () => {
    const point = document.createElement("div");
    point.append(`~/alexchui${historyValue}`);
    point.classList.add("cli-location");

    const point2 = document.createElement("div");
    point2.append(`> ${inputValue}`);

    history.append(point, point2);
  }

  return (
    <div className="cli">

      <div className="cli-history">
      </div>

      <div className="cli-location">
        ~/alexchui{historyValue}
      </div>

      <form className="cli-input" onSubmit={handleEnter}>
        >
        <input 
          type="text" 
          className="cli-text" 
          ref={props.setCliText} 
          value={inputValue} 
          onChange={handleInput}
        />
      </form>
    </div>
  )
}

export default withRouter(CLI);
