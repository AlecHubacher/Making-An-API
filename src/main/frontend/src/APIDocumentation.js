import React from 'react'
import './APImethodboxes.css'
import JSONPretty from "react-json-pretty";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function APIDoc(){
    var jsonexample = "{" +
        "id: 1," +
        "name: Mariam," +
        "email: mariam.jamal@gmail.com," +
        "ob: 2000-01-05,age: 21" +
        "}";
    function copyPassword(endpointcopy)
    {
        //console.log("we are in copypassword "+endpointid)
        var copyText = document.getElementById(endpointcopy);
        var textArea = document.createElement("textarea");
        textArea.value = copyText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
    }
    var actualjsonexample = JSON.stringify(jsonexample);
    var JSONPrettyMon = require('react-json-pretty/dist/personalTheme');
    let getstudentbyid_endpoint = "student/getstudentbyid?id=&#123id&#125";
    return(
        <div className="apidoc">
            <div className="boxgetendpoint">
                <input type="checkbox" id="boxgetendpoint-head"></input>
                {/*<button onClick={copyPassword} id="cp-btn">Copy</button>*/}
                <a className="cp-btn" href="#" onClick={() => copyPassword("getendpoint")}>
                    <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                </a>
                <label for="boxgetendpoint-head" className="getendpoint-label">
                    <span className="getmethod">GET</span>
                    <span id="getendpoint">student/allstudents</span>
                </label>
                <div className="collapsible-text-api">
                    <p>
                        This endpoint returns all students in the table Student
                    </p>
                    <div className="getallstudents-description">
                        <div className="exampleapicall">
                            <div className="curlrequest">
                                <p id="p0">
                                    curl http://localhost:8080/api/student/allstudents
                                </p>
                            </div>
                        </div>

                        <div className="axiosrequest">
                            <p id="p0">
                                axios.get('http://localhost:8080/api/student/allstudents')</p>
                            <p id="p1"> .then((response) => &#123;
                                console.log(response.data)
                                &#125;);
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="boxgetendpoint2">
                <input type="checkbox" id="boxgetendpoint-head2"></input>
                <a className="cp-btn" href="#" onClick={() => copyPassword("getendpoint2")}>
                    <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                </a>
                <label htmlFor="boxgetendpoint-head2" className="getendpoint-label">
                    <span className="getmethod2">GET</span>
                    <span id="getendpoint2">student/getstudentbyid?id=&#123;id&#125;</span>
                </label>
                <div className="collapsible-text-api2">
                    <p>
                        This endpoint returns a single student given their id
                    </p>
                    <div className="getallstudents-description">
                        <div className="exampleapicall">
                            <div className="curlrequest">
                                <p id="p0">
                                     curl http://localhost:8080/api/student/getstudentbyid?id=1
                                </p>
                            </div>
                        </div>

                        <div className="axiosrequest-getstudentbyid">
                            <p id="p0">
                                axios.get('http://localhost:8080/api/student/getstudentbyid?id=1')</p>
                            <p id="p1"> .then((response) => &#123;
                                console.log(response.data)
                                &#125;);
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="boxgetendpoint3">
                <input type="checkbox" id="boxgetendpoint-head3"></input>
                <a className="cp-btnpost" href="#" onClick={() => copyPassword("getendpoint3")}>
                    <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                </a>
                <label htmlFor="boxgetendpoint-head3" className="getendpoint-label">
                    <span className="getmethod3">POST</span>
                    <span id="getendpoint3">student/addstudent</span>
                </label>
                <div className="collapsible-text-api3">
                    <p>
                        This endpoint lets you add a student to the table Student
                    </p>
                    <div className="getallstudents-description">
                        <div className="exampleapicall">
                            <div className="curlrequestpost">
                                <p>
                                    curl -d '&#123;json&#125;' -H 'Content-Type: application/json -X POST
                                    -F 'name=linuxize' -F 'email=linuxize@example.com' -F 'dob=1999-05-05'
                                    -F 'major=Computer Science' http://localhost:8080/api/student/addstudent
                                </p>
                            </div>
                        </div>

                        <div className="axiosrequest-addstudent">
                            <p>
                                const options = &#123;<br />
                                &emsp;&emsp;&emsp;&emsp;method: 'POST',<br />
                                &emsp;&emsp;&emsp;&emsp;headers: &#123;'Content-Type': 'application/json'&#125;,<br />
                                &emsp;&emsp;&emsp;&emsp;data: &#123;<br />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name: "John",<br />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;email: "john@gmail.com,<br />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dob: "1999-05-05",<br />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;major: "Computer Science"<br />
                                &emsp;&emsp;&emsp;&emsp;&#125;, <br />
                                &emsp;&emsp;&emsp;&emsp;url: "http://localhost:8080/api/student/addstudent"<br />
                                &#125;;<br />
                                axios(options);</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}