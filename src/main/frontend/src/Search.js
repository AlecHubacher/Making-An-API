import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from "react";
import Event from "./Events";
import axios from "axios";
import JSONPretty from "react-json-pretty";

var JSONPrettyMon = require('react-json-pretty/dist/monikai');


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }

        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

     _handleKeyPress(e) {
        if(e.key === 'Enter') {
            console.log("enter has been pressed");
            let line = e.target.value;
            if(e.target.value === 'howdy') {
                this.setState( {
                    data: line
                })
            }
            else {
                console.log(line);
                axios.get("http://localhost:8080/api/"+line).then(res => {
                    console.log(res.data);
                    this.setState({
                        data: res.data
                    })
                });
            }
            // {<StudentProfiles></StudentProfiles>}
        }
    }

    render() {
        return (
            <div className="jsonandsearch">
                <div className="search-box">
                    <input onKeyPress={this._handleKeyPress} type="text" className="search-txt" name="" placeholder="Search Endpoints"/>
                    <a className="search-btn" href="#">
                        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                    </a>
                </div>
                <div className="jsonresponsebox">
                    {/*<h1><pre>{JSON.stringify(this.state.data, null, 2)}</pre></h1>*/}
                    <JSONPretty data={this.state.data} theme={JSONPrettyMon}></JSONPretty>
                </div>
            </div>

        // <input type="text" onKeyPress={this._handleKeyPress} />

        );
    }
};

export default SearchBar;