import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import APIDoc from "./APIDocumentation";
import Search from "./Search";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const StudentProfiles = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const fetchStudentProfiles = () => {
    axios.get("http://localhost:8080/api/student/allstudents").then(res => {
      console.log(res);
        setStudentProfiles(res.data);
    });
  };

  useEffect(() => {
    fetchStudentProfiles();
  }, []);

  return studentProfiles.map((studentProfile, index) => {

    return (
        <div key={index}>
          <h1>{studentProfile.id}</h1>
          <h1>{studentProfile.name}</h1>
          <h1>{studentProfile.email}</h1>
          <h1>{studentProfile.dob}</h1>
          <h1>{studentProfile.age}</h1>
        </div>
    )
  })
};
function App() {
  return (
    <div className="App">
        <h1>Welcome to my API Documentation</h1>
        <div className="searchboxendpoints">
            <Search />
        </div>
        <div className="apidoc">
            <APIDoc />
            <div className="endpoints">
                <p>Endpoint: howdy</p>
            </div>
            <div className="jsonresponse">
                <p>JSON OUTPUT</p>
            </div>
        </div>
    </div>
  );
}

export default App;
