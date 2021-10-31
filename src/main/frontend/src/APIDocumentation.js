import React from 'react'
import './APImethodboxes.css'
import JSONPretty from "react-json-pretty";
export default function APIDoc(){
    var jsonexample = "{" +
        "id: 1," +
        "name: Mariam," +
        "email: mariam.jamal@gmail.com," +
        "ob: 2000-01-05,age: 21" +
        "}";
    var actualjsonexample = JSON.stringify(jsonexample);
    var JSONPrettyMon = require('react-json-pretty/dist/personalTheme');
    return(
        <div className="apidoc">
            <div className="boxgetendpoint">
                <input type="checkbox" id="boxgetendpoint-head"></input>
                <label for="boxgetendpoint-head" className="getendpoint-label">
                    <span className="getmethod">GET</span>
                    <span className="getendpoint">student/allstudents</span>
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

                            <div className="axiosrequest">
                                <p id="p0">
                                    axios.get('http://localhost:8080/api/student/allstudents')</p>
                                    <p id="p1"> .then((response) => &#123;
                                    console.log(response.data)
                                &#125;);
                                </p>
                            </div>
                        </div>
                        <div className="examplejsonresponse">
                            <JSONPretty data={actualjsonexample} theme={JSONPrettyMon}></JSONPretty>
                        </div>
                    </div>
                </div>
            </div>

            <div className="boxgetendpoint2">
                <input type="checkbox" id="boxgetendpoint-head2"></input>
                <label htmlFor="boxgetendpoint-head2" className="getendpoint-label">
                    <span className="getmethod2">GET</span>
                    <span className="getendpoint">student/allstudents</span>
                </label>
                <div className="collapsible-text-api2">
                    <p>This endpoint returns every student in table Student sdf sdf asdfas fasf asf sadfa d
                        fghfgh fhfghfghfdfd gdfg dfg dfg df df gdfg dfdfggdfg dfg dfgdfgdfg
                        fhjhfghj This endpoint returns every student in table Student sdf sdf asdfas fasf asf sadfa d
                        fghfgh fhfghfghfdfd gdfg dfg dfg df df gdfg dfdfggdfg dfg dfgdfgdfg
                    </p>
                </div>
            </div>

            <div className="boxgetendpoint3">
                <input type="checkbox" id="boxgetendpoint-head3"></input>
                <label htmlFor="boxgetendpoint-head3" className="getendpoint-label">
                    <span className="getmethod3">POST</span>
                    <span className="getendpoint">student/allstudents</span>
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