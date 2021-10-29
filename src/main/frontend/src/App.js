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
        <p>
            The base address is http://localhost:8080/api/
            and is already accounted for in the searchbox
            so you only need to put the endpoint
        </p>
        <Search />
        <APIDoc />
    </div>
  );
}

export default App;
