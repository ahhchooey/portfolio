import React from "react";
import "./styles/projects.css";
import noteImage from "./assets/note_screenshot.png";
import safeWalkerImage from "./assets/safewalk_img.png";
import pabbotImage from "./assets/pabbot_screenshot.png";


const projectList = [
  {
    title: "Note",
    image: noteImage,
    description: "Note is a note taking and organizational application. In Note, you can use notebooks, notes, and tags to keep every thought organized. Notebooks can be used to store groups of related notes. And tags can be used to sort and group notes that have similar content. And of course notes are the heart of Note, where any and every thought and idea can be stored and edited.",
    technologies: "Ruby, Rails5, PostgreSQL, JavaScript, React, Redux, SlateJs, HTML5, CSS3",
    livelink: "https://note-ac.herokuapp.com/#/",
    github: "https://github.com/ahhchooey/Note"
  },
  {
    title: "SafeWalker",
    image: safeWalkerImage,
    description: "SafeWalk is a map based application that creates routes based on levels of crime. Based on a users starting location, and a selected destination, SafeWalk will generate a walking route to get from point A to point B based on past levels of crime and physical distance. SafeWalk operates on a node graph that holds information on the location and cost to travel between each node. A variation of Dijkstra's algorithm will be used to calculate optimal paths and Mapbox will be used create the map and an interactive application.",
    technologies: "JavaScript, MongoDB, Express, React, Redux, NodeJS",
    livelink: "https://safewalker.herokuapp.com",
    github: "https://github.com/ahhchooey/SafeWalk"
  },
  {
    title: "Pabbot",
    image: pabbotImage,
    description: "Pabbot is a platforming game where you play as Pabbot. Pabbot is creature that is just trying to get home. Play as Pabbot to help him traverse the dangerous terrains. Pabbot can jump, wall hop, and spin to attack enemies. He has three health to make it all the way through. Make sure Pabbot gets home safe.",
    technologies: "Javascript, Canvas",
    livelink: "https://ahhchooey.github.io/Pabbot/dist/",
    github: "https://github.com/ahhchooey/Pabbot"
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
        <img src={props.project.image} alt="project screen" />
        <table className="project-item-table">
          <tbody>
            <tr>
              <td>Info:&nbsp;</td>
              <td className="project-item-info">
                {props.project.title} | <a href={props.project.livelink}>Live</a> | <a href={props.project.github}>Code</a> 
              </td>
            </tr>
            <tr>
              <td>Desc:&nbsp;</td>
              <td className="project-item-description">{props.project.description}</td>
            </tr>
            <tr>
              <td>Tech:&nbsp;</td>
              <td className="project-item-technologies">{props.project.technologies}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Projects;
