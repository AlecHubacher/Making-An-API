import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";


const StudentProfiles = () => {
    const fetchStudentProfiles = () => {
      axios.get("http://localhost:8080/api/student/allstudents").then(res => {
    console.log(res);
  });
};
    useEffect(() => {
      fetchStudentProfiles();
    }, []);

    return <h1>Hello</h1>;
};



function App() {
  return (
    <div className="App">
      <StudentProfiles />
    </div>
  );
}

export default App;
