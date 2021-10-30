import React from 'react'
import ReactMarkdown from 'react-markdown'
import Collapsible from "react-collapsible";
export default function APIDoc(){
    return(
        <div className="apidoc">
            <div className="boxgetendpoint">
                <input type="checkbox" id="boxgetendpoint-head"></input>
                <label for="boxgetendpoint-head" className="getendpoint-label">
                    <span className="getmethod">GET</span>
                    <span className="getendpoint">student/allstudents</span>
                </label>
                <div className="collapsible-text-api">
                    <p>This endpoint returns every student in table Student</p>
                </div>
            </div>
        </div>
    )
}