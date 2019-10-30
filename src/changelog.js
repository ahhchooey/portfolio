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
          Alex Chui | Changelog
        </div>

        <div className="mac-symbols">&#8997;&#8984;2</div>

      </div>

      <div className="changelog-body">
        <div className="changelog-title">Alex Changelog</div>
        <br />


        <div className="version">v0.10</div>
        <div className="changes">Graduated App Academy</div>
        <div className="changes">Hacker in Residence at App Academy</div>

        <div className="version">v0.9</div>
        <div className="changes">Left Research</div>
        <div className="changes">Started App Academy</div>

        <div className="version">v0.8</div>
        <div className="changes">Research at UCSF</div>

        <div className="version">v0.7</div>
        <div className="changes">Left Research Intern</div>
        <div className="changes">MCAT</div>

        <div className="version">v0.6</div>
        <div className="changes">Left Nepal</div>
        <div className="changes">Research at ADMD</div>

        <div className="version">v0.5</div>
        <div className="changes">Went to Nepal</div>
        <div className="changes">Volunteer at Stupa Hospital</div>

        <div className="version">v0.4</div>
        <div className="changes">Graduated College</div>
        <div className="changes">Moved back to the Bay</div>
        
        <div className="version">v0.3</div>
        <div className="changes">Graduated Dougherty Valley Highschool</div>
        <div className="changes">Moved to SoCal</div>
        <div className="changes">Started UCSD</div>

        <div className="version">v0.2</div>
        <div className="changes">Moved from San Francisco</div>
        <div className="changes">Moved to East Bay</div>

        <div className="version">v0.1</div>
        <div className="changes">First Release</div>
      </div>

    </div>
  )
}

export default Changelog;
