import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import Search from "./Search";
import DataDisplay from './DataDisplay';


const StudentProfiles = () => {

    const [studentProfiles, setStudentProfiles] =useState([]);

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
                <h1>{studentProfile.name}</h1>
                <h1>{studentProfile.email}</h1>
                <h1>{studentProfile.id}</h1>
                <h1>{studentProfile.age}</h1>
            </div>
        )
    })
};



// function App() {
//   return (
//     <div className="App">
//         <dataDisplay />
//       <StudentProfiles />
//         <Search />
//     </div>
//   );
// }

class App extends React.Component {
    render() {
        return (
            <div>
                <StudentProfiles></StudentProfiles>
                <Search></Search>
                <DataDisplay></DataDisplay>
            </div>
        );
    }
}

export default App;
