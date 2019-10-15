import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './styles/App.css';

import Term from "./term.js";
import Home from "./home.js";
import Projects from "./projects.js";
import Skills from "./skills.js";
import Changelog from "./changelog.js";
import Contact from "./contact.js";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route path="/" component={Term} />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} /> 
        <Route path="/skills" component={Skills} /> 
        <Route path="/changelog" component={Changelog} /> 
        <Route path="/contact" component={Contact} /> 

      </div>
    </BrowserRouter>
  );
}

export default App;
