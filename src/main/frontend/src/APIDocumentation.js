import React from 'react'
import './APImethodboxes.css'
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
                    <p>This endpoint returns every student in table Student sdf sdf asdfas fasf asf sadfa d
                        fghfgh fhfghfghfdfd gdfg dfg dfg df  df gdfg dfdfggdfg dfg dfgdfgdfg
                        fhjhfghj This endpoint returns every student in table Student sdf sdf asdfas fasf asf sadfa d
                        fghfgh fhfghfghfdfd gdfg dfg dfg df  df gdfg dfdfggdfg dfg dfgdfgdfg
                    </p>
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
                    <span className="getmethod3">GET</span>
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