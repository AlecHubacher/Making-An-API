import React from 'react'
import './APImethodboxes.css'
import JSONPretty from "react-json-pretty";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";
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
                        This endpoint returns allstudents in the table Student
                    </p>
                    <div className="getallstudents-description">
                        <div className="exampleapicall">
                            <div className="curlrequest">
                                <p>
                                    > curl http://localhost:8080/api/student/allstudents
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
                        This endpoint returns a single student based on their id
                    </p>
                    <div className="getallstudents-description">
                        <div className="exampleapicall">
                            <div className="curlrequest">
                                <p>
                                    > curl http://localhost:8080/api/student/getstudentbyid?id=1
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
                    <span id="getendpoint3">some/other/endpoint</span>
                </label>
                <div className="collapsible-text-api3">
                    <p>This endpoint returns every student in table Student sdf sdf asdfas fasf asf sadfa d
                        fghfgh fhfghfghfdfd gdfg dfg dfg df df gdfg dfdfggdfg dfg dfgdfgdfg
                        fhjhfghj This endpoint returns every student in table Student sdf sdf asdfas fasf asf sadfa d
                        fghfgh fhfghfghfdfd gdfg dfg dfg df df gdfg dfdfggdfg dfg dfgdfgdfg
                    </p>
                </div>
            </div>
        </div>
    )
}