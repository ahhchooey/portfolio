import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './styles/App.css';

import Term from "./term.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route path="/" component={Term} />

      </div>
    </BrowserRouter>
  );
}

export default App;
