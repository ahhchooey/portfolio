import React from "react";
import "./styles/changelog.css";


function Changelog() {

  return (
    <div className="changelog">

      <div className="topbar">

        <div className="topbar-buttons">
          <div className="topbar-button exit"></div>
          <div className="topbar-button minimize"></div>
          <div className="topbar-button maximize"></div>
        </div>

        <div className="titlebar">
          About Me
        </div>

        <div className="mac-symbols">&#8997;&#8984;2</div>

      </div>

      <div className="aboutme">
        Hi. My name is Alex.
        <br />
        <br />
        I am a software engineer that likes to build cool things. Before entering the software world, I was a biology researcher in cellular development. I love to tackle difficult and interesting problems to hopefully create a positive impact on the world.
        This is my changelog:
      </div>

    </div>
  )
}

export default Changelog;
