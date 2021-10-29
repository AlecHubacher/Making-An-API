import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import APIDoc from "./APIDocumentation";
import Search from "./Search";
import Event from "./Events";
import Events from "./Events";


function App() {
  return (
    <div className="App">
        <h1>Welcome to my API Documentation</h1>
        <h1>howdy</h1>
        <div className="jsonresponsebox">
            <h1>

            </h1>
        </div>
        <div className="searchbar">
            <Search />
        </div>
        <div className="apidoc">
            <APIDoc />
            <div className="endpoints">
                <p>Endpoint: howdy</p>
            </div>
        </div>
    </div>
  );
}

export default App;
