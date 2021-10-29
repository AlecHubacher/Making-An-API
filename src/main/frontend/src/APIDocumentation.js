import React from 'react'
import ReactMarkdown from 'react-markdown'
export default function APIDoc(){
    return(
        <div className="apidoc">
            <div className="boxgetallstudents">
                <div className="getallstudents">
                    <span className="getmethod">GET</span>
                    <span className="getendpoint">student/allstudents</span>
                </div>
            </div>
        </div>
    )
}