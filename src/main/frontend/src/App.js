import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";


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
      <StudentProfiles />
    </div>
  );
}

export default App;
