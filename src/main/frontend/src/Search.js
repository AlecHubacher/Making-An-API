import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from "react";
import axios from "axios";
import JSONPretty from "react-json-pretty";

var JSONPrettyMon = require('react-json-pretty/dist/personalTheme');


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            requestType: false
        }

        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick = (e) => {
        if(e.target.value === 'POST') {
            this.setState({
                requestIsPost: true,
                postname: "",
                postemail: "",
                postdob: "",
                postage: ""
            })
            if(this.state.requestIsPost) {
                console.log("state of requestIsPost is now: true");
            } else {
                console.log("state of requestIsPost is now: false");
            }
        }
        else {
            this.setState({
                requestIsPost: false,
            })
        }


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
                <div className="searchendpoint">
                    <div className="request-type">
                        <select onChange={e => this._handleClick(e)} className="request">
                            <option>GET</option>
                            <option>POST</option>
                        </select>
                    </div>
                    <div className="search-box">
                        <input onKeyPress={this._handleKeyPress} type="text" className="search-txt" name="" placeholder="Search Endpoints"/>
                        {/*<a className="search-btn" href="#">*/}
                        {/*    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>*/}
                        {/*</a>*/}
                    </div>
                </div>
                {this.state.requestIsPost &&
                <div className="postrequestboxes">
                    <div className="student-name">
                        <p className="postfields">Name</p>
                        <input placeholder="Mina" className="student-name-searchbox"></input>
                    </div>
                    <div className="student-email">
                        <p className="postfields">Email</p>
                        <input placeholder="mina@yahoo.com" className="student-email-searchbox"></input>
                    </div>
                    <div className="student-dob">
                        <p className="postfields">Date of Birth</p>
                        <input placeholder="year-month-day" className="student-dob-searchbox"></input>
                    </div>
                    <div className="student-age">
                        <p className="postfields">Age</p>
                        <input placeholder="27" className="student-age-searchbox"></input>
                    </div>
                    <span className="stretch"></span>
                </div>
                }
                <div className="jsonresponsebox">
                    <JSONPretty data={this.state.data} theme={JSONPrettyMon}></JSONPretty>
                </div>
            </div>

        );
    }
};

export default SearchBar;