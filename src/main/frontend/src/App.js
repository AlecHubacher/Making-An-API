import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import APIDoc from "./APIDocumentation";
import Search from "./Search";
import StudentProfiles from "./APICalls";


function App() {
  return (
    <div className="App">
        <h1>Welcome to my API Documentation</h1>
        <h1>howdy</h1>
        <div className="jsonresponsebox">
            <h1>
                <StudentProfiles />
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
