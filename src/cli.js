import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import "./styles/term.css";


function CLI(props) {

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

  const inputRoot = (iV) => {
    props.history.push("/")
  }

  const inputProjects = (iV) => {
    props.history.push("/projects")
  }

  const inputChangelog = (iV) => {
    props.history.push("/changelog")
  }

  const inputContact = (iV) => {
    props.history.push("/contact")
  }

  const inputUnknown = (iV) => {
    const point = document.createElement("div");
    point.append(`zsh: command not found: ${iV}`)

    history.append(point)
  }

  const inputHistory = (iV) => {
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
