import React from 'react'
import ReactMarkdown from 'react-markdown'
import Collapsible from "react-collapsible";
export default function APIDoc(){
    return(
        // <div className="apidoc">
        //         <div className="boxgetallstudents">
        //             <div className="getallstudents">
        //                 <span className="getmethod">GET</span>
        //                 <span className="getendpoint">student/allstudents</span>
        //             </div>
        //         </div>

        <div className="apidoc">
            <div className="boxgetallstudents">
                <input type="checkbox" id="boxgetallstudents-head"></input>
                <label for="boxgetallstudents-head" className="getallstudents">
                    <span className="getmethod">GET</span>
                    <span className="getendpoint">student/allstudents</span>
                </label>
                <div className="collapsible-text-api">
                    <h2>this will hold the endpoint description</h2>
                </div>
            </div>

            <div className="wrapper">
                <div className="collapsible">
                    <input type="checkbox" id="collapsible-head"></input>
                    <label for="collapsible-head">Collapsible USING </label>
                    <div className="collapsible-text">
                        <h2>Collapsible heading</h2>
                        <p>This is stuff to print to screen</p>
                    </div>
                </div>
            </div>
        </div>
    )
}