import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from "react";
import axios from "axios";
import JSONPretty from "react-json-pretty";

var JSONPrettyMon = require('react-json-pretty/dist/adventure_time');


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
                    <JSONPretty data={this.state.data} theme={JSONPrettyMon}></JSONPretty>
                </div>
            </div>

        );
    }
};

export default SearchBar;