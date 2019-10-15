import React from "react";
import "./styles/projects.css";


const projectList = [
  {
    title: "Note",
  },
  {
    title: "SafeWalker",
  },
  {
    title: "Pabbot"
  }
];

function Projects() {

  return (
    <div className="projects">
      {
        projectList.map((project, i) => <ProjectItem key={i} project={project} />)
      }
    </div>
  )
}

function ProjectItem(props) {

  return (
    <div className="project-item">

      <div className="topbar">

        <div className="topbar-buttons">
          <div className="topbar-button exit"></div>
          <div className="topbar-button minimize"></div>
          <div className="topbar-button maximize"></div>
        </div>

        <div className="titlebar">
          {props.project.title}
        </div>

        <div className="mac-symbols">&#8997;&#8984;1</div>

      </div>

      <div className="project-item-body">
        hi
      </div>
    </div>
  )
}

export default Projects;
