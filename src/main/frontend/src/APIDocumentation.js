import React from 'react'
import ReactMarkdown from 'react-markdown'
export default function APIDoc(){
    return(
        <div className="apidoc">
            <div className="endpoints">
                <div className="getallstudents">
                    <ReactMarkdown>
                        ```
                        GET student/allstudents
                        ```
                    </ReactMarkdown>
                </div>
            </div>
            <div className="jsonresponse">
                <ReactMarkdown>

                </ReactMarkdown>
            </div>
        </div>
    )
}